import {
  ON_DATA_FECTCH_SUCESS,
  ON_DATA_FECTCH_FAILED,
  ON_DATA_FECTCH_DONE,
  ON_DATA_FECTCH_START,
  DELETE_LIKED_GIF,
  ADD_LIKED_GIF
} from './constants';

const initialState = {
	gifData: [],
	gifStatus: '',
	gifErrorMessage: [],
  likedGifs: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ON_DATA_FECTCH_SUCESS:
      return { ...state, gifData: action.payload };

    case ON_DATA_FECTCH_START:
      return { ...state, gifStatus: 'Loading' };

    case ON_DATA_FECTCH_DONE:
      return { ...state, gifStatus: 'Done' };

    case ON_DATA_FECTCH_FAILED:
      return { ...state, gifStatus: 'Failed', gifErrorMessage: [...action.payload] };

    case ADD_LIKED_GIF:
      const obj = Object.assign({}, state.likedGifs, { id: action.id, url: action.url, name: action.name, weirdness: action.weirdness });

      return { ...state, likedGifs: [...state.likedGifs, obj] };

    case DELETE_LIKED_GIF:
      return  { ...state, likedGifs: state.likedGifs.filter((item, index) => index !== action.index)};

    default:
      return state;
  }
};
