/** Import PropTypes to strict the types of the props */
import PropTypes from 'prop-types';

/** Import react router dom location */
import { useLocation } from 'react-router-dom';

/** Import components */
import Button from "./Button"

/** Header component */
const Header = ({ onToggleTaskForm, toggleButton }) => {
  const location = useLocation();
  
  return (
    <header>
        <h1>Task Tracker</h1>
        {location.pathname === '/' && <Button color={toggleButton ? 'red' : 'green'} caption={toggleButton ? 'Close' : 'Add'} onToggleTaskForm={onToggleTaskForm} />}
    </header>
  )
}

/** Set a type of the props and set up them as a required */
Header.propTypes = {
  onToggleTaskForm: PropTypes.func.isRequired,
  toggleButton: PropTypes.bool.isRequired
};

/** Export Header component */
export default Header