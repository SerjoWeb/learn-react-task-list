/** Import PropTypes to strict the types of the props */
import PropTypes from 'prop-types';

/** Import components */
import Task from "./Task";

const Tasks = ({ tasks, deleteTask, toggleReminder }) => {
  /** Show list of tasks through the map loop */
  return (
    <>
        {tasks.map((task, index) => (<Task key={index} task={task} deleteTask={deleteTask} toggleReminder={toggleReminder} />))}
    </>
  )
}

/** Set a type of the props and set up them as a required */
Tasks.propTypes = {
    tasks: PropTypes.array.isRequired,
    deleteTask: PropTypes.func.isRequired,
    toggleReminder: PropTypes.func.isRequired
};

/** Export component Tasks */
export default Tasks