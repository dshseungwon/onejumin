import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import FetchReducer from './FetchReducer';

export default combineReducers({
  auth: AuthReducer,
  postfetch: FetchReducer
});
