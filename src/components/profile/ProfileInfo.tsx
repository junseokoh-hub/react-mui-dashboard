import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import Divider from "@mui/material/Divider";
import LinearProgress from "@mui/material/LinearProgress";
import Text from "../atoms/Text";

const ProfileInfo = () => {
  return (
    <Box
      component={Paper}
      width={{ sm: "60%", md: "80%", lg: "100%" }}
      display="flex"
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack direction="column" spacing={2} alignItems={"center"}>
        <img
          src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="cat"
          width={200}
          height={200}
          style={{ borderRadius: "50%" }}
        />
        <Text>{localStorage.getItem("auth")}</Text>
        <Divider flexItem />
        <Text>Work Load</Text>
        <Text variant="caption">72%</Text>
        <LinearProgress
          variant="determinate"
          value={72}
          sx={{ color: "primary.dark", width: "90%" }}
        />
        <Divider flexItem />
        <InputLabel>Description</InputLabel>
        <Text paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
          veritatis excepturi accusantium magni id maxime ullam vitae libero
          tenetur distinctio. Unde officiis praesentium iure quidem quae facilis
          quam, facere nostrum?
        </Text>
      </Stack>
    </Box>
  );
};

export default ProfileInfo;
