import {Story} from "@storybook/react";
import {Theme} from "@/shared/const/theme";
// eslint-disable-next-line alexandr-plugin/layer-imports
import {ThemeProvider} from "@/app/providers/ThemeProvider";

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