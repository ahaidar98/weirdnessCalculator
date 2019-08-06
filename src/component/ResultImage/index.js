import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const ResultImage = ({ name, url, onLikeClick, key, width, height, sliderValue, onSliderChange, hideResults }) => {
  return (
    <div id={key} className="centerContent">
      {!hideResults ?
        <div>
          <h5 className="imageTitle">{name}</h5>
          <img src={url} alt={name} width={width} height={height} />
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
};

ResultImage.defaultProps = {
  key: ''
};

export default ResultImage;
