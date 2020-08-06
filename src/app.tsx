import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Provider } from 'react-redux'
import { store } from './store';

const jsx = (
  <Provider store={store}>
    <div>Test</div>
  </Provider>
)

const reactContainer = document.getElementById('app');

ReactDom.render(jsx, reactContainer);