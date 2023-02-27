import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppLink, AppLinkTheme } from './AppLink';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppLink>;
const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'TEXT',
    theme: AppLinkTheme.PRIMARY,
    to: '/'
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'TEXT',
    theme: AppLinkTheme.SECONDARY,
    to: '/'
};
Secondary.decorators = [ThemeDecorator(Theme.DARK)];