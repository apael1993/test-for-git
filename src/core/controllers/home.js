import {setPersons} from '../../store/action-creators';
import store from '../../store';
import API from '../api';

export function getPersons() {
  API.getAction(
    'persons',
    (persons) => {
      store.dispatch(setPersons(persons));
    },
    (err) => {
      console.log(err);
    }
  );
}

export function createPerson(person) {
  API.postAction(
    'persons',
    person,
    (person) => {
      getPersons();
    },
    (err) => {
      console.log(err);
    }
  );
}

export function deletePerson(id) {
  API.deleteAction(
    `persons/${id}`,
    (person) => {
      getPersons();
    },
    (err) => {
      console.log(err);
    }
  );
}