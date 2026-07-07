import {classNames} from "@/shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import cls from './Icon.module.scss'
import React, {memo} from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  inverted?: boolean;
}

// eslint-disable-next-line react/display-name
export const Icon = memo((props: IconProps) => {
  const {className, Svg, inverted, ...otherProps} = props;

  return (
    <Svg
      className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])}
      {...otherProps}
    />
  );
});