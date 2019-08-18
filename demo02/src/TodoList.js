import React, { Component } from 'react';
import store from "./store";
import TodoListUI from './TodoListUI';


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.storeChange = this.storeChange.bind(this);
        store.subscribe(this.storeChange);
    }
    storeChange() {
        this.setState(store.getState);
    }
    render() {
        return (
            <TodoListUI
                loading={this.state.loading}
                inputValue={this.state.inputValue}
                list={this.state.list}
            />
        );
    }

}
export default TodoList;