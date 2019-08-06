// import constants below
import {
  FETCH_GIF_DATA,
  ON_DATA_FECTCH_SUCESS,
  ON_DATA_FECTCH_FAILED,
  ON_DATA_FECTCH_DONE,
  ON_DATA_FECTCH_START,
  DELETE_LIKED_GIF,
  ADD_LIKED_GIF,
  CLEAR_GIF_DATA,
  ON_START_OVER
} from './constants';

export const getGifData = (searchStr, weirdness) => {
  return ({
    type: FETCH_GIF_DATA,
    searchStr,
    weirdness
  });
}

export const onGifLoadSuccess = (data) => {
  return ({
    type: ON_DATA_FECTCH_SUCESS,
    payload: data,
  });
};

export const onGifDataLoadSuccess = (data) => {
  return ({
    type: ON_DATA_FECTCH_SUCESS,
    payload: data,
  });
};

export const onGifLoadStart = () => {
  return ({
    type: ON_DATA_FECTCH_START,
  });
};

export const onGifLoadDone = () => {
  return ({
    type: ON_DATA_FECTCH_DONE,
  });
};

export const onGifLoadFailed = (errMsg) => {
  return ({
    type: ON_DATA_FECTCH_FAILED,
    payload: errMsg,

  });
};

export const onAddLikedGif = (id, name, url, weirdness, searchTerm) => {
  return ({
    type: ADD_LIKED_GIF,
    id,
    name,
    url,
    weirdness,
    searchTerm
  });
};
export const onDeleteLikedGif = (index) => {
  return ({
    type: DELETE_LIKED_GIF,
    index,

  });
};

export const onClearGifData = () => {
  return ({
    type: CLEAR_GIF_DATA,
  });
};

export const onStartOver = () => {
  return ({
    type: ON_START_OVER,
  });
};
