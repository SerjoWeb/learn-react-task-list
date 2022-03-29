/** Import PropTypes to strict the types of the props */
import PropTypes from 'prop-types';

/** Component Button */
const Button = ({ color, caption, onToggleTaskForm }) => {
  return (
    <button className='btn' style={{ backgroundColor: color }} onClick={onToggleTaskForm}>{caption}</button>
  )
}

/** Set a default props */
Button.defaultProps = {
    color: 'green',
    caption: 'Button'
};

/** Set a type of the props and set up them as a required */
Button.propTypes = {
    color: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    onToggleTaskForm: PropTypes.func.isRequired
};

/** Export Button component */
export default Button