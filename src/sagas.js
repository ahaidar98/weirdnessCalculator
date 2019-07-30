import { fork } from 'redux-saga/effects';

//import file here

// ex in yeild: fork(filename imported)
function* rootSaga() {
  yield [
    fork()
  ];
}

export default rootSaga;
