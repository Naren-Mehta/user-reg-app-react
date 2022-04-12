import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./UserForm.module.css";

const UserForm = (props) => {
  const [error, setError] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    age: "",
  });
  const saveUserInfo = (event) => {
    event.preventDefault();
    userInput.id = Math.floor(Math.random() * 1000);

    if (
      userInput.name.trim().length === 0 ||
      userInput.age.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+userInput.age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onSaveNewUsers(userInput);
    setUserInput({
      name: "",
      age: "",
    });
  };

  const updateUserName = (event) => {
    setUserInput((previous) => {
      return { ...previous, name: event.target.value };
    });
  };

  const updateUserAge = (event) => {
    setUserInput((previous) => {
      return { ...previous, age: event.target.value };
    });
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={saveUserInfo}>
          <label htmlFor="username">Username</label>
          <input type="text" value={userInput.name} onChange={updateUserName} />

          <label htmlFor="age">Age(Years)</label>
          <input type="number" value={userInput.age} onChange={updateUserAge} />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default UserForm;
