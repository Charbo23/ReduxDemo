import React, { Component } from 'react';
import { Input, Button, List, Icon } from 'antd';
import './style.css';

class TodoListUI extends Component {
    render() { 
        return ( 
            <div>
            <div className='input-group'>
                <Input
                    placeholder='Write Something'
                    style={{ maxWidth: '60vw' }}
                    onChange={this.props.changeInputValue}
                    onKeyUp={this.props.onKeyUp}
                    value={this.props.inputValue}
                />
                <Button
                    type='primary'
                    onClick={this.props.addItem}
                >增加</Button>
            </div>
            <div className='list'>
                <List
                    bordered
                    loading={this.props.loading}
                    dataSource={this.props.list}
                    renderItem={(item) => (
                        <List.Item
                            actions={[
                                <IconText
                                    type="delete"
                                    text="删除"
                                    key="list-delete"
                                    handleClick={this.props.deleteItem}
                                    itemId={item.id}
                                />
                            ]}
                        >
                              <List.Item.Meta
                                title={`待办事项-${item.id}`}
                                description={item.value}
                              />
                        </List.Item>
                    )}
                />
            </div>
        </div>
        );
    }
}

const IconText = ({ type, text, handleClick, itemId }) => (
    <span onClick={handleClick} item-id={itemId}>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);
 
export default TodoListUI;