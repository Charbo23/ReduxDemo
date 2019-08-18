import { takeEvery, put } from 'redux-saga/effects';
import axios from "axios";
import { GET_MY_LIST } from './actionTypes';
import { getListAction, errorAction } from './actionCreators';
import { errorNotify } from '../Notify';
//generator 函数
function* mySagas() {
    yield takeEvery(GET_MY_LIST, getMyList);
}
function* getMyList() {
    try {
        const res = yield axios.get('https://www.easy-mock.com/mock/5d57aacb8814035379b71cd0/ReduxDemo01/tasks');
        const action = getListAction(res.data.data.list);
        yield put(action);
    }
    catch (error) {
        // console.log(`axios：数据获取失败，内容 ${error}`);
        const action = errorAction();
        errorNotify('获取数据失败',error.message);
        yield put(action);
    }
}
export default mySagas;