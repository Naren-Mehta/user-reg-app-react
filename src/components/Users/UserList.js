import Card from "../UI/Card.js";
import UserDetails from "./UserDetails.js";
import classes from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            <UserDetails key={user.id} user={user} />
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
