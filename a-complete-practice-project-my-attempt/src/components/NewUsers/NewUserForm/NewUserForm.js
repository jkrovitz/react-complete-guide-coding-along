import { useState } from "react";

import Button from "../../UI/Button/Button";
import MyModal from "../../Modal/Modal";

import styles from "./NewUserForm.module.css";
import Card from "../../UI/Card/Card";

const NewUserForm = (props) => {
  const modalData = {
    body: "Please enter a valid name and age (non-empty values).",
  };

  const nonIntegerData = {
    body: "The age value must be an integer.",
  };

  const ageGreaterThanZeroData = {
    body: "Please enter a valid age (> 0).",
  };

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [noInput, setNoInput] = useState(false);
  const [nonInteger, setNonInteger] = useState(false);
  const [ageGreaterThanZero, setAgeGreaterThanZero] = useState(false);

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  function isNumeric(value) {
    return /^-?\d+$/.test(value);
  }

  function handleCloseModal(event, data) {
    setIsOpen(false);
    setNoInput(false);
    setNonInteger(false);
    setAgeGreaterThanZero(false);
  }
  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setIsOpen(true);
      setNoInput(true);
      setNonInteger(false);
      setAgeGreaterThanZero(false);
    } else if (!isNumeric(enteredAge)) {
      setIsOpen(true);
      setNonInteger(true);
      setAgeGreaterThanZero(false);
      setNoInput(false);
    } else if (enteredAge <= 0) {
      setIsOpen(true);
      setAgeGreaterThanZero(true);
      setNonInteger(false);
      setNoInput(false);
    } else {
      const newUserData = {
        username: enteredUsername,
        age: enteredAge,
      };

      props.onSaveNewUserData(newUserData);
      setEnteredUsername("");
      setEnteredAge("");
    }
  };

  return (
    <Card className={styles["new-user__card"]}>
      <div className={styles["new-user__form-container"]}>
        <form onSubmit={submitHandler}>
          <div className={styles["new-user__controls"]}>
            <div className={styles["new-user__control"]}>
              <label>Username</label>
              <input
                type="text"
                value={enteredUsername}
                onChange={usernameChangeHandler}
              />
            </div>
            <div className={styles["new-user__control"]}>
              <label>Age (Years)</label>
              <input
                type="number"
                value={enteredAge}
                onChange={ageChangeHandler}
              />
            </div>
          </div>
          <div className={styles["new-user__actions"]}>
            <Button type="submit" name="Okay">
              Okay
            </Button>
          </div>
          {noInput ? (
            <MyModal
              dynData={modalData}
              IsModalOpened={isOpen}
              onCloseModal={handleCloseModal}
            />
          ) : null}

          {nonInteger ? (
            <MyModal
              dynData={nonIntegerData}
              IsModalOpened={isOpen}
              onCloseModal={handleCloseModal}
            />
          ) : null}
          {ageGreaterThanZero ? (
            <MyModal
              dynData={ageGreaterThanZeroData}
              IsModalOpened={isOpen}
              onCloseModal={handleCloseModal}
            />
          ) : null}
        </form>
      </div>
    </Card>
  );
};

export default NewUserForm;
