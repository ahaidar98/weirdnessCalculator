import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const ResultImage = ({ name, url, onLikeClick, key, sliderValue, onSliderChange }) => {
  return (
    <div id={key} className="centerContent">
      {url ?
        <div>
          <h5 className="imageTitle">{name}</h5>
          <img src={url} alt={name} />
          <div className="likeBtnWrapper">
            <button className="gifBtn" onClick={onLikeClick} name={url}>
              Like
            </button>
          </div>
          <br />
          <input className="slider" type="range" min="0" max="10" value={sliderValue} onChange={onSliderChange} />
          <h6>Weirdness Level: {sliderValue}</h6>
        </div>
      : null }
    </div>
  );
};

ResultImage.propTypes = {
  key: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
  sliderValue: PropTypes.PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onLikeClick: PropTypes.func.isRequired,
  onSliderChange: PropTypes.func.isRequired,
};

ResultImage.defaultProps = {
  key: '',
  name: '',
  url: '',
};

export default ResultImage;
