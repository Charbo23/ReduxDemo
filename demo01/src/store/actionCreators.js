import { GET_LIST,CHANGE_INPUT,ADD_ITEM,DELETE_ITEM } from './actionTypes';
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