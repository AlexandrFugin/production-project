import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Country } from '../../model/types/country';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const option = [
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Ukraine, content: Country.Ukraine },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
];

// eslint-disable-next-line react/display-name
export const CountrySelect = memo((props: CountrySelectProps) => {
  const { className, value, onChange, readonly } = props;
  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange],
  );

  const propsListBox = {
    onChange: onChangeHandler,
    value,
    defaultValue: t('Укажите страну'),
    label: t('Укажите страну'),
    items: option,
    readonly,
    direction: 'top right' as const,
  };

  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      on={<ListBox {...propsListBox} />}
      off={<ListBoxDeprecated {...propsListBox} />}
    />
  );
});
