import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticlesInfiniteList } from './ArticlesInfiniteList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleView } from '@/entities/Article';
import { articlesPageReducer } from '../../model/slices/articlesPageSlice';

export default {
  title: 'pages/ArticlesPage/ArticlesInfiniteList',
  component: ArticlesInfiniteList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticlesInfiniteList>;

const Template: ComponentStory<typeof ArticlesInfiniteList> = (args) => (
  <ArticlesInfiniteList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
  articlesPage: {
    ids: [],
    entities: {},
    view: ArticleView.SMALL,
    isLoading: false,
    _inited: true,
  },
}, {
  articlesPage: articlesPageReducer,
})];
