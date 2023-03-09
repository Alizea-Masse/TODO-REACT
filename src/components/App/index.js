// == Import
import React from 'react';
import data from 'src/data/tasks';
import ListCounter from '../ListCounter';
import ListForm from '../ListForm';
import CheckList from '../CheckList';
import { getNextId } from '../../utils';

import './styles.css';
// == Composant
class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { // initialisation
      tasks: data,
      newTaskValue: '',
    };
  }

  destroyTask = (id) => {
    console.log('Je veux modifiier le state', id);
    const newList = this.state.tasks.filter((task) => task.id !== id);
    this.setState({
      tasks: newList,
    });
  };

  toggleTaskDone = (id) => {
    console.log('je veux modifier le state, je veux inverser le done de la tache numéro', id);
    const newList = this.state.tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done,
        };
      } return task;
    });
    this.setState({
      tasks: newList,
    });
  };

  setNewTaskValue = (value) => {
    this.setState({
      newTaskValue: value,
    });
  };

  addListItem = () => {
    const newList = [...this.state.tasks];
    newList.push({
      id: getNextId(newList),
      label: this.state.newTaskValue,
      done: false,
    });

    this.setState({
      tasks: newList,

    });
  };

  render() {
    const { tasks, newTaskValue } = this.state;
    const notDoneTasks = tasks.filter((task) => !task.done);
    const doneTasks = tasks.filter((task) => task.done);
    const tasksCounter = notDoneTasks.length;

    const sortedTasks = [...notDoneTasks, ...doneTasks];
    return (
      <div className="app">
        <ListForm
          add={
          this.addListItem
        }
          newTaskValue={newTaskValue}
          setNewTaskValue={this.setNewTaskValue}
        />
        <ListCounter counter={tasksCounter} />
        <CheckList
          tasks={sortedTasks}
          toggleTaskDone={this.toggleTaskDone}
          destroyTask={this.destroyTask}
        />
      </div>
    );
  }
}

// == Export
export default App;
