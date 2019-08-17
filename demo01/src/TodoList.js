import React, { Component } from 'react';
import axios from "axios";
import { Input, Button, List, Icon } from 'antd';
import './style.css';
import store from "./store";

// class IconText extends Component {
//     constructor(props) {
//         super(props);
//         this.handleClick = this.handleClick.bind(this);
//     }
//     render() {
//         return (
//             <span onClick={this.handleClick}>
//                 <Icon type={this.props.type} style={{ marginRight: 8 }} />
//                 {this.props.text}
//             </span>
//         );
//     }
//     handleClick() {
//         this.props.deleteItem();

//     }
// }
const IconText = ({ type, text, handleClick, itemId }) => (
    <span onClick={handleClick} item-id={itemId}>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.changeInputValue = this.changeInputValue.bind(this);
        this.state = store.getState();
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.storeChange = this.storeChange.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        store.subscribe(this.storeChange);
    }
    componentDidMount() {
        axios.get('https://www.easy-mock.com/mock/5d57aacb8814035379b71cd0/ReduxDemo01/tasks')
            .then((res) => {
                // console.log(`axios：数据获取成功，内容\n${JSON.stringify(res.data.data.list)}`);
                // this.setState({
                //     list: res.data.data.list,
                //     loading:false
                // })

                const action = {
                    type: 'init',
                    list: res.data.data.list
                }
                store.dispatch(action);
            })
            .catch((error) => {
                console.log(`axios：数据获取失败，内容 ${error}`);
            })
    }
    render() {
        return (
            <div>
                <div className='input-group'>
                    <Input
                        placeholder={this.state.inputValue}
                        style={{ width: '250px' }}
                        onChange={this.changeInputValue}
                        onKeyUp={this.onKeyUp}
                        value={this.state.inputValue}
                    />
                    <Button
                        type='primary'
                        onClick={this.addItem}
                    >增加</Button>
                </div>
                <div className='list'>
                    <List
                        bordered
                        loading={this.state.loading}
                        dataSource={this.state.list}
                        renderItem={(item) => (
                            <List.Item
                                actions={[
                                    <IconText
                                        type="delete"
                                        text="删除"
                                        key="list-delete"
                                        handleClick={this.deleteItem}
                                        itemId={item.id}
                                    />
                                    // <a onClick={this.deleteItem} key="list-loadmore-edit">删除</a>
                                ]}
                            >
                                {item.value}
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        );
    }

    changeInputValue(e) {
        const action = {
            type: 'changeInput', //动作名称，一般为常量
            value: e.target.value
        }
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

        const action = {
            type: 'addItem'
        }
        store.dispatch(action);
    }

    deleteItem(e) {
        let itemId = e.target.getAttribute('item-id');
        const action = {
            type: 'deleteItem',
            itemId: itemId
        }
        store.dispatch(action);
    }
}

export default TodoList;