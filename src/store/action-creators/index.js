import {SET_PERSONS, SET_TODOS} from '../action-types';

export const setPersons = (payload) => ({
	type: SET_PERSONS,
	payload
});

export const setTodos = (payload) => ({
	type: SET_TODOS,
	payload
});
