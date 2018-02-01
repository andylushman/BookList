import { combineReducers } from 'redux';
import BooksReducer from './ReducerBooks';

const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
