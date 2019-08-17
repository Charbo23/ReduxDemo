import React, { Component } from 'react';
import axios from "axios";
import store from "./store";
import TodoListUI from './TodoListUI';
import { initAction, changeInputAction, addItemAction, deleteItemAction } from './store/actionCreators';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.changeInputValue = this.changeInputValue.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.storeChange = this.storeChange.bind(this);
        store.subscribe(this.storeChange);
    }
    componentDidMount() {
        axios.get('https://www.easy-mock.com/mock/5d57aacb8814035379b71cd0/ReduxDemo01/tasks')
            .then((res) => {
                // console.log(`axios：数据获取成功，内容\n${JSON.stringify(res.data.data.list)}`);
                const action = initAction(res.data.data.list);
                store.dispatch(action);
            })
            .catch((error) => {
                console.log(`axios：数据获取失败，内容 ${error}`);
            })
    }
    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                changeInputValue={this.changeInputValue}
                addItem={this.addItem}
                onKeyUp={this.onKeyUp}
                deleteItem={this.deleteItem}
                list={this.state.list}
                loading={this.state.loading}
            />
        );
    }

    changeInputValue(e) {
        const action = changeInputAction(e.currentTarget.value);
        store.dispatch(action);
    }
    onKeyUp(e) {
        if (e.keyCode === 13) {
            this.addItem()
        }
    }
    storeChange() {
        this.setState(store.getState);
    }

    addItem() {
        if (!this.state.inputValue) {
            return;
        }

        const action = addItemAction();
        store.dispatch(action);
    }

    deleteItem(e) {
        // e.target 指向触发事件监听的对象。
        // e.currentTarget 指向添加监听事件的对象。
        // let itemId = e.currentTarget.getAttribute('item-id');
        const action = deleteItemAction(e);
        store.dispatch(action);
    }
}
export default TodoList;