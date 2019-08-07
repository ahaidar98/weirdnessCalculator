import { fork, all } from 'redux-saga/effects';

//import file here
import WeirdnessCalculatorSaga from './container/WeirdnessCalculator/saga';

// ex in yeild: fork(filename imported)
function* rootSaga() {
  yield all([
    fork(WeirdnessCalculatorSaga),
  ]);
}

export default rootSaga;
