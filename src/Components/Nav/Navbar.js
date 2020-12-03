import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../Styles/Nav.css";
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <nav>
        <div className="logo">Malagundla sankar narayana</div>
        <ul
          className="nav-links"
          style={{
            transform: open ? "translateX(0px)" : "",
          }}
        >
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/meeting">Meetings</Link>
          </li>
          <li>
            <Link to="/complaint">Complaints</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
        <i onClick={() => setOpen(!open)} className="fas fa-bars burger"></i>
      </nav>
    </div>
  );
}
export default Navbar;
