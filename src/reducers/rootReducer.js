import { combineReducers } from 'redux';
import userReducer from './userReducer';

// combine all reducers to one root reducer
const rootReducer = combineReducers({
  userReducer
});

export default rootReducer;
