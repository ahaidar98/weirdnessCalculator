import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const LikedGifImages = ({ name, url, key, onRemoveGifClick, weirdness }) => {
  return (
    <div id={key} className="likedGifTile">
      <h5>{name}</h5>
      <div className="imgWrapper">
        <img src={url} alt={name} className="likedGifImg" />
        {!weirdness ?
          <button className="removeBtn" name={url} onClick={onRemoveGifClick}>
            <div className="removeDiv" />
          </button>
        : null}
      </div>
      {weirdness ? <h5 className="text-align">{weirdness}/10</h5> : null}
    </div>
  );
};

LikedGifImages.propTypes = {
  key: PropTypes.string,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  onRemoveGifClick: PropTypes.func,
  weirdness: PropTypes.PropTypes.PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LikedGifImages.defaultProps = {
  key: '',
  onRemoveGifClick: () => {},
  weirdness: null,
};

export default LikedGifImages;
