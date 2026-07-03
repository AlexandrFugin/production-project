import {useTranslation} from "react-i18next";
import {memo} from "react";
import {useSelector} from "react-redux";
import {getArticles} from "../../model/slices/articlesPageSlice";
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView
} from "../../model/selectors/articlesPageSelectors";
import {ArticleList} from "@/entities/Article";
import {Text} from "@/shared/ui/Text/Text";

interface ArticlesInfiniteListProps {
  className?: string;
}

// eslint-disable-next-line react/display-name
export const ArticlesInfiniteList = memo((props: ArticlesInfiniteListProps) => {
  const {className} = props;
  const {t} = useTranslation();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);

  if (error) {
    return <Text text={t('Ошибка при загрузке статьи')} />
  }

  return (
    <ArticleList
      className={className}
      isLoading={isLoading}
      view={view}
      articles={articles}
    />
  );
});