import React from 'react';
import { Input, Button, List, Icon } from 'antd';
import { inputStyle } from './style/antd-style';

const TodoListUI = (props) => (
    <div>
        <div className='input-group'>
            <Input
                placeholder='Write Something'
                style={inputStyle}
                value={props.inputValue}
            />
            <Button
                type='primary'
            >增加</Button>
        </div>
        <div className='list'>
            <List
                bordered
                loading={props.loading}
                dataSource={props.list}
                renderItem={(item) => (
                    <List.Item
                        actions={[
                            <IconText
                                type="delete"
                                text="删除"
                                key="list-delete"
                                handleClick={props.deleteItem}
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
const IconText = ({ type, text, handleClick, itemId }) => (
    <span onClick={() => handleClick(itemId)} >
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);

export default TodoListUI;