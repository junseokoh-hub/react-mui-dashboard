import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AddchartIcon from "@mui/icons-material/Addchart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

const contents = [
  {
    label: "Home",
    icon: <HomeIcon />,
    route: "/",
  },
  {
    label: "Customers",
    icon: <GroupsIcon />,
    route: "/customers",
  },
  {
    label: "Products",
    icon: <DirectionsCarIcon />,
    route: "/products",
  },
  {
    label: "Charts",
    icon: <AddchartIcon />,
    route: "/charts",
  },
  {
    label: "Admin",
    icon: <AccountCircleIcon />,
    route: "/admin",
  },
];

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Drawer
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List>
        {contents.map((content) => (
          <ListItem key={content.label}>
            <ListItemButton onClick={() => navigate(content.route)}>
              <ListItemIcon>{content.icon}</ListItemIcon>
              <ListItemText primary={content.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
