import { fork } from 'redux-saga/effects';

//import file here & file name should be the same as export default file name in that saga file
/* import NewPageSaga from './container/NewPage/saga'; */

function* rootSaga() {
  yield [
    //fork(file name),
    /*fork(NewPageSaga),*/
  ];
}

export default rootSaga;
