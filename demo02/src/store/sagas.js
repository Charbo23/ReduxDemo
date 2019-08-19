/* eslint-disable no-unused-vars */
import { takeEvery, put, take, call,takeLeading,takeLatest } from 'redux-saga/effects';
import axios from "axios";
import * as types from './actionTypes';
import actions from './actionCreators';
import { errorNotify } from '../Notify';

function* mySagas() {
    // yield takeEvery(types.CHANGE_INPUT, changeInput);
    yield takeEvery(types.INIT_LIST, InitList);
}

function* changeInput() {
    
    yield put(actions.addItem());
}

function* InitList() {
    const { response, error } = yield call(fetchList);
    if (response) {
        const action = actions.getList(response.data.data.list);
        yield put(action);
    }
    else {
        const action = actions.error();
        errorNotify('获取数据失败', error.message);
        yield put(action);

    }
}

function fetchList() {
    return axios.get('https://www.easy-mock.com/mock/5d57aacb8814035379b71cd0/ReduxDemo01/tasks')
        .then(response => ({ response }))
        .catch(error => ({ error }));
}
export default mySagas;