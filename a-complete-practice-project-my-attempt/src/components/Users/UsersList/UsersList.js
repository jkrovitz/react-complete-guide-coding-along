import User from "../User/User";

const UsersList = (props) => {
  if (props.users.length === 0) {
    return <p className="users-list__fallback">Found no users.</p>;
  }

  return (
    <ul>
      {props.users.map((user) => (
        <User key={user.id} username={user.username} age={user.age} />
      ))}
    </ul>
  );
};

export default UsersList;
