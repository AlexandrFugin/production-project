import {ComponentMeta, ComponentStory} from '@storybook/react';

import {CommentCard} from './CommentCard';
import avatar from 'shared/assets/tests/storybook.jpg';

export default {
  title: 'shared/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  comment: {
    id: '1',
    text: 'some comment',
    user: {
      id: '1',
      username: 'admin',
      avatar,
    },
  },
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};