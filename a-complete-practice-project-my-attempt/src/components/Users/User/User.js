import Card from "../../UI/Card/Card";
import styles from "./User.module.css";

const User = (props) => {
  return (
    <li>
      <Card className={styles.user}>
        <p className={styles["user-details"]}>
          {props.username} ({props.age} years old)
        </p>
      </Card>
    </li>
  );
};

export default User;
