import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const ResultImage = ({ name, url, onLikeClick, key, width, height }) => {
  return (
    <div key={key} className="centerContent">
      <h5 className="imageTitle">{name}</h5>
      <img src={url} alt={name} width={width} height={height} />
      <div className="likeBtnWrapper"><button className="gifBtn" onClick={onLikeClick}>Like</button></div>
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
