import React from 'react';
import { UserList } from './UserList';
import { mockUsers } from '../../mocks/users';

const UserListContainer = () => {
  return <UserList users={mockUsers} />;
};

export default UserListContainer;
