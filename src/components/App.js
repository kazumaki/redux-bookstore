import React from 'react';
import CategoryFilter from './CategoryFilter';
import FilteredBooks from '../containers/FilteredBooks';
import BooksForm from '../containers/BooksForm';

const App = () => (
  <div>
    <CategoryFilter />
    <FilteredBooks />
    <BooksForm />
  </div>
);

export default App;
