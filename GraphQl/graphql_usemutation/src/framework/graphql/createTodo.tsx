import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation AddTodo($title: String!, $completed: Boolean!) {
    createTodo(input: { title: $title, completed: $completed }) {
      id
      title
      completed
    }
  }
`;
