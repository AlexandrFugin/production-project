import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Avatar.module.scss';
import { CSSProperties, useMemo } from 'react';
import { AppImage } from '../AppImage';
import { Icon } from '../Icon';
import UserIcon from '../../assets/icons/user-filled.svg';
import { Skeleton } from '../Skeleton';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
  fallbackInverted?: boolean;
}

export const Avatar = ({
  className,
  src,
  size,
  alt,
  fallbackInverted,
}: AvatarProps) => {
  const { t } = useTranslation();
  const mods: Mods = {};
  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size,
      height: size,
    };
  }, [size]);

  const fallback = <Skeleton width={size} height={size} border={'50%'} />;
  const errorFallback = (
    <Icon
      inverted={fallbackInverted}
      width={size}
      height={size}
      Svg={UserIcon}
    />
  );

  return (
    <AppImage
      fallback={fallback}
      errorFallback={errorFallback}
      src={src}
      alt={alt}
      style={styles}
      className={classNames(cls.Avatar, mods, [className])}
    />
  );
};
