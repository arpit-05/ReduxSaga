import { takeEvery, put, take, call } from 'redux-saga/effects';
import { IMAGES } from '../constants';
//workerSaga
// function* workerSaga() {
//     console.log('Hey World');
//     yield put({ type: 'ACTION_FROM_WORKER' }); //if ypu want to send action through wroker saga you can use put effect.
//     console.log(yield put({ type: 'ACTION_FROM_WORKER' }));
// }
// function* byebyesaga() {
//     console.log('bye bye');
// }
// //watcherSaga
// function* rootSaga() {
//     yield take('LOGIN');
//     yield call(workerSaga);
//     yield take('LOGOUT');
//     yield call(byebyesaga);
// }

function* handleImagesLoad() {
    console.log('fetching images from unsplash');
}
// function* handleDang() {
//     console.log('DANG!!');
// }
function* rootSaga() {
    //     yield take('DANG');
    //     yield call(handleDang);

    //     yield take(IMAGES.LOAD);
    //     yield call(handleDang);
    //
    // yield takeEvery('DANG', handleDang);
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}

//takeEvery is listening to action and saga suspends middleware and gives the rest of the work(invokes) to worker saga.
export default rootSaga;
//takeevery is non blocking
//take is blocking
