import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';
import createLogger from 'redux-logger';

// const initialState = [];

// enable redux devtools
const enhancers = compose(
	applyMiddleware(createLogger),
	window.devToolsExtension ? window.devToolsExtension() : f => f
);

// createa the store with enhancers like devtools
const store = createStore(
  rootReducer,
  enhancers
);

export default store;
