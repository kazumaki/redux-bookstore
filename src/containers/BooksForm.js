import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { createBook } from '../actions/index';

const BOOK_CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Politics', 'Sci-Fi', 'Self Improvement'];

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
      <div className="add-book-container">
        <h2 className="add-book-header">ADD NEW BOOK</h2>
        <form className="add-book-form">
          <input className="add-book-title" placeholder="Book title" id="title" onChange={this.handleChange} type="text" value={title} />
          <select className="select-generic" id="category" value={category} onChange={this.handleChange}>
            {
              BOOK_CATEGORIES
                .map(category => <option key={category} value={category}>{category}</option>)
            }
          </select>
          <button className="add-book-button" type="submit" onClick={this.handleSubmit}>ADD BOOK</button>
        </form>
      </div>
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
