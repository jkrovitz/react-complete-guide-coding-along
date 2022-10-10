import React, { useState } from "react";

const NewUserForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newUserData = {
      username: enteredUsername,
      age: enteredAge,
    };

    props.onSaveNewUserData(newUserData);
    setEnteredUsername("");
    setEnteredAge("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <div>
            <label>Username</label>
            <input type="text" onChange={usernameChangeHandler} />
          </div>
          <div>
            <label>Age (Years)</label>
            <input type="number" onChange={ageChangeHandler} />
          </div>
        </div>
        <div>
          <button type="submit">Add user</button>
        </div>
      </form>
    </div>
  );
};

export default NewUserForm;
