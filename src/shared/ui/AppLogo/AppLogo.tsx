import { memo } from 'react';
import { HStack } from '../Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLogo.module.scss';
import AppSvg from '@/shared/assets/icons/app-image.svg';

interface AppLogoProps {
  className?: string;
}

// eslint-disable-next-line react/display-name
export const AppLogo = memo((props: AppLogoProps) => {
  const { className } = props;

  return (
    <HStack
      max
      justify={'center'}
      className={classNames(cls.appLogoWrapper, {}, [className])}
    >
      <div className={cls.gradientBig}></div>
      <div className={cls.gradientSmall}></div>
      <AppSvg className={cls.appLogo}></AppSvg>
    </HStack>
  );
});
