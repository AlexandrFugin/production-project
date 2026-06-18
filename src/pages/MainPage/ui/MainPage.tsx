import {useTranslation} from "react-i18next";
import {Counter} from "entities/Counter";
import {Input} from "shared/ui/Input/Input";
import {useState} from "react";
import {Page} from "widgets/Page/Page";
import {HStack} from "shared/ui/Stack";
import {ListBox} from "shared/ui/ListBox/ListBox";

const MainPage = () => {
  const {t} = useTranslation();

  return (
    <Page>
      {t('Главная страница')}
    </Page>
  )
}

export default MainPage;