import {useTranslation} from "react-i18next";
import {memo, useCallback, useState} from "react";
import {Card} from "@/shared/ui/Card";
import {HStack, VStack} from "@/shared/ui/Stack";
import {Text} from "@/shared/ui/Text";
import {StarRating} from "@/shared/ui/StarRating";
import {Modal} from "@/shared/ui/Modal";
import {Input} from "@/shared/ui/Input";
import {Button, ButtonTheme} from "@/shared/ui/Button";
import {BrowserView, MobileView} from "react-device-detect";
import {Drawer} from "@/shared/ui/Drawer";

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
  const {t} = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedback] = useState('');

  const onSelectStar = useCallback((selectedStarsCount: number) => {
    setStarsCount(selectedStarsCount);
    if (hasFeedback) {
      setIsModalOpen(true);
    } else {
      onAccept?.(selectedStarsCount);
    }
    setIsModalOpen(true);
  }, [hasFeedback, onAccept]);

  const acceptHandle = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const cancelHandle = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const modalContent = (
    <>
      <Text
        title={feedbackTitle}
      />
      <Input
        value={feedback}
        onChange={setFeedback}
        placeholder={t('Ваш отзыв')}
        data-testid="RatingCard.Input"
      />
    </>
  );

  return (
    <Card
      className={className}
      max
      data-testid="RatingCard"
    >
      <VStack align={'center'} gap={'8'}>
        <Text title={starsCount ? t('Спвасибо за оценку!') : title} />
        <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStar} />
      </VStack>
      <BrowserView>
        <Modal isOpen={isModalOpen} lazy>
          {modalContent}
          <VStack gap={'32'} max>
            <HStack gap={'16'} max justify={'end'}>
              <Button
                onClick={cancelHandle}
                theme={ButtonTheme.OUTLINE_RED}
                data-testid="RatingCard.Close"
              >
                {t('Закрыть')}
              </Button>
              <Button
                onClick={acceptHandle}
                data-testid="RatingCard.Send"
              >
                {t('Отправить')}
              </Button>
            </HStack>
          </VStack>
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isModalOpen} lazy>
          <VStack gap={'32'}>
            {modalContent}
            <Button fullWidth onClick={acceptHandle}>
              {t('Отправить')}
            </Button>
          </VStack>
        </Drawer>
      </MobileView>
    </Card>
  );
});