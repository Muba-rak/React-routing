import React from "react";
//a href - Link to
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>
        <Link to="/">
          <h4>React Router Dom</h4>
        </Link>
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/users">Users</Link>
      </div>
    </div>
  );
};

export default Navbar;
