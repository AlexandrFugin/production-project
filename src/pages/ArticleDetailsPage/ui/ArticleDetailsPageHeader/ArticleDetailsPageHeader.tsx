import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import cls from './ArticleDetailsPageHeader.module.scss'
import {memo, useCallback} from "react";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {getUserAuthData} from "entities/User";
import {getArticleDetailsData} from "entities/Article/model/selectors/articleDetailsData/articleDetailsData";
import {getCanEditArticle} from "pages/ArticleDetailsPage/model/selectors/article";

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

// eslint-disable-next-line react/display-name
export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
  const {className} = props;
  const {t} = useTranslation();
  const navigate = useNavigate();
  const article = useSelector(getArticleDetailsData);
  const canEdit = useSelector(getCanEditArticle);

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles)
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    navigate(`${RoutePath.article_details}${article?.id}/edit`);
  }, [article?.id, navigate]);

  return (
    <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
      <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
        {t('Назад к списку')}
      </Button>
      {canEdit && <Button
        className={cls.editBtn}
        theme={ButtonTheme.OUTLINE}
        onClick={onEditArticle}
      >
        {t('Редактировать')}
      </Button>}
    </div>
  );
});