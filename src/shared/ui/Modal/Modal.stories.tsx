import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Modal} from './Modal';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children: 'Текст — это зафиксированная на носителе связная последовательность символов (слов, предложений), выражающая человеческую мысль, обладающая цельностью и связностью. Основная функция — передача информации. Также термин обозначает российский фильм 2019 года, психологический триллер режиссера Клима Шипенко, экранизацию романа Дмитрия Глуховского.',
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children: 'Текст — это зафиксированная на носителе связная последовательность символов (слов, предложений), выражающая человеческую мысль, обладающая цельностью и связностью. Основная функция — передача информации. Также термин обозначает российский фильм 2019 года, психологический триллер режиссера Клима Шипенко, экранизацию романа Дмитрия Глуховского.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
