import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

const ProfileInputsContainer = () => {
  return (
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
  );
};

export default ProfileInputsContainer;
