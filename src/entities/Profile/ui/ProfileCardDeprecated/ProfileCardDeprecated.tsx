import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ProfileCardDeprecated.module.scss';
import { memo } from 'react';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Input } from '@/shared/ui/deprecated/Input';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import {
  Text as TextDeprecated,
  TextAlign,
  TextTheme,
} from '@/shared/ui/deprecated/Text';

export const ProfileCardDeprecatedLoader = () => {
  return (
    <HStack
      justify="center"
      max
      className={classNames(cls.ProfileCard, { [cls.loading]: true })}
    >
      <Loader />
    </HStack>
  );
};

export const ProfileCardDeprecatedError = () => {
  const { t } = useTranslation();

  return (
    <HStack
      justify="center"
      max
      className={classNames(cls.ProfileCard, {}, [cls.error])}
    >
      <TextDeprecated
        theme={TextTheme.ERROR}
        title={t('Произошла ошибка при загрузке профиля')}
        text={t('Попробуйте обновить страницу')}
        align={TextAlign.CENTER}
      />
    </HStack>
  );
};

// eslint-disable-next-line react/display-name
export const ProfileCardDeprecated = memo((props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeLastname,
    onChangeFirstname,
    onChangeCity,
    onChangeAge,
    onChangeAvatar,
    onChangeUsername,
    onChangeCurrency,
    onChangeCountry,
  } = props;
  const { t } = useTranslation('profile');

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <VStack
      gap="8"
      max
      className={classNames(cls.ProfileCard, mods, [className])}
    >
      {data?.avatar && (
        <HStack justify="center" max className={cls.avatarWrapper}>
          <Avatar src={data?.avatar} />
        </HStack>
      )}
      <Input
        value={data?.first}
        placeholder={t('Ваше имя')}
        className={cls.input}
        onChange={onChangeFirstname}
        readonly={readonly}
        data-testid={'ProfileCard.firstname'}
      />
      <Input
        value={data?.lastname}
        placeholder={t('Ваше фамилия')}
        className={cls.input}
        onChange={onChangeLastname}
        readonly={readonly}
        data-testid={'ProfileCard.lastname'}
      />
      <Input
        value={data?.age}
        placeholder={t('Ваш возраст')}
        className={cls.input}
        onChange={onChangeAge}
        readonly={readonly}
      />
      <Input
        value={data?.city}
        placeholder={t('Город')}
        className={cls.input}
        onChange={onChangeCity}
        readonly={readonly}
      />
      <Input
        value={data?.username}
        placeholder={t('Введите имя пользователя')}
        className={cls.input}
        onChange={onChangeUsername}
        readonly={readonly}
      />
      <Input
        value={data?.avatar}
        placeholder={t('Введите ссылку на аватар')}
        className={cls.input}
        onChange={onChangeAvatar}
        readonly={readonly}
      />
      <CurrencySelect
        className={cls.input}
        value={data?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
      />
      <CountrySelect
        className={cls.input}
        value={data?.country}
        onChange={onChangeCountry}
        readonly={readonly}
      />
    </VStack>
  );
});
