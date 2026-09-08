import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Code.module.scss';
import { memo, useCallback } from 'react';
import { Button, ButtonTheme } from '../../deprecated/Button/Button';
import CopyIcon from '@/shared/assets/icons/copy-20-20.svg';
import CopyIconNew from '@/shared/assets/icons/copy.svg';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '../Icon';

interface CodeProps {
  className?: string;
  text: string;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
// eslint-disable-next-line react/display-name
export const Code = memo((props: CodeProps) => {
  const { className, text } = props;
  const { t } = useTranslation();

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  // @ts-ignore
  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      on={
        <pre className={classNames(cls.CodeRedesigned, {}, [className])}>
          <Icon
            clickable
            onClick={onCopy}
            className={cls.copyBtn}
            Svg={CopyIconNew}
          >
            <CopyIcon className={cls.copyIcon} />
          </Icon>
          <code>{text}</code>
        </pre>
      }
      off={
        <pre className={classNames(cls.Code, {}, [className])}>
          <Button
            onClick={onCopy}
            className={cls.copyBtn}
            theme={ButtonTheme.CLEAR}
          >
            <CopyIcon className={cls.copyIcon} />
          </Button>
          <code>{text}</code>
        </pre>
      }
    />
  );
});
