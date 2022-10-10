import React, { useState } from "react";
import NewUser from "./components/NewUsers/NewUser/NewUser";
import UsersList from "./components/Users/UsersList/UsersList";

function App() {
  const [users, setUsers] = useState("");

  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  };

  return (
    <div>
      <NewUser onAddUsers={addUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
