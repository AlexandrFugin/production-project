import {ComponentMeta, ComponentStory} from '@storybook/react';
import withMock from 'storybook-addon-mock';

import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import {Notification} from '@/entities/Notification/model/types/notification';
import '@/entities/Notification/api/notificationApi';

import {NotificationButton} from './NotificationButton';

export default {
  title: 'features/NotificationButton',
  component: NotificationButton,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
  decorators: [withMock],
} as ComponentMeta<typeof NotificationButton>;

const notifications: Notification[] = [
  {
    id: '1',
    title: 'Уведомление 1',
    description: 'Описание уведомления 1',
    href: 'https://youtube.com',
  },
  {
    id: '2',
    title: 'Уведомление 2',
    description: 'Описание уведомления 2',
  },
];

const Template: ComponentStory<typeof NotificationButton> = (args) => <NotificationButton {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: 'GET',
      status: 200,
      response: notifications,
    },
  ],
};
