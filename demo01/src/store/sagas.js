import { takeEvery, put, call } from 'redux-saga/effects';
import axios from "axios";
import { GET_MY_LIST } from './actionTypes';
import { getListAction, errorAction } from './actionCreators';
import { errorNotify } from '../Notify';
//generator 函数
function* mySagas() {
    yield takeEvery(GET_MY_LIST, getMyList);
}
function* getMyList() {
    const { response, error } = yield call(fetchList);
    if (response) {
        const action = getListAction(response.data.data.list);
        yield put(action);
    }
    else {
        const action = errorAction();
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