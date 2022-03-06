import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootRed from './reducers/rootReducer';

const theStore= createStore(rootRed)

ReactDOM.render(
  <Provider store={theStore} >
    <App />
  </Provider>,
  document.getElementById('root')
);


