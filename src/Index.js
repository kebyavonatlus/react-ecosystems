import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './store';
import App from './App';


ReactDom.render(
    <Provider store={ConfigureStore()} >
        <App />
    </Provider>,
    document.getElementById('root')
);