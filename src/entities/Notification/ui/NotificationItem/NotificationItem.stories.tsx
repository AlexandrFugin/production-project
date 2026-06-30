import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Notification} from '../../model/types/notification';
import {NotificationItem} from './NotificationItem';

export default {
  title: 'entities/Notification/NotificationItem',
  component: NotificationItem,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as ComponentMeta<typeof NotificationItem>;

const notification: Notification = {
  id: '1',
  title: 'Уведомление 1',
  description: 'Описание уведомления 1',
  href: 'https://youtube.com',
};

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  item: notification,
};
