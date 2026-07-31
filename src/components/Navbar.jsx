import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <NavLink to="/" className="logo">
        <img
          src="/lifelink-logo.png"
          alt="LifeLink Logo"
          className="logo-icon"
        />
        <span>LifeLink</span>
      </NavLink>

      <ul className="nav-links">

        <li>
          <NavLink to="/">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/register">
            Register Donor
          </NavLink>
        </li>

        <li>
          <NavLink to="/search">
            Search Donors
          </NavLink>
        </li>

        <li>
          <NavLink to="/dashboard">
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/emergency">
            Emergency Request
          </NavLink>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;