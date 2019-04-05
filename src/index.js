import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Components/Repositories/Main';
import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import  reducer  from './Reducer/reducer';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
    <Router>
        <Main/>
    </Router>
    </Provider>
    , document.getElementById('root'));



