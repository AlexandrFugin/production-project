import {ArticleDetailsCommentsSchema, ArticleDetailsRecommendationsSchema} from "../../index";

export interface ArticleDetailsPageSchema {
  comments: ArticleDetailsCommentsSchema;
  recommendations: ArticleDetailsRecommendationsSchema;
}