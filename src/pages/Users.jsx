import React from "react";

import { users } from "../data";
import { Link } from "react-router-dom";

const Users = () => {
  return (
    <div>
      <h1>List of Users</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h3>{user.name} </h3>
            <Link to={`/users/${user.id}`}>
              <button>View user</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
