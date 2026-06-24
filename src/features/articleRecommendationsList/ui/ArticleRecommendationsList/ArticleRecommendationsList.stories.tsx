import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Article, ArticleType } from 'entities/Article';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { rtkApi } from 'shared/api/rtkApi';
import { QueryStatus } from '@reduxjs/toolkit/query';
import storybookImage from 'shared/assets/tests/storybook.jpg';
import '../../api/articleRecommendationsApi';

import { ArticleRecommendationsList } from './ArticleRecommendationsList';
import withMock from "storybook-addon-mock";

export default {
  title: 'features/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withMock]
} as ComponentMeta<typeof ArticleRecommendationsList>;

const article: Article = {
  id: '1',
  title: 'JavaScript news JavaScript news JavaScript news',
  user: {
    id: '1',
    username: 'ulbi tv',
    avatar: storybookImage,
  },
  subtitle: 'Что нового в JS за 2022 год?',
  img: storybookImage,
  views: 1022,
  createdAt: '26.02.2022',
  type: [ArticleType.IT, ArticleType.SCIENCE, ArticleType.ECONOMICS],
  blocks: [],
};

const articles = new Array(3).fill(0).map((_, index) => ({
  ...article,
  id: String(index),
}));

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => <ArticleRecommendationsList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/articles?_limit=3`,
      method: 'GET',
      status: 200,
      response: [
        {...article, id: '1'},
        {...article, id: '2'},
        {...article, id: '3'},
      ]
    }
  ]
}
