/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';
import React from 'react';
import { Trash2 } from 'react-feather';

function Task({
  children,
  isDone,
  toggleTaskDone,
  id,
  destroyTask,
}) {
  const handleDelete = () => {
    destroyTask(id);
  };
  const handleChange = () => {
    toggleTaskDone(id);
  };
  return (
    <li className="list-container">
      <label
        className={isDone ? 'list-item list-item--done' : 'list-item'}
      >
        <input
          className="list-box"
          type="checkbox"
          checked={isDone}
          onChange={handleChange}
        />
        {children}
      </label>
      <button
        title="Supprimer une tache"
        className="list-delete"
        type="button"
        onClick={handleDelete}
      ><Trash2 />
      </button>
    </li>
  );
}

Task.propTypes = {
  children: PropTypes.node.isRequired,
  isDone: PropTypes.bool.isRequired,
  toggleTaskDone: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  destroyTask: PropTypes.func.isRequired,

};

export default React.memo(Task);
