import {SET_PERSONS, SET_TODOS} from '../action-types';

const initialState = {
	persons: null,
	todos: null
};

const reducer = (state = initialState, action) => {
	const {type, payload} = action;

	switch (type) {
		case SET_PERSONS: {
			return {
				...state,
				persons: payload
			};
		}
		case SET_TODOS: {
			return {
				...state,
				todos: payload
			};
		}
		default: {
			return state;
		}
	}
};

export default reducer;
