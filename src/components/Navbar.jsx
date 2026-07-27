import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">🩸 LifeLink</h2>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/register">Register Donor</Link>
        </li>

        <li>
          <Link to="/search">Search Donors</Link>
        </li>

        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/emergency">Emergency Request</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;