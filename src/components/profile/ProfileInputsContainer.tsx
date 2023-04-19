import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import styled from "@emotion/styled";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

const StyledTextarea = styled.textarea`
  width: 100%;
  resize: none;
`;

const ProfileInputsContainer = () => {
  return (
    <Box
      component={Paper}
      width={{ sm: "60%", md: "80%", lg: "100%" }}
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
          <Grid item sm={12} md={12}>
            <InputLabel htmlFor="description">Description</InputLabel>
            <StyledTextarea name="description" id="description" rows={15} />
          </Grid>
          <Grid
            item
            sm={12}
            md={12}
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
