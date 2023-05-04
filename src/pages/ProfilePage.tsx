import Stack from "@mui/material/Stack";
import ProfileInfo from "../components/profile/ProfileInfo";
import ProfileInputsContainer from "../components/profile/ProfileInputsContainer";

const ProfilePage = () => {
  return (
    <Stack
      height={"100%"}
      justifyContent={"space-around"}
      direction={{ sm: "column", lg: "row" }}
      spacing={2}
      mt={{ md: 1, lg: 0 }}
    >
      <ProfileInfo />
      <ProfileInputsContainer />
    </Stack>
  );
};

export default ProfilePage;
