import {StateSchema} from "@/app/providers/StoreProvider";
import {getArticleDetailsError} from "./articleDetailsError";

describe("getArticleDetailsError.test", () => {
  test("should return value error", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'error',
      }
    }
    expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
  });
  test("should work with empty state error", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
  });
})