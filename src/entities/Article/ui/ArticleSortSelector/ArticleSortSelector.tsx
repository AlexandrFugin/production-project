import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import cls from './ArticleSortSelector.module.scss'
import {memo, useCallback, useMemo} from "react";
import {Select, SelectOption} from "shared/ui/Select/Select";
import {SortOrder} from "shared/types";
import {ArticleSortField} from "../../model/consts/articleConsts";

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newOrder: ArticleSortField) => void;
}

// eslint-disable-next-line react/display-name
export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const {className, onChangeSort, onChangeOrder, sort, order} = props;
  const {t} = useTranslation('article');

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
    {
      value: 'asc',
      content: t('возрастанию'),
    },
    {
      value: 'desc',
      content: t('убыванию'),
    },
  ], [t]);

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
    {
      value: ArticleSortField.CREATED,
      content: t('дате созданию'),
    },
    {
      value: ArticleSortField.TITLE,
      content: t('названию'),
    },
    {
      value: ArticleSortField.VIEWS,
      content: t('просмотрам'),
    },
  ], [t]);

  return (
    <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
      <Select
        options={sortFieldOptions}
        label={t('Сортировать ПО')}
        value={sort}
        onChange={onChangeSort}
      />
      <Select
        className={cls.order}
        options={orderOptions}
        label={t('по')}
        value={order}
        onChange={onChangeOrder}
      />
    </div>
  );
});