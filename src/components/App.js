import React from 'react';
import CategoryFilter from './CategoryFilter';
import FilteredBooks from '../containers/FilteredBooks';
import BooksForm from '../containers/BooksForm';

const App = () => (
  <div>
    <div className="panel-bg">
      <h1 className="Bookstore-CMS">Bookstore CMS</h1>
      <CategoryFilter />
    </div>
    <div className="books-container">
      <FilteredBooks />
      <BooksForm />
    </div>
  </div>
);

export default App;
