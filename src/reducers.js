import { combineReducers } from 'redux';

// import files here
import NewPageReducer from './container/NewPage/reducer';


export default () => {
  return combineReducers({
    NewPage: NewPageReducer,
  });
};
