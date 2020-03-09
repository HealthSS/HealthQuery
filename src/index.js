import './styles/main.css';
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducers } from './reducers/index';
import App from './components/App.jsx';

let store = createStore(reducers);
ReactDOM.render(
 <Provider store={store}>
     <h1>testing</h1>
      {/* <App /> */}
   </Provider>,
  document.getElementById('app')
);