import React from 'react';
import { gql, useQuery } from '@apollo/client';

import { UserList } from './UserList';

// Deletes a user using a given id
// const DELETE_USER = gql`
//   mutation DeleteUser($id: ID!) {
//     user(id: $id) {
//       id
//     }
//   }
// `;

// Queries all users and returns their id, username and email address
const GET_USERS = gql`
  query GetUsers {
    users {
      id
      username
      email
    }
  }
`;

const useGetUsers = () => {
  const { data, loading, error } = useQuery(GET_USERS);
  const users = data ? data.users : [];
  return { users, loading, error };
};

export const UserListContainer = () => {
  const { users, loading, error } = useGetUsers();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;

  return <UserList users={users} />;
};
