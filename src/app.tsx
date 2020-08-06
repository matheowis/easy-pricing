import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Provider } from 'react-redux'
import { store } from './store';
import MainPage from './pages/MainPage';

const jsx = (
  <Provider store={store}>
    <MainPage />
  </Provider>
)


const reactContainer = document.getElementById('app');

ReactDom.render(jsx, reactContainer);