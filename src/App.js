import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import RoustesApp from './routes';
import Header from './components/Header';

import history from './services/history';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <RoustesApp />
      </Router>
    </Provider>
  );
}
