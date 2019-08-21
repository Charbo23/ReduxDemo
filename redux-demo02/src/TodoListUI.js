import React from 'react';
import { Input, Button, List, Icon } from 'antd';
import antdStyle from './style/antd-style.module.scss'
const TodoListUI = (props) => {
    const { loading, inputValue, changeInput, list, addItem, deleteItem } = props;
    return (
        <div>
            <div className='input-group'>
                <Input
                    placeholder='Write Something'
                    className={`test ${antdStyle['ant-input']}`}
                    value={inputValue}
                    onChange={changeInput}
                    onPressEnter={addItem}
                    allowClear
                />
                <Button
                    type='primary'
                    onClick={addItem}
                    className={antdStyle['ant-btn']}
                    >增加</Button>
                    <div className={antdStyle['donut']}></div>
            </div>
            <div className='list'>
                <List
                    bordered
                    loading={loading}
                    dataSource={list}
                    renderItem={(item) => (
                        <List.Item
                            actions={[
                                <IconText
                                    type="delete"
                                    text="删除"
                                    key="list-delete"
                                    handleClick={deleteItem}
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
};
const IconText = ({ type, text, handleClick, itemId }) => (
    <span onClick={() => handleClick(itemId)} >
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);

export default TodoListUI;