import _ from 'lodash';
import shortid from 'shortid';
import * as types from './actionTypes';
const defaultState = {
    inputValue: '',
    list: [
        // {
        //     "id": "360000200608219333",
        //     "value": "早8点开晨会，分配今天的代码任务"
        // },
        // {
        //     "id": "13000019841216266X",
        //     "value": "早9点和项目经理开需求沟通会"
        // },
        // {
        //     "id": "510000201201041361",
        //     "value": "晚5点半对今日代码进行review"
        // }
    ],
    loading: true
};
export default (state = defaultState, action) => {
    //Reducer里只能接收state不能改变state
    if (action.type === types.INIT_LIST) {
        let newState = _.cloneDeep(state);
        newState.loading = true;
        return newState;
    }
    if (action.type === types.GET_LIST) {
        let newState = _.cloneDeep(state);
        newState.list = action.list;
        newState.loading = false;
        return newState;
    }
    if (action.type === types.CHANGE_INPUT) {
        let newState = _.cloneDeep(state);
        newState.inputValue = action.value;
        return newState;
    }

    if (action.type === types.ADD_ITEM) {
        let newState = _.cloneDeep(state);
        let listItemValue = action.value || newState.inputValue;
        if (listItemValue.trim()) {
            newState.list.push(
                {
                    id: shortid.generate(),
                    value: listItemValue
                }
            );
        }
        newState.inputValue = '';
        return newState;
        
    }
    if (action.type === types.DELETE_ITEM) {
        let newState = _.cloneDeep(state);
        newState.list = newState.list.filter((listItem) => { 
            return listItem.id !== action.itemId 
        });
        return newState;
    }
    if (action.type === types.ERROR) {
        let newState = _.cloneDeep(state);
        newState.loading = false;
        return newState;
    }
    return state;
}