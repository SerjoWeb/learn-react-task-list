import { useState } from 'react';

/** Import PropTypes to strict the types of the props */
import PropTypes from 'prop-types';

const AddTaskForm = ({ addTask }) => {
  /** local state for inputs */
  const [desc, setDesc] = useState('');
  const [date, setDate] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    /** stop propogation */
    e.preventDefault();

    /** custom validation for desc */
    if (!desc) {
        alert('Please, add Desc!');
        return;
    }

    /** add task function passed through the props */
    addTask({ desc, date, reminder });

    /** clear the form */
    setDesc('');
    setDate('');
    setReminder(false);
  };

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task</label>
            <input type='text' placeholder='Add Task Name' value={desc} onChange={(e) => setDesc(e.target.value)} />
        </div>

        <div className='form-control'>
            <label>Date</label>
            <input type='text' placeholder='Add Date' value={date} onChange={(e) => setDate(e.target.value)} />
        </div>

        <div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input type='checkbox' value={reminder} checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
        </div>

        <input type='submit' className='btn btn-block' value='Save task' />
    </form>
  )
}

/** Set a type of the props and set up them as a required */
AddTaskForm.propTypes = {
    addTask: PropTypes.func.isRequired
};

/** Export add task component */
export default AddTaskForm