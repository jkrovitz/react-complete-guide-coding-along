import { useState } from "react";

import NewUser from "./components/NewUsers/NewUser/NewUser";
import UsersList from "./components/Users/UsersList/UsersList";

import styles from "./App.module.css";

function App() {
  const [users, setUsers] = useState("");

  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  };

  return (
    <div className={styles.app}>
      <div className={styles["main-container"]}>
        <NewUser onAddUsers={addUserHandler} />
        <UsersList users={users} />
      </div>
    </div>
  );
}

export default App;
