import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const initialState = [
  {
    title: 'The power of habit',
    category: 'Self Improvement',
    id: Math.floor(Math.random() * 1000),
  },
  {
    title: 'The prince',
    category: 'Politics',
    id: Math.floor(Math.random() * 1000),
  },
  {
    title: 'The everything store',
    category: 'Biography',
    id: Math.floor(Math.random() * 1000),
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    category: 'Sci-Fi',
    id: Math.floor(Math.random() * 1000),
  },
];
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.book];

    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.index);

    default:
      return state;
  }
};

export default booksReducer;
