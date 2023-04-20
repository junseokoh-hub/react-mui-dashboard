import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Button from "../atoms/Button";
import Avatar from "../atoms/Avatar";
import Text from "../atoms/Text";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - 100px)`, md: `calc(100% - 240px)` },
        padding: "1rem",
        flexDirection: "row",
      }}
    >
      <Text sx={{ flexGrow: 1, fontWeight: 700 }} variant="h6">
        DASHBOARD
      </Text>
      <Stack direction={"row"} alignItems={"center"} spacing={1}>
        <IconButton>
          <Badge max={99} badgeContent={3} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <IconButton onClick={() => navigate("/profile")}>
          <Avatar
            variant="circular"
            src="https://images.unsplash.com/photo-1522383225653-ed111181a951?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FrdXJhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="admin"
            sx={{ width: 30, height: 30, cursor: "pointer" }}
          />
        </IconButton>
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
