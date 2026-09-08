import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleAdditionalInfo.module.scss';
import { memo } from 'react';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Text } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { User } from '@/entities/User';

interface ArticleAdditionalInfoProps {
  className?: string;
  autor: User;
  createAt: string;
  views: number;
  onEdit: () => void;
}

// eslint-disable-next-line react/display-name
export const ArticleAdditionalInfo = memo(
  (props: ArticleAdditionalInfoProps) => {
    const { className, views, createAt, autor, onEdit } = props;
    const { t } = useTranslation();

    return (
      <VStack
        gap={'32'}
        className={classNames(cls.ArticleAdditionalInfo, {}, [className])}
      >
        <HStack gap={'8'}>
          <Avatar src={autor.avatar} size={32} />
          <Text text={autor.username} bold />
          <Text text={createAt} />
        </HStack>
        <Button onClick={onEdit}>{t('Редактировать')}</Button>
        <Text text={t('{{count}} просмотров', { count: views })} />
      </VStack>
    );
  },
);
