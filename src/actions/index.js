export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

const createBook = (book) => {
  return { type: CREATE_BOOK, book }
}

const removeBook = (index) => {
  return { type: REMOVE_BOOK, index }
}