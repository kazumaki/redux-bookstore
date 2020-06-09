export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export const FILTER_CATEGORIES = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Politics', 'Sci-Fi', 'Self Improvement'];

export const createBook = book => ({ type: CREATE_BOOK, book });

export const removeBook = book => ({ type: REMOVE_BOOK, index: book.id });

export const changeFilter = filter => ({ type: CHANGE_FILTER, filter });
