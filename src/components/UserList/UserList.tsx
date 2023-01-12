import React from 'react';
import './UserList.css';

type UserListProps = {
  users: {
    id: number;
    name: string;
    email: string;
  }[];
};

export const UserList = ({ users }: UserListProps) => {
  return (
    <div className="user-list">
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="user-item">
            <div className="user-info">
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
