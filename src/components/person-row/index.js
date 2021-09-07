import React from 'react';
import PropTypes from 'prop-types';

const PersonRow = (props) => {

  const {person, onDelete} = props;

  return (
    <tr>
      <td>{person.id}</td>
      <td>{person.firstName} {person.lastName}</td>
      <td>{person.age}</td>
      <td>
        <button onClick={() => {
          onDelete(person.id)
        }}>
          X
        </button>
      </td>
    </tr>
  );
};

PersonRow.propTypes = {
  person: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default PersonRow;
