import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Article, ArticleType } from 'entities/Article';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import storybookImage from 'shared/assets/tests/storybook.jpg';

import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';

export default {
  title: 'pages/ArticleDetailsPage/ArticleDetailsPageHeader',
  component: ArticleDetailsPageHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleDetailsPageHeader>;

const article: Article = {
  id: '1',
  title: 'Javascript news',
  subtitle: 'Что нового в JS за 2022 год?',
  img: storybookImage,
  views: 1022,
  createdAt: '26.02.2022',
  type: [ArticleType.IT],
  user: {
    id: '1',
    username: 'Ulbi tv',
  },
  blocks: [],
};

const Template: ComponentStory<typeof ArticleDetailsPageHeader> = (args) => <ArticleDetailsPageHeader {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
  articleDetails: {
    data: article,
  },
  user: {
    authData: {
      id: '1',
      username: 'Ulbi tv',
    },
  },
})];
