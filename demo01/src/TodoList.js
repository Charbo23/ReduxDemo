import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import './style.css';
import store from "./store";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
    }
    render() {
        return (
            <div>
                <div className='input-group'>
                    <Input
                        placeholder={this.state.inputValue} style={{ width: '250px' }}
                    />
                    <Button type='primary'>增加</Button>
                </div>
                <div className='list'>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item) => (
                            <List.Item>{item}</List.Item>
                        )}
                    />
                </div>
            </div>
        );
    }
}

export default TodoList;