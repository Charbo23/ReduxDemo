import _ from 'lodash';
import shortid from 'shortid';
import { GET_LIST, CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './actionTypes';
const defaultState = {
    inputValue: '',
    list: [
        // '早8点开晨会，分配今天的代码任务',
        // '早9点和项目经理开需求沟通会',
        // '晚5点半对今日代码进行review'
    ],
    loading: true
};
export default (state = defaultState, action) => {

    //Reducer里只能接收state不能改变state

    if (action.type === GET_LIST) {
        let newState = _.cloneDeep(state);
        newState.list = action.list;
        newState.loading = false;
        return newState;
    }
    if (action.type === CHANGE_INPUT) {
        let newState = _.cloneDeep(state);
        newState.inputValue = action.value;
        return newState;
    }

    if (action.type === ADD_ITEM) {
        let newState = _.cloneDeep(state);
        newState.list.push(
            {
                id: shortid.generate(),
                value: newState.inputValue
            }
        );
        newState.inputValue = '';
        return newState;
    }
    if (action.type === DELETE_ITEM) {
        let newState = _.cloneDeep(state);
        newState.list = newState.list.filter((listItem) => { return listItem.id !== action.itemId });
        return newState;
    }
    return state;
}