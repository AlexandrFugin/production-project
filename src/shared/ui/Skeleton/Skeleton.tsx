import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import cls from './Skeleton.module.scss'
import {CSSProperties, memo} from "react";

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

// eslint-disable-next-line react/display-name
export const Skeleton = memo((props: SkeletonProps) => {
  const {
    className,
    height,
    width,
    border,
  } = props;
  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  }


  return (
    <div
      className={classNames(cls.Skeleton, {}, [className])}
      style={styles}
    >

    </div>
  );
});