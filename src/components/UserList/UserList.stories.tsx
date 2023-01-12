import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { UserList } from './UserList';

export default {
  title: 'App/UserList',
  component: UserList,
  args: {
    users: [
      {
        id: 1,
        name: 'Bruce Wayne',
        email: 'bruce.wayne@wayneindustries.com',
      },
    ],
  },
} as ComponentMeta<typeof UserList>;

const Template: ComponentStory<typeof UserList> = (args) => (
  <UserList {...args} />
);

export const Users = Template.bind({});
