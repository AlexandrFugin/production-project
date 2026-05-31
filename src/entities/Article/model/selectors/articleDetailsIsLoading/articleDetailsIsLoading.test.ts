import {StateSchema} from "app/providers/StoreProvider";
import {getArticleDetailsIsLoading} from "./articleDetailsIsLoading";

describe("getArticleDetailsIsLoading.test", () => {
  test("should work with filled state isLoading", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true,
      }
    }
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
  });
  test("should work with empty state isLoading", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
  });
})