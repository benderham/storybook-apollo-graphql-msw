import { gql } from '@apollo/client/core';

// Queries all users and returns their id, username and email address
export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      username
      email
    }
  }
`;
