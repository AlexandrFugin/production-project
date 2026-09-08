import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { StarRating } from '@/shared/ui/deprecated/StarRating';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Input } from '@/shared/ui/redesigned/Input';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Button } from '@/shared/ui/redesigned/Button';
import { BrowserView, MobileView } from 'react-device-detect';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
  rate?: number;
}

// eslint-disable-next-line react/display-name
export const RatingCard = memo((props: RatingCardProps) => {
  const {
    className,
    onAccept,
    feedbackTitle,
    hasFeedback,
    onCancel,
    title,
    rate = 0,
  } = props;
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedback] = useState('');

  const onSelectStar = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount);
      if (hasFeedback) {
        setIsModalOpen(true);
      } else {
        onAccept?.(selectedStarsCount);
      }
      setIsModalOpen(true);
    },
    [hasFeedback, onAccept],
  );

  const acceptHandle = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const cancelHandle = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const modalContent = (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      on={
        <>
          <Text title={feedbackTitle} />
          <Input
            value={feedback}
            onChange={setFeedback}
            placeholder={t('Ваш отзыв')}
            data-testid="RatingCard.Input"
          />
        </>
      }
      off={
        <>
          <TextDeprecated title={feedbackTitle} />
          <InputDeprecated
            value={feedback}
            onChange={setFeedback}
            placeholder={t('Ваш отзыв')}
            data-testid="RatingCard.Input"
          />
        </>
      }
    />
  );

  const content = (
    <>
      <VStack align={'center'} gap={'8'}>
        <ToggleFeatures
          feature={'isAppRedesigned'}
          on={<Text title={starsCount ? t('Спвасибо за оценку!') : title} />}
          off={
            <TextDeprecated
              title={starsCount ? t('Спвасибо за оценку!') : title}
            />
          }
        />

        <StarRating
          selectedStars={starsCount}
          size={40}
          onSelect={onSelectStar}
        />
      </VStack>
      <BrowserView>
        <Modal isOpen={isModalOpen} lazy>
          {modalContent}
          <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
              <VStack gap={'32'} max>
                <HStack gap={'16'} max justify={'end'}>
                  <Button onClick={cancelHandle} data-testid="RatingCard.Close">
                    {t('Закрыть')}
                  </Button>
                  <Button onClick={acceptHandle} data-testid="RatingCard.Send">
                    {t('Отправить')}
                  </Button>
                </HStack>
              </VStack>
            }
            off={
              <VStack gap={'32'} max>
                <HStack gap={'16'} max justify={'end'}>
                  <ButtonDeprecated
                    onClick={cancelHandle}
                    theme={ButtonTheme.OUTLINE_RED}
                    data-testid="RatingCard.Close"
                  >
                    {t('Закрыть')}
                  </ButtonDeprecated>
                  <ButtonDeprecated
                    onClick={acceptHandle}
                    data-testid="RatingCard.Send"
                  >
                    {t('Отправить')}
                  </ButtonDeprecated>
                </HStack>
              </VStack>
            }
          />
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isModalOpen} lazy>
          <VStack gap={'32'}>
            {modalContent}
            <ToggleFeatures
              feature={'isAppRedesigned'}
              on={
                <Button fullWidth onClick={acceptHandle} size={'l'}>
                  {t('Отправить')}
                </Button>
              }
              off={
                <ButtonDeprecated fullWidth onClick={acceptHandle}>
                  {t('Отправить')}
                </ButtonDeprecated>
              }
            />
          </VStack>
        </Drawer>
      </MobileView>
    </>
  );

  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      on={
        <Card padding={'24'} border={'round'} max data-testid="RatingCard">
          {content}
        </Card>
      }
      off={
        <CardDeprecated className={className} max data-testid="RatingCard">
          {content}
        </CardDeprecated>
      }
    />
  );
});
