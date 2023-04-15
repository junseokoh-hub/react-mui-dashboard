import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Button from "./atoms/Button";
import Avatar from "./atoms/Avatar";
import Text from "./atoms/Text";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - 240px)`,
        padding: "1rem",
        flexDirection: "row",
      }}
    >
      <Text
        sx={{ flexGrow: 1 }}
        variant="overline"
        align="inherit"
        gutterBottom={false}
      >
        Navbar
      </Text>
      <Stack direction={"row"} alignItems={"center"} spacing={1}>
        <IconButton>
          <Badge max={99} badgeContent={3} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <Avatar variant="circular" alt="admin" sx={{ width: 30, height: 30 }} />
        <Button
          id="logout"
          name="logout"
          type="button"
          variant="text"
          sx={{ color: "#fff" }}
        >
          Log out
        </Button>
      </Stack>
    </AppBar>
  );
};

export default Navbar;
