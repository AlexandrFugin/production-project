import {useTranslation} from "react-i18next";
import {Counter} from "entities/Counter";
import {Input} from "shared/ui/Input/Input";
import {useState} from "react";

const MainPage = () => {
  const {t} = useTranslation();

  return (
    <div>
      {t('Главная страница')}
    </div>
  )
}

export default MainPage;