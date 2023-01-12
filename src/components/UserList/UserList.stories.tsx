import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { UserListContainer } from './UserListContainer';

export default {
  title: 'App/UserList',
  component: UserListContainer,
} as ComponentMeta<typeof UserListContainer>;

const Template: ComponentStory<typeof UserListContainer> = () => (
  <UserListContainer />
);

export const Default = Template.bind({});
