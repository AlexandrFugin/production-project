import React, { Suspense } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { articleDetailsPageReducer } from '../../model/slices';

import { ArticleDetailsComments } from './ArticleDetailsComments';

export default {
  title: 'pages/ArticleDetailsPage/ArticleDetailsComments',
  component: ArticleDetailsComments,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleDetailsComments>;

const Template: ComponentStory<typeof ArticleDetailsComments> = (args) => (
  <Suspense fallback="">
    <ArticleDetailsComments {...args} />
  </Suspense>
);

export const Normal = Template.bind({});
Normal.args = {
  id: '1',
};
Normal.decorators = [StoreDecorator({
  articleDetailsPage: {
    comments: {
      ids: ['1', '2'],
      entities: {
        1: {
          id: '1',
          text: 'hello world',
          user: { id: '1', username: 'Vasya' },
        },
        2: {
          id: '2',
          text: 'comment 2',
          user: { id: '2', username: 'Petya' },
        },
      },
      isLoading: false,
    },
  },
}, {
  articleDetailsPage: articleDetailsPageReducer,
})];
