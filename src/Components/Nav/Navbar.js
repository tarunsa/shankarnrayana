import React, { useState } from "react";
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
          <Link to="/">
            <li>
              <a>Home</a>
            </li>
          </Link>

          <Link to="/about">
            <li>
              <a>About</a>
            </li>
          </Link>
          <Link to="/meeting">
            <li>
              <a>Meetings</a>
            </li>
          </Link>
          <Link to="/complaint">
            <li>
              <a>Compalints</a>
            </li>
          </Link>
          <Link to="/login">
            <li>
              <a>Login</a>
            </li>
          </Link>
          <Link to="/signup">
            <li>
              <a>Signup</a>
            </li>
          </Link>
        </ul>
        <i onClick={() => setOpen(!open)} className="fas fa-bars burger"></i>
      </nav>
    </div>
  );
}
export default Navbar;
