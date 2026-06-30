import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import React, {memo, useCallback} from "react";
import {Dropdown} from "shared/ui/Popups";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {Avatar} from "shared/ui/Avatar/Avatar";
import {getUserAuthData, isUserAdmin, isUserManager, userActions} from "entities/User";
import {useDispatch, useSelector} from "react-redux";

interface AvatarDropdownProps {
  className?: string;
}

// eslint-disable-next-line react/display-name
export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const {className} = props;
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const authData = useSelector(getUserAuthData);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  },[dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  if (!authData) {
    return null;
  }

  return (
    <Dropdown
      className={classNames('', {}, [className])}
      direction={'bottom left'}
      items={[
        ...(isAdminPanelAvailable? [{
          content: t('Админка'),
          href: RoutePath.admin_panel,
        }] : []),
        {
          content: t('Профиль'),
          href: RoutePath.profile + authData.id,
        },
        {
          content: t('Выйти'),
          onClick: onLogout,
        },
      ]}
      trigger={<Avatar size={30} src={authData.avatar} />}
    />
  );
});