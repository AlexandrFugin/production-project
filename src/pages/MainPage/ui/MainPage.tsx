import {useTranslation} from "react-i18next";
import {Counter} from "entities/Counter";
import {Input} from "shared/ui/Input/Input";
import {useState} from "react";
import {Page} from "shared/ui/Page/Page";

const MainPage = () => {
  const {t} = useTranslation();

  return (
    <Page>
      {t('Главная страница')}
    </Page>
  )
}

export default MainPage;