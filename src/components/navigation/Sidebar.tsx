import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import AddchartIcon from "@mui/icons-material/Addchart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BarChartIcon from "@mui/icons-material/BarChart";

interface ContentsType {
  label: string;
  route: string;
}

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
    icon: <ShoppingBasketIcon />,
    route: "/products",
  },
  {
    label: "Admin",
    icon: <AccountCircleIcon />,
    route: "/admin",
  },
  {
    label: "Charts",
    icon: <AddchartIcon />,
    route: "/charts",
  },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleClick = (content: ContentsType) => {
    if (content.label === "Charts") {
      setOpen((prev) => !prev);
    } else {
      navigate(content.route);
    }
  };

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
            <ListItemButton onClick={() => handleClick(content)}>
              <ListItemIcon>{content.icon}</ListItemIcon>
              <ListItemText primary={content.label} />
            </ListItemButton>
          </ListItem>
        ))}
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List sx={{ paddingLeft: 3 }} disablePadding>
            <ListItem>
              <ListItemIcon>
                <BarChartIcon />
              </ListItemIcon>
              <ListItemText primary="Bar Chart" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
};

export default Sidebar;
