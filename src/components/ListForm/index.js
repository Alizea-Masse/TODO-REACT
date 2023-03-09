import PropTypes from 'prop-types';
import React from 'react';
import './style.scss';

function ListForm({ newTaskValue, setNewTaskValue, add }) {
  const handleChange = (event) => {
    setNewTaskValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    add();
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        value={newTaskValue}
        onChange={handleChange}
        type="text"
        className="form-item"
        placeholder="Ajouter une tâche"
      />
    </form>
  );
}

ListForm.propTypes = {
  newTaskValue: PropTypes.string.isRequired,
  setNewTaskValue: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired,
};

export default React.memo(ListForm);
