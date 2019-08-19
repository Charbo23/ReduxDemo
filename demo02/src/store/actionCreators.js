import * as types from './actionTypes';

export default {
    InitList() {
        return {
            type: types.INIT_LIST
        }
    },
    getList(list) {
        return {
            type: types.GET_LIST,
            list: list
        }
    },
    changeInput(e) {

        let inputValue = e.currentTarget.value;
        // this.addItem()
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
    error(message) {
        return {
            type: types.ERROR,
            message: message
        }
    }
}
