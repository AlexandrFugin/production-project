import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ScrollToolbar.module.scss';
import { memo } from 'react';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ScrollToTopButton } from '@/features/scrollToTopButton';

interface ScrollToolbarProps {
  className?: string;
}

// eslint-disable-next-line react/display-name
export const ScrollToolbar = memo((props: ScrollToolbarProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <VStack
      justify={'center'}
      align={'center'}
      max
      className={classNames(cls.ScrollToolbar, {}, [className])}
    >
      <ScrollToTopButton />
    </VStack>
  );
});
