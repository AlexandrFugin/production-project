import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleDetails.module.scss';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { memo, useEffect } from 'react';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from '../../model/selectors/articleDetailsData/articleDetailsData';
import { getArticleDetailsError } from '../../model/selectors/articleDetailsError/articleDetailsError';
import {
  Text as TextDeprecated,
  TextAlign,
  TextSize,
} from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { getArticleDetailsIsLoading } from '../../model/selectors/articleDetailsIsLoading/articleDetailsIsLoading';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { renderArticleBlock } from './renderBlock';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

interface ArticleDetailsProps {
  className?: string;
  id?: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

const Deprecated = () => {
  const article = useSelector(getArticleDetailsData);

  return (
    <>
      <HStack justify={'center'} max className={cls.avatarWrapper}>
        <Avatar size={200} src={article?.img} className={cls.avatar} />
      </HStack>
      <VStack gap={'4'} max data-testid="ArticleDetails.Info">
        <TextDeprecated
          className={cls.title}
          title={article?.title}
          text={article?.subtitle}
          size={TextSize.L}
        />
        <HStack gap={'8'} className={cls.avatarInfo}>
          <Icon className={cls.icon} Svg={EyeIcon} />
          <TextDeprecated text={String(article?.views)} />
        </HStack>
        <HStack gap={'8'} className={cls.avatarInfo}>
          <Icon className={cls.icon} Svg={CalendarIcon} />
          <TextDeprecated text={article?.createdAt} />
        </HStack>
      </VStack>
      {article?.blocks.map(renderArticleBlock)}
    </>
  );
};

const Redesigned = () => {
  const article = useSelector(getArticleDetailsData);

  return (
    <>
      <Text title={article?.title} size={'l'} bold />
      <Text title={article?.subtitle} />
      <AppImage
        fallback={<Skeleton width={'100%'} height={420} border={'16px'} />}
        src={article?.img}
        className={cls.img}
      />
      {article?.blocks.map(renderArticleBlock)}
    </>
  );
};

// eslint-disable-next-line react/display-name
export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className, id } = props;
  const { t } = useTranslation('article-details');
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <>
        <SkeletonDeprecated
          className={cls.avatar}
          width={200}
          height={200}
          border={'50%'}
        />
        <SkeletonDeprecated className={cls.title} width={300} height={32} />
        <SkeletonDeprecated className={cls.skeleton} width={600} height={24} />
        <SkeletonDeprecated
          className={cls.skeleton}
          width={'100%'}
          height={200}
        />
        <SkeletonDeprecated
          className={cls.skeleton}
          width={'100%'}
          height={200}
        />
      </>
    );
  } else if (error) {
    content = (
      <TextDeprecated
        align={TextAlign.CENTER}
        title={t('Произошла ошибка при загрузке статьи')}
      />
    );
  } else {
    content = (
      <ToggleFeatures
        feature={'isAppRedesigned'}
        on={<Redesigned />}
        off={<Deprecated />}
      />
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
      <VStack
        gap={'16'}
        max
        className={classNames(cls.ArticleDetails, {}, [className])}
      >
        {content}
      </VStack>
    </DynamicModuleLoader>
  );
});
