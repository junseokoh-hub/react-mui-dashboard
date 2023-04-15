import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Button from "./atoms/Button";
import Avatar from "./atoms/Avatar";
import Text from "./atoms/Text";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ padding: "1rem", flexDirection: "row" }}>
      <Text
        sx={{ flexGrow: 1 }}
        variant="overline"
        align="inherit"
        gutterBottom={false}
      >
        Navbar
      </Text>
      <Avatar variant="circular" alt="admin" />
      <Button
        id="logout"
        name="logout"
        type="button"
        variant="text"
        sx={{ color: "#fff" }}
      >
        Log out
      </Button>
    </AppBar>
  );
};

export default Navbar;
