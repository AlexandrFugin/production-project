import React from 'react';
// eslint-disable-next-line alexandr-plugin/layer-imports
import '@/app/styles/index.scss';
import {Story} from "@storybook/react";

export const StyleDecorator = (Story: Story) => React.createElement(Story);