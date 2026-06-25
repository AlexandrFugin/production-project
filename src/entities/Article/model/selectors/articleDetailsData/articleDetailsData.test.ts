import {StateSchema} from "app/providers/StoreProvider";
import {getArticleDetailsData} from "./articleDetailsData";

describe("getArticleDetailsData.test", () => {
  test("should return data", () => {
    const data = {
      id: "1",
      title: "Что нового в JS за 2022 год?",
    }
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data
      }
    }
    expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
  });
  test("should work with empty data", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
  });
})