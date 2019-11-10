import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import AppRouter from './components/AppRouter';

ReactDOM.render(
  <BrowserRouter>
      <Provider store={store}>
          <AppRouter />
      </Provider>
  </BrowserRouter>, 
  document.getElementById('root')
);
