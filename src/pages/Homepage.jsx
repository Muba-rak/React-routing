import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <a href="https://facebook.com">Facebook </a>
      <Link to="/about">
        <button>Go to About</button>
      </Link>
    </div>
  );
};

export default Homepage;
