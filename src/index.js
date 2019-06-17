import React from 'react';
import { render } from 'react-dom';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import App from './components/App';


//const store = createStore(
    //tasks, // reducers
    //initialData // optional, just sample tasks
//);

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);