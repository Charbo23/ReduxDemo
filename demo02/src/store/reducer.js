import _ from 'lodash';
import shortid from 'shortid';
const defaultState = {
    inputValue: '',
    list: [
        {
            "id": "360000200608219333",
            "value": "早8点开晨会，分配今天的代码任务"
        },
        {
            "id": "13000019841216266X",
            "value": "早9点和项目经理开需求沟通会"
        },
        {
            "id": "510000201201041361",
            "value": "晚5点半对今日代码进行review"
        }
    ],
    loading: false
};
export default (state = defaultState, action) => {

    return state;
}