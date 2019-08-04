import { fork } from 'redux-saga/effects';

//import file here & file name should be the same as export default file name in that saga file

function* rootSaga() {
  yield [
    //fork(file name),
  ];
}

export default rootSaga;
