import { INIT,CHANGE_INPUT,ADD_ITEM,DELETE_ITEM } from './actionTypes';
export const initAction = (list) => ({
    type: INIT,
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