import {createStore, combineReducers, applyMiddleware} from 'redux';

import UserReducer from './reducers/UserReducer';
import thunk from 'redux-thunk';

//console.log(VODItemsReducer);
const reducer = combineReducers({
    user: UserReducer
});


let store = createStore(reducer, applyMiddleware(thunk));


export default store;