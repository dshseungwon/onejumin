import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import FetchReducer from './FetchReducer';
import CommentReducer from './CommentReducer';

export default combineReducers({
  auth: AuthReducer,
  postfetch: FetchReducer,
  cmtfetch: CommentReducer
});
