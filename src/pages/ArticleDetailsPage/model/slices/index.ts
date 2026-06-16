import {combineReducers} from "@reduxjs/toolkit";
import {ArticleDetailsPageSchema} from "../types";
import {
  articleDetailsPageRecommendationsReducer
} from "../../model/slices/articleDetailsPageRecommendationsSlice";
import {articleDetailsCommentsReducer} from "../../model/slices/articleDetailsCommentsSlice";

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  recommendations: articleDetailsPageRecommendationsReducer,
  comments: articleDetailsCommentsReducer,
})