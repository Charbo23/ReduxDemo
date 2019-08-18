import React, { Component, Fragment } from 'react';
import store from "./store";
import TodoListUI from './TodoListUI';
import { getMyListAction, changeInputAction, addItemAction, deleteItemAction } from './store/actionCreators';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.changeInputValue = this.changeInputValue.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.storeChange = this.storeChange.bind(this);
        store.subscribe(this.storeChange);
    }
    componentDidMount() {
        const action = getMyListAction();
        store.dispatch(action);
    }
    render() {
        return (
            <Fragment>
                <TodoListUI
                    loading={this.state.loading}
                    inputValue={this.state.inputValue}
                    list={this.state.list}
                    changeInputValue={this.changeInputValue}
                    addItem={this.addItem}
                    deleteItem={this.deleteItem}
                />
            </Fragment>
        );
    }

    changeInputValue(e) {
        const action = changeInputAction(e.currentTarget.value);
        store.dispatch(action);
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

    deleteItem(itemId) {
        // e.target 指向触发事件监听的对象。
        // e.currentTarget 指向添加监听事件的对象。
        // let itemId = e.currentTarget.getAttribute('item-id');
        const action = deleteItemAction(itemId);
        store.dispatch(action);
    }
}
export default TodoList;