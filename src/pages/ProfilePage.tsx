import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import Divider from "@mui/material/Divider";
import LinearProgress from "@mui/material/LinearProgress";
import Input from "../components/atoms/Input";
import Button from "../components/atoms/Button";
import Text from "../components/atoms/Text";

const ProfilePage = () => {
  return (
    <Stack
      height={"93%"}
      justifyContent={"space-around"}
      direction="row"
      spacing={2}
    >
      <Box
        component={Paper}
        width={"100%"}
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus veritatis excepturi accusantium magni id maxime ullam
            vitae libero tenetur distinctio. Unde officiis praesentium iure
            quidem quae facilis quam, facere nostrum?
          </Text>
        </Stack>
      </Box>
      <Box
        component={Paper}
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box p={1} width="50rem" display="flex" flexDirection="column">
          <Grid container spacing={2}>
            <Grid item lg={6}>
              <Input
                name="first_name"
                type="text"
                variant="outlined"
                label="First Name"
                fullWidth={true}
              />
            </Grid>
            <Grid item lg={6}>
              <Input
                name="last_name"
                type="text"
                variant="outlined"
                label="Last Name"
                fullWidth={true}
              />
            </Grid>
            <Grid item lg={6}>
              <Input
                name="email"
                type="email"
                variant="outlined"
                label="Email"
                fullWidth={true}
              />
            </Grid>
            <Grid item lg={6}>
              <Input
                name="password"
                type="password"
                variant="outlined"
                label="Password"
                fullWidth={true}
              />
            </Grid>
            <Grid item lg={12}>
              <Input
                name="address"
                type="text"
                variant="outlined"
                label="Address"
                fullWidth={true}
              />
            </Grid>
            <Grid item lg={6}>
              <Input
                name="city"
                type="text"
                variant="outlined"
                label="City"
                fullWidth={true}
              />
            </Grid>
            <Grid item lg={4}>
              <Input
                name="state"
                type="text"
                variant="outlined"
                label="State"
                fullWidth={true}
              />
            </Grid>
            <Grid item lg={2}>
              <Input name="zip" type="text" variant="outlined" label="Zip" />
            </Grid>
            <Grid item lg={12}>
              <InputLabel htmlFor="description">Description</InputLabel>
              <textarea
                name="description"
                id="description"
                cols={104}
                rows={15}
                style={{ resize: "none" }}
              ></textarea>
            </Grid>
            <Grid
              item
              xs={4}
              lg={12}
              sx={{ display: "grid", placeItems: "center" }}
            >
              <Button
                name="personal"
                type="submit"
                variant="contained"
                sx={{ width: "50% ", height: "100%" }}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Stack>
  );
};

export default ProfilePage;
