import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import { ADD_USER } from "../framework/graphql/createTodo";

export default function Todo() {
  const [name, setName] = useState("");
  const [addUser, { loading, error, data }] = useMutation(ADD_USER);

  console.log(data);
  const handleSubmit = (event: any) => {
    event.preventDefault();

    addUser({
      variables: {
        title: name,
        completed: true,
      },
    });

    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <button type="submit">Add User</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <p>
          User added: {data.createTodo.title} (ID: {data.createTodo.id})
        </p>
      )}
    </form>
  );
}
