import React from 'react';

const TodoRow = ({todo: {id, title}, onDelete}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>
        <button onClick={() => onDelete(id)}>X</button>
      </td>
    </tr>
  );
};

export default TodoRow;