import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArticlesPage from './ArticlesPage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Article, ArticleView } from 'entities/Article';
import { articlesPageReducer } from '../../model/slices/articlesPageSlice';

export default {
  title: 'pages/ArticlesPage',
  component: ArticlesPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />;

const article: Article = {
  id: '1',
  title: 'JavaScript news',
  subtitle: 'Что нового в JS за 2022 год?',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  createdAt: '26.02.2022',
  user: {
    id: '1',
    username: 'ulbi tv',
  },
  type: [],
  blocks: [],
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
  articlesPage: {
    ids: [article.id],
    entities: {
      [article.id]: article,
    },
    view: ArticleView.SMALL,
    isLoading: false,
  },
}, {
  articlesPage: articlesPageReducer,
})];
