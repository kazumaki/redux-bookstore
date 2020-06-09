import { connect } from 'react-redux';
import BooksList from '../components/BooksList';
import { removeBook } from '../actions';

const filteredBooks = (books, filter) => {
  switch (filter) {
    case 'All':
      return books;
    default:
      return books.filter(book => book.category === filter);
  }
};

const mapStateToProps = state => ({
  books: filteredBooks(state.books, state.filter),
});

const mapDispatchToPros = dispatch => ({
  submitRemoveBook: book => dispatch(removeBook(book)),
});

export default connect(mapStateToProps, mapDispatchToPros)(BooksList);
