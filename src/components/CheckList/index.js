import PropTypes from 'prop-types';
import React from 'react';
import Task from './Task';
import './style.scss';

function CheckList({ tasks, toggleTaskDone, destroyTask }) {
  return (
    <ul className="list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          isDone={task.done}
          toggleTaskDone={toggleTaskDone}
          destroyTask={destroyTask}

        >
          {task.label}
        </Task>
      ))}
    </ul>
  );
}

CheckList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      done: PropTypes.bool.isRequired,
      label: PropTypes.string.isRequired,

    }),
  ).isRequired,
  toggleTaskDone: PropTypes.func.isRequired,
  destroyTask: PropTypes.func.isRequired,

};

export default React.memo(CheckList);
