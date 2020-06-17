import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => (
  <tr className="row">
    <h3 className="category">{book.category}</h3>
    <h2 className="title">{book.title}</h2>
    <button id={book.id} className="remove" type="submit" onClick={handleRemoveBook}>Remove</button>
  </tr>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
