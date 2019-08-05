import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import './styles.css';
import { getGifData, onAddLikedGif, onDeleteLikedGif } from './actions';
import ResultImage from '../../component/ResultImage/index';
import LikedGifImages from '../../component/LikedGifImages/index';

class NewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weirdnesLevel: 0,
      numLikedGifs: 0,
    };
    this.onSliderChange = this.onSliderChange.bind(this);
  }

  onLikeClick = (e) => {
    this.setState({ numLikedGifs: (this.state.numLikedGifs + 1) });
    this.props.onAddLikedGif(this.props.gifData.data.id, this.props.gifData.data.title, this.props.gifData.data.images.fixed_width_small.url, this.state.weirdnesLevel);
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
      return <LikedGifImages name={gif.name} url={gif.url} key={gif.id} onRemoveGifClick={this.onRemoveLikedGif} />;
    })
  }

  render() {
    const imageName = this.props.gifData.data && this.props.gifData.data.title;
    const imageURL = this.props.gifData.data && this.props.gifData.data.images.fixed_width.url;
    const imageWidth = this.props.gifData.data && this.props.gifData.data.images.fixed_width.width;
    const imageHeight = this.props.gifData.data && this.props.gifData.data.images.fixed_width.height;
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
              like 5 GIFs, we'll show you how weird you are.
            </p>
            <br />
            <form>
              <input
                onChange={(e) => this.setState({ gifInputValue: e.currentTarget.value })}
                className="gifInput"
                placeholder="Search GIFs"
              />
              <button
                type="submit"
                onClick={(e) => {e.preventDefault(); this.props.getGifData(this.state.gifInputValue, this.state.weirdnesLevel)}}
                className="gifBtn"
              >
                Search
              </button>
            </form>
          </div>
          <div className="calcResults">
            <h5>YOUR RESULTS</h5>
            <ResultImage
              name={imageName}
              url={imageURL}
              key={imageId}
              onLikeClick={this.onLikeClick}
              width={imageWidth}
              height={imageHeight}
              sliderValue={this.state.weirdnesLevel}
              onSliderChange={this.onSliderChange}
            />
          </div>
        </div>
        <div className="likedGifContainer">
          <h5>YOUR LIKED GIFS</h5>
          {this.likedGifImages()}
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
  return bindActionCreators({ getGifData, onAddLikedGif, onDeleteLikedGif }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(NewPage);
