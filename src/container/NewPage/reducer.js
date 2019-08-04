import {
  ON_DATA_FECTCH_SUCESS,
  ON_DATA_FECTCH_FAILED,
  ON_DATA_FECTCH_DONE,
  ON_DATA_FECTCH_START
} from './constants';

const initialState = {
	gifData: [],
	gifStatus: '',
	gifErrorMessage: []
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

    default:
      return state;
  }
};
