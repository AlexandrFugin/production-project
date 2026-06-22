import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Article, ArticleType } from 'entities/Article';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { rtkApi } from 'shared/api/rtkApi';
import { QueryStatus } from '@reduxjs/toolkit/query';
import storybookImage from 'shared/assets/tests/storybook.jpg';
import '../../api/articleRecommendationsApi';

import { ArticleRecommendationsList } from './ArticleRecommendationsList';

export default {
  title: 'features/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
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
Normal.decorators = [StoreDecorator({
  [rtkApi.reducerPath]: {
    queries: {
      'getArticleRecommendationsList(3)': {
        status: QueryStatus.fulfilled,
        endpointName: 'getArticleRecommendationsList',
        requestId: 'article-recommendations-list-story',
        data: articles,
        startedTimeStamp: 1,
        fulfilledTimeStamp: 1,
      },
    },
    mutations: {},
    provided: {},
    subscriptions: {},
  },
})];
