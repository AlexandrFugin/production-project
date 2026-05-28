import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import cls from './ArticlesPage.module.scss'
import {memo} from "react";

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = ({className}: ArticlesPageProps) => {
  const {t} = useTranslation('article');

  return (
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
      {t('ARTICLES PAGE')}
    </div>
  );
};

export default memo(ArticlesPage);