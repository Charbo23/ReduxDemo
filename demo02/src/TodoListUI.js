import React, { Component } from 'react';
import { Input, Button, List, Icon } from 'antd';
import { inputStyle } from './style/antd-style';
class TodoListUI extends Component {
    // constructor(this.props) {
    //     super(this.props);
    //     this.state = {  }
    // }
    render() {
        return (
            <div>
                <div className='input-group'>
                    <Input
                        placeholder='Write Something'
                        style={inputStyle}
                        value={this.props.inputValue}
                        onChange={this.props.changeInput}
                        onPressEnter={this.props.addItem}
                        allowClear
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
    <span onClick={() => handleClick(itemId)} >
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);

export default TodoListUI;