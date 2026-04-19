import {Story} from "@storybook/react";
import {Theme} from "app/providers/ThemeProvider";

export const ThemeDecorator = (theme: Theme) => {
  const ThemedStory = (StoryComponent: Story) => (
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  );

  ThemedStory.displayName = `ThemeDecorator(${theme})`;

  return ThemedStory;
};