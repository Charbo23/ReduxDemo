/* eslint-disable */
import { takeEvery, put } from 'redux-saga/effects';
import axios from "axios";
import { CHANGE_INPUT } from './actionTypes';
import actions from './actionCreators';
import { errorNotify } from '../Notify';

function* mySagas() {
    // yield takeEvery(CHANGE_INPUT, changeInput);
}

function* changeInput(){
    yield put(actions.addItem());   
}

function* getMyList() {
    const { response, error } = yield fetchList();
    if (response) {
        const action = actions.getList(response.data.data.list);
        yield put(action);
    }
    else {
        errorNotify('获取数据失败', error.message);
        
    }
}

function fetchList() {
    return axios.get('https://www.easy-mock.com/mock/5d57aacb8814035379b71cd0/ReduxDemo01/tasks')
        .then(response => ({ response }))
        .catch(error => ({ error }));
}
export default mySagas;