import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import './styles.css';
import { getGifData, onAddLikedGif, onDeleteLikedGif, onClearGifData } from './actions';
import ResultImage from '../../component/ResultImage/index';
import LikedGifImages from '../../component/LikedGifImages/index';

class NewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weirdnesLevel: 0,
    };
    this.onSliderChange = this.onSliderChange.bind(this);
  }

  onLikeClick = (e) => {
    this.props.onAddLikedGif(this.props.gifData.data.id, this.props.gifData.data.title, this.props.gifData.data.images.fixed_height_small.url, this.state.weirdnesLevel);
    // this.props.onClearGifData(this.props.gifData.data.id);
  }

  onRemoveLikedGif = (e) => {
    const arrIndex = this.props.likedGifs.map((x) => { return x.url; }).indexOf(e.currentTarget.name);

    this.props.onDeleteLikedGif(arrIndex)
  }

  async onSliderChange(e) {
    await this.setState({ weirdnesLevel: e.currentTarget.value });
    this.props.getGifData(this.state.gifInputValue, this.state.weirdnesLevel);
  }

  likedGifImages = () => {
    return this.props.likedGifs.map((gif) => {
      const name = gif.name.length > 31 ? `${gif.name.slice(0,27)}...` : gif.name;
      return <LikedGifImages name={name} url={gif.url} key={gif.id} onRemoveGifClick={this.onRemoveLikedGif} />;
    })
  }

  render() {
    const imageName = this.props.gifData.data &&  this.props.gifData.data.title;
    const imageURL = this.props.gifData.data && this.props.gifData.data.images.fixed_width.url;
    const imageId = this.props.gifData.data && this.props.gifData.data.id;

    return(
      <div>
        <div className="pgHeader"><h3>Weirdness Calculator</h3></div>
        <div className="calcContainer">
          <div className="calcDescrip">
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
              <input
                value={this.state.gifInputValue}
                onChange={(e) => e.currentTarget.value === '' ? this.setState({ gifInputValue: e.currentTarget.value, showResultImage: false }) : this.setState({ gifInputValue: e.currentTarget.value })}
                className="gifInput"
                placeholder="Search GIFs"
              />
              <button
                type="submit"
                onClick={(e) => {e.preventDefault(); this.setState({ showResultImage: true }); this.props.getGifData(this.state.gifInputValue, this.state.weirdnesLevel)}}
                className="gifBtn"
              >
                Search
              </button>
            </form>
          </div>
          <div className="calcResults">
            <h4>YOUR RESULTS</h4>
              <ResultImage
                name={imageName}
                url={imageURL}
                key={imageId}
                onLikeClick={this.onLikeClick}
                sliderValue={this.state.weirdnesLevel}
                onSliderChange={this.onSliderChange}
              />
          </div>
        </div>
        <div className="likedGifContainer">
          <h4>YOUR LIKED GIFS</h4>
          <h4 className="nullHeader">You must <i>like</i> {5 - this.props.likedGifs.length} more GIF to start the weirdness process.</h4>
          {this.props.likedGifs.length > 0 ? this.likedGifImages() : null}
          <div className="calcBtnContainer">
            <Link to="/results" className="gifBtn">Calculate My Weirdness Score</Link>
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
