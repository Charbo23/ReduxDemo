import * as types from './actionTypes';
import axios from "axios";

export default {
    getListAction(list) {
        return {
            type: types.GET_LIST,
            list: list
        }
    },
    changeInputValue(e) {
        let inputValue = e.currentTarget.value
        return {
            type: types.CHANGE_INPUT,
            value: inputValue
        }
    },

    addItem() {
        return {
            type: types.ADD_ITEM

        }
    },

    deleteItem(itemId) {
        return {
            type: types.DELETE_ITEM,
            itemId: itemId
        }
    },

    getTodoList() {
        //返回一个中间函数，在真正的store.dispatch之前做操作，相当于拦截器
        return (dispatch) => {
            axios.get('https://www.easy-mock.com/mock/5d57aacb8814035379b71cd0/ReduxDemo01/tasks')
                .then((res) => {
                    // console.log(`axios：数据获取成功，内容\n${JSON.stringify(res.data.data.list)}`);
                    const list = res.data.data.list;
                    const action = this.getListAction(list);
                    dispatch(action);
                })
                .catch((error) => {
                    console.log(`axios：数据获取失败，内容 ${error}`);
                })
        }
    },

    getMyListAction() {
        return {

            type: types.GET_MY_LIST
        }
    }
}
