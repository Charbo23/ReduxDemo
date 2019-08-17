import { GET_LIST, CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './actionTypes';
import axios from "axios";
export const getListAction = (list) => ({
    type: GET_LIST,
    list: list
})
export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value: value
})

export const addItemAction = () => ({
    type: ADD_ITEM
})

export const deleteItemAction = (itemId) => ({
    type: DELETE_ITEM,
    itemId: itemId
})

export const getTodoList = () => {
    return (dispatch) => {
        axios.get('https://www.easy-mock.com/mock/5d57aacb8814035379b71cd0/ReduxDemo01/tasks')
            .then((res) => {
                // console.log(`axios：数据获取成功，内容\n${JSON.stringify(res.data.data.list)}`);
                const list = res.data.data.list;
                const action = getListAction(list);
                dispatch(action);
            })
            .catch((error) => {
                console.log(`axios：数据获取失败，内容 ${error}`);
            })
    }
}