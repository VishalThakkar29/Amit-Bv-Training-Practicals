import { gql } from "@apollo/client";

export const GET_COUNTRY = gql`
  query Query($code: ID!) {
    country(code: $code) {
      name
      emoji
    }
  }
`;
