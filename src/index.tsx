import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from 'redux-thunk'

import './index.css';
import App from './App';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider
      store={store}
    >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

