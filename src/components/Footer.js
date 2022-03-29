/** react router */
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
        <p>Copyright &copy; 2022</p>
        <br />
        <Link to='/about'>About</Link>
    </footer>
  )
}

export default Footer