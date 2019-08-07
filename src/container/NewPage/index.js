import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import './styles.css';
import { getGifData, onAddLikedGif, onDeleteLikedGif, onClearGifData } from './actions';
import ResultImage from '../../component/ResultImage/index';
import LikedGifImages from '../../component/LikedGifImages/index';
import ErrorMessage from '../../component/errorMessage/index';

class NewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weirdnesLevel: 0,
      gifInputValue: ''
    };
    this.onSliderChange = this.onSliderChange.bind(this);
  }

  componentWillReceiveProps() {
    if(this.props.gifStatus === 'Loading') {
      this.setState({ madeSearch: true });
    }
  }

  async onSliderChange(e) {
    await this.setState({ weirdnesLevel: e.currentTarget.value });
    this.props.getGifData(this.state.gifInputValue, this.state.weirdnesLevel);
  }

  onLikeClick = (e) => {
    this.props.onAddLikedGif(this.props.gifData.data.id, this.props.gifData.data.title, this.props.gifData.data.images.fixed_height_small.url, this.state.weirdnesLevel, this.state.gifInputValue);
    this.props.onClearGifData();
    this.setState({ gifInputValue: '', weirdnesLevel: 0 });
  }

  onGifInputSearch = (e) => {
    e.preventDefault();
    const findSameTerm = this.props.likedGifs.map((x) => { return x.searchTerm; }).indexOf(this.state.gifInputValue);
    const findSameTermWSpace = this.props.likedGifs.map((x) => { return `${x.searchTerm} `; }).indexOf(this.state.gifInputValue);
    const notSameTerm = ((findSameTerm === -1) && (findSameTermWSpace === -1)) ? true : false;

    if(notSameTerm) {
      this.setState({ searchError: '', removeGifFlag: false });
      this.props.getGifData(this.state.gifInputValue, this.state.weirdnesLevel);
    } else {
      this.setState({ searchError: 'You\'ve already used that term. Please search another term.' });
    }
  }

  onRemoveLikedGif = (e) => {
    const arrIndex = this.props.likedGifs.map((x) => { return x.url; }).indexOf(e.currentTarget.name);
    this.props.onDeleteLikedGif(arrIndex);
    this.setState({ removeGifFlag: true, searchError: '' });
  }

  likedGifImages = () => {
    return this.props.likedGifs.map((gif) => {
      const name = gif.name.length > 31 ? `${gif.name.slice(0,27)}...` : gif.name;
      return <LikedGifImages name={name} url={gif.url} key={gif.id} onRemoveGifClick={this.onRemoveLikedGif} />;
    })
  }

  resultImgMsg = () => {
    if ((this.props.gifStatus === 'No Results') && this.state.madeSearch) {
        return (<h4 className="imgMsg">No Results</h4>)
    } else if (this.props.likedGifs.length === 5) {
      return (<h4 className="imgMsg">Hooray, you've selected 5 GIFs! Press the <i>Calculate My Weirdness Score</i> to continue the weirdness process</h4>);
    } else if (!this.state.gifInputValue && this.props.likedGifs.length > 0) {
      return (<h4 className="imgMsg">GIF {this.state.removeGifFlag ? 'removed' : 'added'}! Search for another GIF.</h4>);
    }  else if (this.state.searchError) {
        return (<h4 className="imgMsg">Enter a search term in the input box above to continue the weirdness process</h4>)
    } else if (!this.props.gifData.data) {
      return (<h4 className="imgMsg">Enter a search term in the input box above to start the weirdness process</h4>);
    } return null;
  }
  render() {
    const imageName = this.props.gifData.data &&  this.props.gifData.data.title;
    const imageURL = this.props.gifData.data && this.props.gifData.data.images.fixed_width.url;
    const imageId = this.props.gifData.data && this.props.gifData.data.id;
    const isLinkDisabled = this.props.likedGifs.length !== 5 ? 'noBtn' : null;
    const isBtnDisabled = !this.state.gifInputValue || this.props.likedGifs.length === 5 ? 'disabledLink' : null;

    return(
      <div className="pgContianer">
        <div className="pgHeader"><h3>Weirdness Calculator</h3></div>
        <div className="calcContainer">
          <div className="calcDescrip">
            <ErrorMessage isError={this.props.gifStatus === 'Failed'} />
            <p>
              Find out how weird you are by selecting the GIFs that make you laugh.
              We'll show you the least weird ones to start, but you can move the slider
              to make them weirder.
            </p>
            <p>
              When you find a GIF you like, press the <i>Like</i> button. Once you
              like 5 GIFs, we'll show you how weird you are. You can only like one GIF per search term.
            </p>
            <br />
            <form>
              {this.state.searchError ? <h5 className="error">{this.state.searchError}</h5>: null}
              <input
                value={this.state.gifInputValue}
                onChange={(e) => this.setState({ gifInputValue: e.currentTarget.value })}
                className="gifInput"
                placeholder="Search GIFs"
              />
              <button
                type="submit"
                onClick={(e) => this.onGifInputSearch(e)}
                className={`${isBtnDisabled} gifBtn`}
              >
                Search
              </button>
            </form>
          </div>
          <div className="calcResults">
            <h4>YOUR RESULTS</h4>
            {this.props.gifStatus !== 'Loading' ?
              <ResultImage
                name={imageName}
                url={imageURL}
                key={imageId}
                onLikeClick={this.onLikeClick}
                sliderValue={this.state.weirdnesLevel}
                onSliderChange={this.onSliderChange}
              />
            : <div className="loaderWrapper"><div className="loader" /></div>}
            {!imageURL ? this.resultImgMsg() : null}
          </div>
        </div>
        <div className="likedGifContainer">
          <h4>YOUR LIKED GIFS</h4>
          {5 - this.props.likedGifs.length === 0 ? null : <h4 className="nullHeader">You must <i>like</i> {5 - this.props.likedGifs.length} more GIF to start the weirdness calculation.</h4>}
          {this.props.likedGifs.length > 0 ? this.likedGifImages() : null}
          <div className="calcBtnContainer">
            <Link to="/results" className={`${isLinkDisabled} gifBtn`}>Calculate My Weirdness Score</Link>
          </div>
        </div>
      </div>
    );
  }
}
NewPage.propTypes = {
  getGifData: PropTypes.func.isRequired,
  onAddLikedGif: PropTypes.func.isRequired,
  onDeleteLikedGif: PropTypes.func.isRequired,
  gifStatus: PropTypes.string.isRequired,
  gifErrorMessage: PropTypes.array,
};
NewPage.defaultProps = {
  gifErrorMessage: [],
};
function mapStateToProps(state) {
  return {
    gifData: state.NewPage.gifData,
    gifStatus: state.NewPage.gifStatus,
    gifErrorMessage: state.NewPage.gifErrorMessage,
    likedGifs: state.NewPage.likedGifs,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getGifData, onAddLikedGif, onDeleteLikedGif, onClearGifData }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(NewPage);
