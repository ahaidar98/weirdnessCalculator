import { takeLatest, put } from 'redux-saga/effects';

import { FETCH_GIF_DATA } from './constants';
import {
  onGifLoadSuccess,
  onGifLoadStart,
  onGifLoadDone,
  onGifLoadFailed
} from './actions';


  function* getGifs() {
    const API_KEY ='278XwgF7eryJH8XEleCyi5gFgM5cFnaL';
    const SEARCH_PARAM = 'gold';
    const WEIRD_PARAM = '0';
		const requestURL = `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${SEARCH_PARAM}&weirdness=${WEIRD_PARAM}`;

	  try {
	    yield put(onGifLoadStart());

	    const response = yield fetch(requestURL);
			const jsonData = yield response.json();
      console.log('Data: ', jsonData);
	    yield put(onGifLoadSuccess(jsonData));
      yield put(onGifLoadDone());
	  } catch (e) {
      // Unhandled Error Message
      const errorsObj = (e.response && e.response.data) ? e.response.data : {};
      let errMsgs = [];

      Object.keys(errorsObj).forEach((key) => {
        errMsgs = errMsgs.concat(errorsObj[key].map(errMsg => {
          if (!key || key === '') return errMsgs;
          return `${key.replace(/_/g, ' ')} ${errMsgs}`;
        }));
      });
      console.log('Error: ', errMsgs)
	    yield put(onGifLoadFailed(errMsgs));
	  }
	}

	export function* NewPageSaga() {
	  yield takeLatest(FETCH_GIF_DATA, getGifs);
	}

	export default NewPageSaga;
