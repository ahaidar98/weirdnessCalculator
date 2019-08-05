import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const LikedGifImages = ({ name, url, key, onRemoveGifClick }) => {
  return (
    <div id={key} className="likedGifTile">
      <h5>{name}</h5>
      <img src={url} alt={name} className="likedGifImg" />
      <button name={url} onClick={onRemoveGifClick}>remove</button>
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
