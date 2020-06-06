import { combineReducers } from 'redux';
import booksReducer from './books';
import filterReducer from './filter';

const rootReducer = combineReducers({ books: booksReducer, filter: filterReducer });
import books from './books';

const rootReducer = combineReducers({ books });

export default rootReducer;
