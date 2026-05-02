import {Story} from "@storybook/react";
import {StateSchema, StoreProvider} from "app/providers/StoreProvider";
import {DeepPartial} from "@reduxjs/toolkit";

export const StoreDecorator = (state: DeepPartial<StateSchema>) => {
  // eslint-disable-next-line react/display-name -- фабрика декоратора Storybook
  return (StoryComponent: Story) => (
    <StoreProvider initialState={state}>
      <StoryComponent />
    </StoreProvider>
  );
};