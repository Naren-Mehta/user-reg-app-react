import React, { useState, useRef } from "react";
import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./UserForm.module.css";

const UserForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState(false);

  const saveUserInfo = (event) => {
    event.preventDefault();
    let enteredName = nameInputRef.current.value;
    let enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    let id = Math.floor(Math.random() * 1000),
      userInputObj = {
        id: id,
        name: enteredName,
        age: enteredAge,
      };
    props.onSaveNewUsers(userInputObj);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={saveUserInfo}>
          <label htmlFor="username">Username</label>
          <input type="text" ref={nameInputRef} />

          <label htmlFor="age">Age(Years)</label>
          <input type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default UserForm;
