import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import cls from './ArticleList.module.scss'
import {memo} from "react";
import {Article, ArticleView} from "../../model/types/article";
import {ArticleListItem} from "../../ui/ArticleListItem/ArticleListItem";
import {ArticleListItemSkeleton} from "entities/Article/ui/ArticleListItem/ArticleListItemSkeleton";
import {Text, TextSize} from "shared/ui/Text/Text";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ))
}

// eslint-disable-next-line react/display-name
export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    view = ArticleView.SMALL,
    isLoading
  } = props;
  const {t} = useTranslation();

  const renderArticle = (article: Article) => {
    return (
      <ArticleListItem
        className={cls.card}
        article={article}
        view={view}
        key={article.id}
      />
    )
  };

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text size={TextSize.L} title={t('Статьи не найдены')} />
      </div>
    )
  }

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.length > 0
        ? articles.map(renderArticle)
        : null}
      {isLoading && getSkeletons(view)}
    </div>
  );
});