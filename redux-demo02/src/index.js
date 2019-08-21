import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './TodoList';
import { Provider } from 'react-redux';
import store from './store';
import * as serviceWorker from './serviceWorker';

const App = (
    <Provider store={store}>
        <TodoList />
    </Provider>
)

ReactDOM.render(App, document.getElementById('root'));

//可让网站像一个应用一样离线访问，但只有在localhost或https协议下才有效
serviceWorker.register();