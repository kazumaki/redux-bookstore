import React from 'react';

const BOOK_CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = () => (
  <form>
    <input type="text" />
    <select>
      {BOOK_CATEGORIES.map(category => <option key={category} value={category}>{category}</option>)}
    </select>
    <button type="submit">Submit</button>
  </form>
);

export default BooksForm;
