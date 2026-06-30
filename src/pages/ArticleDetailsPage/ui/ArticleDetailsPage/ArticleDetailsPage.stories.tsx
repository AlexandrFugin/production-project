import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';

import {Article, ArticleType} from 'entities/Article';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import storybookImage from 'shared/assets/tests/storybook.jpg';
import 'features/articleRecommendationsList/api/articleRecommendationsApi';
import { articleDetailsPageReducer } from '../../model/slices';
import ArticleDetailsPage from './ArticleDetailsPage';
import {ArticleBlockType} from "entities/Article/model/consts/articleConsts";

export default {
  title: 'pages/ArticleDetailsPage/ArticleDetailsPage',
  component: ArticleDetailsPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withMock],
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => <ArticleDetailsPage {...args} />;

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
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'Заголовок этого блока',
      paragraphs: [
        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
      ],
    },
    {
      id: '4',
      type: ArticleBlockType.CODE,
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
    },
    {
      id: '5',
      type: ArticleBlockType.TEXT,
      title: 'Заголовок этого блока',
      paragraphs: [
        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
      ],
    },
  ],
};

const recommendationArticle: Article = {
  id: '2',
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

const recommendations = new Array(3).fill(0).map((_, index) => ({
  ...recommendationArticle,
  id: String(index + 2),
}));

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
  StoreDecorator({
    articleDetails: {
      data: article,
    },
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
    user: {
      authData: {
        id: '1',
        username: 'Ulbi tv',
      },
    },
  }, {
    articleDetailsPage: articleDetailsPageReducer,
  }),
];
Normal.parameters = {
  route: '/articles/1',
  mockData: [
    {
      url: `${__API__}/articles?_limit=3`,
      method: 'GET',
      status: 200,
      response: recommendations,
    },
    {
      url: `${__API__}/comments?articleId=1&_expand=user`,
      method: 'GET',
      status: 200,
      response: [
        {
          id: '1',
          text: 'hello world',
          user: { id: '1', username: 'Vasya' },
        },
        {
          id: '2',
          text: 'comment 2',
          user: { id: '2', username: 'Petya' },
        },
      ],
    },
  ],
};
