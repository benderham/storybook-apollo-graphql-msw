import React from 'react';
import { useQuery } from '@apollo/client';

import { GET_USERS } from './UserListQueries';
import { UserList } from './UserList';

// Deletes a user using a given id
// const DELETE_USER = gql`
//   mutation DeleteUser($id: ID!) {
//     user(id: $id) {
//       id
//     }
//   }
// `;

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
