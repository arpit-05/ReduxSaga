import { takeEvery, put } from 'redux-saga/effects';
//workerSaga
function* workerSaga() {
    console.log('Hey World');
    yield put({ type: 'ACTION_FROM_WORKER' }); //if ypu want to send action through wroker saga you can use put effect.
    console.log(yield put({ type: 'ACTION_FROM_WORKER' }));
}
//watcherSaga
function* rootSaga() {
    yield takeEvery('HELLO', workerSaga);
}

//takeEvery is listening to action an d saga suspends middleware and gives the rest of the work to worker saga.
export default rootSaga;
