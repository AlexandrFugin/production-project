import {Story} from "@storybook/react";
import {Theme, ThemeProvider} from "app/providers/ThemeProvider";

export const ThemeDecorator = (theme: Theme) => {
  const ThemedStory = (StoryComponent: Story) => (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <StoryComponent />
      </div>
    </ThemeProvider>
  );

  ThemedStory.displayName = `ThemeDecorator(${theme})`;

  return ThemedStory;
};