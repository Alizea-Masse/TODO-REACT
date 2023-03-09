import PropTypes from 'prop-types';
import React from 'react';
import './style.scss';

function ListCounter({ counter }) {
  let sentence;
  if (counter === 0) {
    sentence = 'Aucune tâche en cours';
  }
  else if (counter === 1) {
    sentence = 'Une tâche en cours';
  }
  else {
    sentence = `${counter} tâches en cours`;
  }
  return (
    <p className="counter">{sentence}</p>
  );
}

ListCounter.propTypes = {
  counter: PropTypes.number.isRequired,
};

export default React.memo(ListCounter);
