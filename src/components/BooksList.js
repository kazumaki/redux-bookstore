import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BooksList extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveBook = this.handleRemoveBook.bind(this);
  }

  handleRemoveBook(event, book) {
    event.preventDefault();
    const { submitRemoveBook } = this.props;
    submitRemoveBook(book);
  }

  render() {
    const { books } = this.props;
    return (
      <table>
        <tbody>
          {
            books
              .map(book => (
                <Book
                  key={book.id}
                  book={book}
                  handleRemoveBook={event => this
                    .handleRemoveBook(event, book)}
                />
              ))
          }
        </tbody>
      </table>
    );
  }
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      category: PropTypes.string,
    }).isRequired,
  ).isRequired,
  submitRemoveBook: PropTypes.func.isRequired,
};

export default BooksList;
