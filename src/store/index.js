import {applyMiddleware, compose, createStore} from 'redux';
import reducer from './reducers';

const setMiddleware = () => {
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	return composeEnhancers(applyMiddleware());
};

const store = createStore(reducer, setMiddleware());

export default store;
