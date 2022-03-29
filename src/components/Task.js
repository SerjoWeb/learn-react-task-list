/** Import PropTypes to strict the types of the props */
import PropTypes from 'prop-types';

/** Import Icons */
import { FaTimes } from 'react-icons/fa';

const Task = ({ task, deleteTask, toggleReminder }) => {
  /** show each task and apply reminder class if its tru from data */
  return (
    <div className={`task ${task.reminder && 'reminder'}`} onDoubleClick={() => toggleReminder(task.id)}>
        <h3>{task.desc} <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => deleteTask(task.id)} /></h3>
        <p>{task.date}</p>
    </div>
  )
}

/** Set a type of the props and set up them as a required */
Task.propTypes = {
    task: PropTypes.object.isRequired,
    deleteTask: PropTypes.func.isRequired,
    toggleReminder: PropTypes.func.isRequired
};

/** Export task component */
export default Task