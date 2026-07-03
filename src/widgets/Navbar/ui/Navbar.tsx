import React, {memo, useCallback, useState} from 'react';
import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "@/shared/ui/Button/Button";
import {LoginModal} from "@/features/AuthByUsername";
import {useSelector} from "react-redux";
import {getUserAuthData} from "@/entities/User";
import {Text, TextTheme} from "@/shared/ui/Text/Text";
import {AppLink, AppLinkTheme} from "@/shared/ui/AppLink/AppLink";
import {RoutePath} from "@/shared/config/routeConfig/routeConfig";
import {Dropdown} from "@/shared/ui/Popups/ui/Dropdown/Dropdown";
import {Avatar} from "@/shared/ui/Avatar/Avatar";
import {HStack} from "@/shared/ui/Stack";
import {Icon} from "@/shared/ui/Icon/Icon";
import {NotificationButton} from "@/features/notificationButton";
import {AvatarDropdown} from "@/features/avatarDropdown";
import {Drawer} from "@/shared/ui/Drawer/Drawer";
import {NotificationList} from "@/entities/Notification";

interface NavbarProps {
  className?: string;
}

// eslint-disable-next-line react/display-name
export const Navbar = memo(({className}: NavbarProps) => {
  const {t} = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  },[]);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  },[]);

  if (authData) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])}>
        <Text
          className={cls.appName}
          title={t('Ulbi TV App')}
          theme={TextTheme.INVERTED}
        />
        <AppLink
          to={RoutePath.article_create}
          theme={AppLinkTheme.SECONDARY}
          className={cls.createBtn}
        >
          {t('Создать статью')}
        </AppLink>
        <HStack gap={'16'} className={cls.actions}>
          <NotificationButton />
          <AvatarDropdown />
        </HStack>
      </header>
    )
  }

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Button
        className={cls.links}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={onShowModal}
      >
        {t('Войти')}
      </Button>
      {isAuthModal && <LoginModal
        isOpen={isAuthModal}
        onClose={onCloseModal}
      />}
    </header>
  );
});