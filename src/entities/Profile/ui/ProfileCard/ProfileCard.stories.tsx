import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ProfileCard} from './ProfileCard';
import {Country} from "@/entities/Country";
import {Currency} from "@/entities/Currency";
import avatar from "@/shared/assets/tests/storybook.jpg"

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    username: 'admin',
    age: 22,
    country: Country.Kazakhstan,
    lastname: 'Nazarbaev',
    first: 'Nurik',
    city: 'Astana',
    currency: Currency.EUR,
    avatar,
  },
};

export const withError = Template.bind({});
withError.args = {
  error: 'true',
};


export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

