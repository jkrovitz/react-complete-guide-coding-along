import { useState } from "react";

import Button from "../../UI/Button/Button";

import styles from "./NewUserForm.module.css";

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
        <div className={styles["new-user__controls"]}>
          <div className={styles["new-user__control"]}>
            <label>Username</label>
            <input type="text" onChange={usernameChangeHandler} />
          </div>
          <div className={styles["new-user__control"]}>
            <label>Age (Years)</label>
            <input type="number" onChange={ageChangeHandler} />
          </div>
        </div>
        <div className={styles["new-user__actions"]}>
          <Button type="submit">Add user</Button>
        </div>
      </form>
    </div>
  );
};

export default NewUserForm;
