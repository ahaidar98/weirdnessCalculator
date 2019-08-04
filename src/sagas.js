import { fork, all } from 'redux-saga/effects';

//import file here
import NewPageSaga from './container/NewPage/saga';

// ex in yeild: fork(filename imported)
function* rootSaga() {
  yield all([
    fork(NewPageSaga),
  ]);
}

export default rootSaga;
