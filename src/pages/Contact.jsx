import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const goto = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      console.log(name);
      // redirect to homepage
      goto("/contact");
    } else {
      setNameError("Please provide a name");
    }
  };
  return (
    <div>
      <h1>Contact page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p> {nameError} </p>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
