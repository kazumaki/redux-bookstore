import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers/index';

const initialBooks = [
  {
    title: 'The power of habit',
    category: 'Self Improvement',
    id: Math.floor(Math.random() * 1000),
  },
  {
    title: 'The prince',
    category: 'Politics',
    id: Math.floor(Math.random() * 1000),
  },
  {
    title: 'The everything store',
    category: 'Biography',
    id: Math.floor(Math.random() * 1000),
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    category: 'Sci-Fi',
    id: Math.floor(Math.random() * 1000),
  },
];

const store = createStore(rootReducer, { books: initialBooks });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
