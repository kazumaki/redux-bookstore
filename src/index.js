import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import books from './reducers/books';

const store = createStore(books);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
