import {classNames} from "shared/lib/classNames/classNames";
import cls from './Overlay.module.scss'
import {memo} from "react";

interface OverlayProps {
  className?: string;
  onClick?: () => void;
}

// eslint-disable-next-line react/display-name
export const Overlay = memo((props: OverlayProps) => {
  const {className, onClick} = props;

  return (
    <div onClick={onClick} className={classNames(cls.Overlay, {}, [className])}>

    </div>
  );
});