import {classNames} from "@/shared/lib/classNames/classNames";
import {DynamicModuleLoader} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import {Currency} from "@/entities/Currency";
import {Country} from "@/entities/Country";
import {Text} from "@/shared/ui/Text/Text";
import {useInitialEffect} from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import {Page} from "@/widgets/Page/Page";
import {VStack} from "@/shared/ui/Stack/VStack/VStack";
import {EditableProfileCard} from "@/features/editableProfileCard";
import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import ProfileRating from "@/features/profileRating/ui/ProfileRating/ProfileRating";

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({className}: ProfilePageProps) => {
  const {t} = useTranslation('profile');
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return null;
  }

  return (
    <Page className={classNames('', {}, [className])}>
      <VStack max gap='16'>
        <EditableProfileCard id={id} />
        <ProfileRating profileId={id} />
      </VStack>
    </Page>
  );
};

export default ProfilePage;