import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FILTER_CATEGORIES, changeFilter } from '../actions/index';

class CategoryFilter extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(event) {
    const { handleFilterChange } = this.props;
    handleFilterChange(event.target.value);
  }

  render() {
    const { filter } = this.props;
    return (
      <select value={filter} onChange={this.handleFilterChange}>
        {FILTER_CATEGORIES.map(
          category => <option key={category} value={category}>{category}</option>,
        )}
      </select>
    );
  }
}

CategoryFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ filter: state.filter });
const mapDispatchToProps = dispatch => (
  { handleFilterChange: filter => dispatch(changeFilter(filter)) }
);

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilter);
