import React from 'react';
import { UserList } from './UserList';
import { mockUsers } from '../../mocks/users';

// This is where we will fetch our user from an API.

export const UserListContainer = () => {
  return <UserList users={mockUsers} />;
};
