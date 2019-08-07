import { combineReducers } from 'redux';

// import files here
import WeirdnessCalculatorReducer from './container/WeirdnessCalculator/reducer';


export default () => {
  return combineReducers({
    WeirdnessCalculator: WeirdnessCalculatorReducer,
  });
};
