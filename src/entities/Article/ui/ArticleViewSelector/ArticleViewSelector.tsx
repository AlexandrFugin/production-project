import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import cls from './ArticleViewSelector.module.scss'
import {memo} from "react";
import {ArticleView} from "../../model/types/article";
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg';
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Icon} from "shared/ui/Icon/Icon";

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewType = [
  {
    view: ArticleView.SMALL,
    icon: TiledIcon,
  },
  {
    view: ArticleView.BIG,
    icon: ListIcon,
  }
]

// eslint-disable-next-line react/display-name
export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const {
    className,
    view,
    onViewClick
  } = props;
  const {t} = useTranslation();

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  }

  return (
    <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
      {viewType.map(viewType => (
        <Button
          key={viewType.view}
          theme={ButtonTheme.CLEAR}
          onClick={onClick(viewType.view)}
        >
          <Icon
            Svg={viewType.icon}
            className={classNames('', {[cls.notSelected]: viewType.view !== view} )}
          />
        </Button>
      ))}
    </div>
  );
});