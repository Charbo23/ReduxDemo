import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoListUI from './TodoListUI';
import actions from './store/actionCreators';
class TodoList extends Component {
    componentDidMount() {
        this.props.initList();
    }
    render() {
        return (
            <TodoListUI
                loading={this.props.loading}
                inputValue={this.props.inputValue}
                list={this.props.list}
                changeInput={this.props.changeInput}
                addItem={this.props.addItem}
                deleteItem={this.props.deleteItem}
            />
        );
    }
}

//有选择地取state中的值，如需要全部state也可直接state=>state
const mapStateToProps = (state) => ({
    inputValue: state.inputValue,
    list: state.list,
    loading: state.loading
});
//mapDispatchToProps可以是对象也可以是方法
// const mapDispatchToProps = (dispatch) => ({
//     changeInput(e) {
//         const action = actions.changeInput(e);
//         dispatch(action);
//     },
//     addItem() {
//         const action = actions.addItem();
//         dispatch(action);
//     },
//     deleteItem(itemId) {
//         const action = actions.deleteItem(itemId);
//         dispatch(action);
//     }
// });
const mapDispatchToProps = actions;
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);