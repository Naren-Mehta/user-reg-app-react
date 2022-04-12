import Card from "../UI/Card";
import "./UsersDashboard.css";
import UserList from "./UserList";
import UserForm from "./UserForm";

const UsersDashboard = (props) => {
  const saveNewUserDetails = (userInfo) => {
    props.onAddNewUser(userInfo);
  };
  return (
    <div className="usersDashboard">
      <UserForm onSaveNewUsers={saveNewUserDetails}></UserForm>
      <UserList users={props.userList} />
    </div>
  );
};

export default UsersDashboard;
