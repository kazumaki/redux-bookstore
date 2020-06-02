import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from './Book';

const mapStateToProps = state => ({ books: state });

const BooksList = ({ books }) => (
  <table>
    <thead>
      <tr>
        <td>ID</td>
        <td>Title</td>
        <td>Category</td>
      </tr>
    </thead>
    {
        books.map(book => <Book key={book.id} book={book} />)
      }
  </table>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps, null)(BooksList);
