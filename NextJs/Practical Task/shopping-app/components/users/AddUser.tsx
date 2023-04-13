import React, { SetStateAction } from "react";
import { useState } from "react";
import { UserListProps } from "@/pages/users";

type AddUserProps = {
  showForm: React.Dispatch<React.SetStateAction<boolean>>;
  setData: React.Dispatch<React.SetStateAction<UserListProps[]>>;
};

const AddUser: React.FC<AddUserProps> = ({ showForm, setData }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const responseBody: any = { firstName: "", lastName: "", age: "0" };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const errors: { [key: string]: string } = {};

    if (firstName.trim() === "") {
      errors.firstName = "First name is required";
      alert(errors.firstName);
    }
    if (lastName.trim() === "") {
      errors.lastName = "Last name is required";
      alert(errors.lastName);
    }
    if (age.trim() === "" || isNaN(Number(age))) {
      errors.age = "Age is required and must be a number";
      alert(errors.age);
    }

    if (Object.keys(errors).length === 0) {
      setFormErrors({});
      responseBody.firstName = firstName;
      responseBody.lastName = lastName;
      responseBody.age = age;

      fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(responseBody),
      })
        .then((res) => res.json())
        .then((data) => {
          setData((prev) => [data, ...prev]);
          alert("User Added Successfully");
        });

      showForm(false);
    } else {
      setFormErrors(errors);
    }
  };

  const inputChangeHandler = (
    setFunction: React.Dispatch<React.SetStateAction<string>>,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFunction(event.target.value);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <label htmlFor="first_name">First Name</label>
      </div>
      <div>
        <input
          id="first_name"
          onChange={(e) => inputChangeHandler(setFirstName, e)}
          type="text"
        />
      </div>
      <div>
        <label htmlFor="last_name">Last Name</label>
      </div>
      <div>
        <input
          id="last_name"
          onChange={(e) => inputChangeHandler(setLastName, e)}
          type="text"
        />
      </div>
      <div>
        <label htmlFor="age">Age</label>
      </div>
      <div>
        <input
          id="age"
          onChange={(e) => inputChangeHandler(setAge, e)}
          type="number"
        />
      </div>
      <input type="submit" />
    </form>
  );
};

export default AddUser;
