import React from "react";

import NewUserForm from "../NewUserForm/NewUserForm";

const NewUser = (props) => {
  const saveNewUserDataHandler = (enteredUserData) => {
    const newUserData = {
      ...enteredUserData,
      id: Math.random().toString(),
    };
    props.onAddUsers(newUserData);
  };

  return (
    <div className="new-user">
      <NewUserForm onSaveNewUserData={saveNewUserDataHandler} />
    </div>
  );
};

export default NewUser;
