import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>oops Error 404</h1>
      <p>The page can not be found</p>
      <Link to="/">
        <button>Go back to Homepage</button>
      </Link>
    </div>
  );
};

export default Error;
