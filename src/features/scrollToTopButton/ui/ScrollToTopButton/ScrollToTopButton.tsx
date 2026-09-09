import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ScrollToTopButton.module.scss';
import { memo } from 'react';
import { Icon } from '@/shared/ui/redesigned/Icon';
import CircleIcon from '@/shared/assets/icons/circle-up.svg';

interface ScrollToTopButtonProps {
  className?: string;
}

// eslint-disable-next-line react/display-name
export const ScrollToTopButton = memo((props: ScrollToTopButtonProps) => {
  const { className } = props;
  const { t } = useTranslation();

  const onClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Icon
      Svg={CircleIcon}
      clickable
      onClick={onClick}
      width={32}
      height={32}
      className={classNames(cls.ScrollToTopButton, {}, [className])}
    />
  );
});
