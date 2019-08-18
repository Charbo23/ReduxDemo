import React, { Component } from 'react';
import {connect} from 'react-redux';
import TodoListUI from './TodoListUI';

class TodoList extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <TodoListUI
                loading={this.props.loading}
                inputValue={this.props.inputValue}
                list={this.props.list}
            />
        );
    }

}
const stateToProps = (state)=>({
    inputValue:state.inputValue,
    list:state.list,
    loading:state.loading
});
export default connect(stateToProps,null)(TodoList);