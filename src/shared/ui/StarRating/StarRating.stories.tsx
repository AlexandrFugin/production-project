import {ComponentMeta, ComponentStory} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from '@/app/providers/ThemeProvider';
import {StarRating} from './StarRating';

export default {
  title: 'shared/StarRating',
  component: StarRating,
  argTypes: {
    backgroundColor: {control: 'color'},
    size: {control: 'number'},
    selectedStars: {control: 'number'},
  },
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = (args) => <StarRating {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  onSelect: action('onSelect'),
};

export const Large = Template.bind({});
Large.args = {
  size: 40,
  onSelect: action('onSelect'),
};

export const Small = Template.bind({});
Small.args = {
  size: 15,
  onSelect: action('onSelect'),
};

export const Dark = Template.bind({});
Dark.args = {
  size: 30,
  onSelect: action('onSelect'),
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
