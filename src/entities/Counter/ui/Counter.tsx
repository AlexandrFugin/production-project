import { Button } from '@/shared/ui/Button';
import { useDispatch } from 'react-redux';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useTranslation } from 'react-i18next';
import { useCounterActions } from '../model/slice/counterSlice';

interface CounterProps {
  className?: string;
}

export const Counter = () => {
  const dispatch = useDispatch();

  const counterValue = useCounterValue();
  const { t } = useTranslation();
  const { decrement, increment, add } = useCounterActions();

  const handleInc = () => {
    increment();
  };

  const handleDec = () => {
    decrement();
  };

  const handleAddFive = () => {
    add(5);
  };

  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button onClick={handleInc} data-testid="increment-btn">
        {t('increment')}
      </Button>
      <Button onClick={handleDec} data-testid="decrement-btn">
        {t('decrement')}
      </Button>
      <Button onClick={handleAddFive} data-testid="add5-btn">
        {t('add5')}
      </Button>
    </div>
  );
};
