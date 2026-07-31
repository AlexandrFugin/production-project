import {classNames} from "@/shared/lib/classNames/classNames";
import {Page} from "@/widgets/Page";
import {VStack} from "@/shared/ui/Stack";
import {EditableProfileCard} from "@/features/editableProfileCard";
import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
// eslint-disable-next-line alexandr-plugin/public-api-imports
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