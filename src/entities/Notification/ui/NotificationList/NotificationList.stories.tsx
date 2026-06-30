import {ComponentMeta, ComponentStory} from '@storybook/react';
import withMock from 'storybook-addon-mock';

import {StoreDecorator} from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import {Notification} from '../../model/types/notification';
import '../../api/notificationApi';

import {NotificationList} from './NotificationList';

export default {
  title: 'entities/Notification/NotificationList',
  component: NotificationList,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
  decorators: [withMock],
} as ComponentMeta<typeof NotificationList>;

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
  {
    id: '3',
    title: 'Уведомление 3',
    description: 'Описание уведомления 3',
    href: 'https://youtube.com',
  },
];

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

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
