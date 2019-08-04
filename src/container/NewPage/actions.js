// import constants below
import {
  FETCH_GIF_DATA,
  ON_DATA_FECTCH_SUCESS,
  ON_DATA_FECTCH_FAILED,
  ON_DATA_FECTCH_DONE,
  ON_DATA_FECTCH_START
} from './constants';

export const getGifData = () => {
  return ({
    type: FETCH_GIF_DATA,
  });
}

export const onGifLoadSuccess = (data) => {
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
