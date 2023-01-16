import { graphql } from 'msw';
import { mockUsers } from './users';

type GetUsersQuery = {
  users: {
    id: number;
    name: string;
    email: string;
  }[];
};

export const handlers = [
  //Handles an "Delete User" mutation
  // graphql.mutation('Delete User', null),
  //Handles a "GetUsers" query
  graphql.query<GetUsersQuery>('GetUsers', (req, res, ctx) => {
    return res(
      ctx.delay(Math.floor(Math.random() * 2500) + 500), // randomises the response time
      ctx.data({ users: mockUsers }) // mock users object from mocks/user-data.ts
    );
  }),
];
