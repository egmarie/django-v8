import React from 'react';
import {StrictMode} from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';

import { Provider } from 'react-redux';
import store from './redux/store';
import './api/api_request'


const rootElement = document.getElementById('app');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </StrictMode>
);

if (module.hot) {
  module.hot.accept() 
}






