import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import './style.css';

const data = [
    '早8点开晨会，分配今天的代码任务',
    '早9点和项目经理开需求沟通会',
    '晚5:30对今日代码进行review'
]
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className='input-group'>
                    <Input
                        placeholder='Write Something' style={{ width: '250px' }}
                    />
                    <Button type='primary'>增加</Button>
                </div>
                <div className='list'>
                    <List
                        bordered
                        dataSource={data}
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