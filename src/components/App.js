import React from 'react';
import BooksForm from './BooksForm';
import CategoryFilter from './CategoryFilter';
import FilteredBooks from '../containers/FilteredBooks';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

const App = () => (
  <div>
    <CategoryFilter />
    <FilteredBooks />
    <BooksForm />
  </div>
);

export default App;
