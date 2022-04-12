import React, { useState } from "react";
import "./App.css";
import UsersDashboard from "./components/Users/UsersDashboard";

function App() {
  let userList = [
    {
      id: Math.floor(Math.random() * 1000),
      name: "Naren",
      age: 32,
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: "Deepak",
      age: 30,
    },
  ];

  const [users, setUsers] = useState(userList);

  const updateUserList = (userInfo) => {
    setUsers((previousState) => {
      return [userInfo, ...previousState];
    });
  };

  return (
    <div>
      <UsersDashboard userList={users} onAddNewUser={updateUserList} />;
    </div>
  );
}

export default App;
