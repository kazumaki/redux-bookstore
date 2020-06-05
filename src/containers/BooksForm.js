import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { createBook } from '../actions/index';

const BOOK_CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const form = event.target.parentElement;
    this.setState({
      title: form.title.value,
      category: form.category.value,
    });
  }

  handleSubmit(element) {
    element.preventDefault();
    const { title, category } = this.state;
    const { submitNewBook } = this.props;
    submitNewBook({
      title,
      category,
      id: Math.floor(Math.random() * 1000),
    });
    this.setState({
      title: '',
      category: '',
    });
  }

  render() {
    const { title, category } = this.state;
    return (
      <form>
        <input id="title" onChange={this.handleChange} type="text" value={title} />
        <select id="category" value={category} onChange={this.handleChange}>
          {
            BOOK_CATEGORIES
              .map(category => <option key={category} value={category}>{category}</option>)
          }
        </select>
        <button type="submit" onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

BooksForm.propTypes = {
  submitNewBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  submitNewBook: book => {
    dispatch(createBook(book));
  },
});

export default connect(null, mapDispatchToProps)(BooksForm);
