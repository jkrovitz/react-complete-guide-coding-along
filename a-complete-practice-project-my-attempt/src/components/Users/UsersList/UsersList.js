import User from "../User/User";

import styles from "./UsersList.module.css";

const UsersList = (props) => {
  if (props.users.length === 0) {
    return <p className="users-list__fallback">Found no users.</p>;
  }

  return (
    <ul className={styles["users-list"]}>
      {props.users.map((user) => (
        <User key={user.id} username={user.username} age={user.age} />
      ))}
    </ul>
  );
};

export default UsersList;
