import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import cls from './ArticleList.module.scss'
import {HTMLAttributeAnchorTarget, memo} from "react";
import {Article, ArticleView} from "../../model/types/article";
import {ArticleListItem} from "../../ui/ArticleListItem/ArticleListItem";
import {ArticleListItemSkeleton} from "../ArticleListItem/ArticleListItemSkeleton";
import {Text, TextSize} from "shared/ui/Text/Text";
import {List, ListRowProps, WindowScroller} from "react-virtualized";
import {PAGE_ID} from "widgets/Page/Page";

const CARD_WIDTH = 230;
const CARD_GAP = 30;
const LIST_HORIZONTAL_OFFSET = 80;

const getItemsPerRow = (listWidth: number, isBig: boolean) => {
  if (isBig) {
    return 1;
  }

  return Math.max(1, Math.floor((listWidth + CARD_GAP) / (CARD_WIDTH + CARD_GAP)));
};

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
  virtualized?: boolean;
}

const getSkeletons = (view: ArticleView, itemsPerRow = 3) => {
  const count = view === ArticleView.SMALL ? itemsPerRow * 3 : 3;

  return new Array(count)
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
    isLoading,
    target,
    virtualized = true,
  } = props;
  const {t} = useTranslation();

  const isBig = view === ArticleView.BIG;

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text size={TextSize.L} title={t('Статьи не найдены')} />
      </div>
    )
  }

  if (!virtualized) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        {articles.map((article) => (
          <ArticleListItem
            className={cls.card}
            article={article}
            view={view}
            target={target}
            key={article.id}
          />
        ))}
        {isLoading && getSkeletons(view)}
      </div>
    );
  }

  return (
    <WindowScroller
      scrollElement={document.getElementById(PAGE_ID) as Element}
    >
      {({
        height, 
        width, 
        registerChild, 
        onChildScroll, 
        isScrolling, 
        scrollTop
      }) => {
        const listWidth = width ? width - LIST_HORIZONTAL_OFFSET : 700;
        const itemsPerRow = getItemsPerRow(listWidth, isBig);
        const rowCount = isBig
          ? articles.length
          : Math.ceil(articles.length / itemsPerRow);

        const rowRender = ({index, key, style}: ListRowProps) => {
          const items = [];
          const fromIndex = index * itemsPerRow;
          const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

          for (let i = fromIndex; i < toIndex; i += 1) {
            items.push(
              <ArticleListItem
                className={cls.card}
                article={articles[i]}
                view={view}
                target={target}
                key={articles[i].id}
              />
            );
          }

          return (
            <div
              key={key}
              style={style}
              className={cls.row}
            >
              {items}
            </div>
          );
        };

        return (
          <div
            ref={registerChild}
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
          >
            <List
              height={height ?? 700}
              rowCount={rowCount}
              rowHeight={isBig ? 700 : 330}
              rowRenderer={rowRender}
              width={listWidth}
              autoHeight
              onScroll={onChildScroll}
              isScrolling={isScrolling}
              scrollTop={scrollTop}
            />
            {isLoading && getSkeletons(view, itemsPerRow)}
          </div>
        );
      }}
    </WindowScroller>
  );
});
