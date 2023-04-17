import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Input from "../components/atoms/Input";
import Button from "../components/atoms/Button";

const AdminPage = () => {
  return (
    <Box
      component={Paper}
      height={"100%"}
      display="flex"
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        component="form"
        p={2}
        width="50rem"
        height="35rem"
        display="flex"
        flexDirection="column"
        border="1px solid black"
      >
        <Grid container spacing={2}>
          <Grid item lg={5}>
            <Input
              name="password"
              type="password"
              variant="outlined"
              label="Password"
            />
          </Grid>
          <Grid item lg={5}>
            <Input
              name="new-password"
              type="password"
              variant="outlined"
              label="New Password"
            />
          </Grid>
          <Grid item xs={4} lg={4}>
            <Input name="city" type="text" variant="outlined" label="City" />
          </Grid>
          <Grid item xs={4} lg={4}>
            <Input
              name="personal"
              type="text"
              variant="outlined"
              label="Personal Information"
            />
          </Grid>
          <Grid item xs={4} lg={4}>
            <Button
              name="personal"
              type="submit"
              variant="contained"
              sx={{ width: "50% ", height: "100%" }}
            >
              Save
            </Button>
          </Grid>
          <Grid item xs={4} lg={6}>
            <textarea style={{ resize: "none" }} rows={27} cols={104} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AdminPage;
