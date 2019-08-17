import { takeEvery, put } from 'redux-saga/effects';
import axios from "axios";
import { GET_MY_LIST } from './actionTypes';
import { getListAction } from './actionCreators';
//generator 函数
function* mySagas() {
    yield takeEvery(GET_MY_LIST, getMyList);
}
function* getMyList() {
    const res = yield axios.get('https://www.easy-mock.com/mock/5d57aacb8814035379b71cd0/ReduxDemo01/tasks').catch((error) => {
        console.log(`axios：数据获取失败，内容 ${error}`);
    });
    const action = getListAction(res.data.data.list);
    yield put(action);
}
export default mySagas;