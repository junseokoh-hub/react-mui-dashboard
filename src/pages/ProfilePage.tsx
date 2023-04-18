import Stack from "@mui/material/Stack";
import ProfileInfo from "../components/profile/ProfileInfo";
import ProfileInputsContainer from "../components/profile/ProfileInputsContainer";

const ProfilePage = () => {
  return (
    <Stack
      height={"93%"}
      justifyContent={"space-around"}
      direction="row"
      spacing={2}
    >
      <ProfileInfo />
      <ProfileInputsContainer />
    </Stack>
  );
};

export default ProfilePage;
