import {ComponentMeta, ComponentStory} from '@storybook/react';
import withMock from 'storybook-addon-mock';

import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import '@/features/profileRating/api/profileRatingApi';

import ProfileRating from './ProfileRating';

export default {
  title: 'features/ProfileRating',
  component: ProfileRating,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
  decorators: [withMock],
} as ComponentMeta<typeof ProfileRating>;

const Template: ComponentStory<typeof ProfileRating> = (args) => <ProfileRating {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  profileId: '1',
};
Normal.decorators = [
  StoreDecorator({
    user: {
      authData: {
        id: '1',
        username: 'admin',
      },
    },
  }),
];
Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/profile-ratings?userId=1&profileId=1`,
      method: 'GET',
      status: 200,
      response: [],
    },
  ],
};
