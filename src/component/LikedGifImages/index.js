import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const LikedGifImages = ({ name, url, key, onRemoveGifClick }) => {
  return (
    <div id={key} className="likedGifTile">
      <h5>{name}</h5>
      <div className="imgWrapper">
        <img src={url} alt={name} className="likedGifImg" />
        <button className="removeBtn" name={url} onClick={onRemoveGifClick}><div className="removeDiv" /></button>
      </div>
    </div>
  );
};

LikedGifImages.propTypes = {
  key: PropTypes.string,
};

LikedGifImages.defaultProps = {
  key: ''
};

export default LikedGifImages;
