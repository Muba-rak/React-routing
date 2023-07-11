import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { users } from "../data";

const Singleuser = () => {
  const { userId } = useParams();
  const [user, setUser] = useState("User");
  useEffect(() => {
    const foundUser = users.find((user) => user.id === parseInt(userId));
    setUser(foundUser.name);
  }, []);

  return (
    <div>
      <h1> {user} </h1>
      <Link to="/users">Go back to users</Link>
    </div>
  );
};

export default Singleuser;
