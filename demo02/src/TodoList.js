import { Component } from 'react';
import { connect } from 'react-redux';
import TodoListUI from './TodoListUI';
import actions from './store/actionCreators';
class TodoList extends Component {
    componentDidMount() {
        this.props.initList();
    }
    render() {
        const { loading, inputValue, changeInput, list, addItem, deleteItem } = this.props;
        return (
            // <TodoListUI
            //     loading={loading}
            //     inputValue={inputValue}
            //     list={list}
            //     changeInput={changeInput}
            //     addItem={addItem}
            //     deleteItem={deleteItem}
            // />
            //也可以方法的形式调用，提升无状态组件的性能？
            TodoListUI({
                loading: loading,
                inputValue: inputValue,
                list: list,
                changeInput: changeInput,
                addItem: addItem,
                deleteItem: deleteItem
            })
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