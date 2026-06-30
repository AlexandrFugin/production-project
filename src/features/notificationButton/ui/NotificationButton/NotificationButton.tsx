import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import cls from './NotificationButton.module.scss'
import React, {memo} from "react";
import {Popover} from "shared/ui/Popups";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Icon} from "shared/ui/Icon/Icon";
import {NotificationList} from "entities/Notification";
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';

interface NotificationButtonProps {
  className?: string;
}

// eslint-disable-next-line react/display-name
export const NotificationButton = memo((props: NotificationButtonProps) => {
  const {className} = props;
  const {t} = useTranslation();

  return (
    <Popover
      className={classNames(cls.NotificationButton, {}, [className])}
      direction="bottom left"
      trigger={(
        <Button theme={ButtonTheme.CLEAR}>
          <Icon Svg={NotificationIcon} inverted />
        </Button>
      )}
    >
      <NotificationList className={cls.notifications} />
    </Popover>
  );
});