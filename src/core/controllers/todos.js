import {setTodos} from '../../store/action-creators';
import store from '../../store';
import API from '../api';

export function getTodos() {
  API.getAction(
    'todos',
    (todos) => {
      store.dispatch(setTodos(todos));
    },
    (err) => {
      console.log(err);
    }
  );
}

export function createTodo(todo) {
  API.postAction(
    'todos',
    todo,
    (todo) => {
      getTodos();
    },
    (err) => {
      console.log(err);
    }
  );
}

export function deleteTodo(id) {
  API.deleteAction(
    `todos/${id}`,
    (todo) => {
      getTodos();
    },
    (err) => {
      console.log(err);
    }
  );
}