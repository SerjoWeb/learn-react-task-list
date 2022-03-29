/** react router */
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className='About'>
        <h4>Version 1.0.0</h4>
        <br />
        <p>Learn how to React developing.</p>
        <br />
        <Link to='/'>Go Back</Link>
    </div>
  )
}

export default About