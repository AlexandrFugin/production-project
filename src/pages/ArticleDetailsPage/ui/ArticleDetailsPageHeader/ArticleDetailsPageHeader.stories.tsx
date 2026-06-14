import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Article} from 'entities/Article';
import {ArticleBlockType, ArticleType} from 'entities/Article/model/types/article';
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import {ArticleDetailsPageHeader} from './ArticleDetailsPageHeader';

export default {
  title: 'shared/ArticleDetailsPageHeader',
  component: ArticleDetailsPageHeader,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as ComponentMeta<typeof ArticleDetailsPageHeader>;

const Template: ComponentStory<typeof ArticleDetailsPageHeader> = (args) => <ArticleDetailsPageHeader {...args} />;

const article: Article = {
  id: '1',
  title: 'Javascript news',
  subtitle: 'Что нового в JS за 2022 год?',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  createdAt: '26.02.2022',
  type: [ArticleType.IT],
  user: {
    id: '1',
    username: 'ulbi tv',
  },
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'Заголовок этого блока',
      paragraphs: ['Текст статьи'],
    },
  ],
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
  articleDetails: {
    data: article,
  },
  user: {
    authData: {
      id: '1',
      username: 'ulbi tv',
    },
  },
})];
