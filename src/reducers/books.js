import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const initialState = [
  {
    title: 'The power of habit',
    category: 'self improvement',
    id: Math.floor(Math.random() * 1000)
  },
  {
    title: 'The prince',
    category: 'Politics',
    id: Math.floor(Math.random() * 1000)
  },
  {
    title: 'The everything store',
    category: 'Biography',
    id: Math.floor(Math.random() * 1000)
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    category: 'Sci-Fi',
    id: Math.floor(Math.random() * 1000)
  }
];
const books = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_BOOK:
      return [...state, action.book];

    case REMOVE_BOOK:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1, state.length)
      ];

    default:
      return state;
  }
}

export default books;