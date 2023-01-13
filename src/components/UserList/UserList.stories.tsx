import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MockApolloProvider } from '../../mocks/MockApolloProvider';
import { handlers } from '../../mocks/handlers';

import { UserListContainer } from './UserListContainer';

export default {
  title: 'App/UserList',
  component: UserListContainer,
} as ComponentMeta<typeof UserListContainer>;

const Template: ComponentStory<typeof UserListContainer> = () => (
  <MockApolloProvider>
    <UserListContainer />
  </MockApolloProvider>
);

export const Default = Template.bind({});
Default.parameters = {
  msw: {
    handlers: [...handlers],
  },
};
