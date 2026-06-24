import {useTranslation} from "react-i18next";
import {Counter} from "entities/Counter";
import {Input} from "shared/ui/Input/Input";
import {Page} from "widgets/Page/Page";
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