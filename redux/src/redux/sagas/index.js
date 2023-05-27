import { put, takeEvery, all, take } from 'redux-saga/effects';
import axios from 'axios';
import Helper from '../../Helper.js';

const backendAPI = Helper.backendAPI();

const delay = (ms) => new Promise((res) => setTimeout(res, ms));




function* getPosts(data) {
  try {
    yield put({ type: 'SET_POSTS' });
    const response = yield Helper.GetData(backendAPI + 'posts', data.payload);
    yield put({ type: 'SET_POSTS', data: response });
  } catch (e) {
    yield put({ type: 'SET_POSTS', error: '' });
  }
}





function* actionWatcher() {
  yield takeEvery("GET_POSTS", getPosts);


}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
