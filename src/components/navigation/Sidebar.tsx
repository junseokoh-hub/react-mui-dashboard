import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
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
import TimelineIcon from "@mui/icons-material/Timeline";
import PieChartIcon from "@mui/icons-material/PieChart";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

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
    label: "Profile",
    icon: <AccountCircleIcon />,
    route: "/profile",
  },
  {
    label: "Charts",
    icon: <AddchartIcon />,
    route: "/charts",
  },
];

const chartContents = [
  {
    label: "Bar Chart",
    icon: <BarChartIcon />,
    type: "bar",
  },
  {
    label: "Line Chart",
    icon: <TimelineIcon />,
    type: "line",
  },
  {
    label: "Pie Chart",
    icon: <PieChartIcon />,
    type: "pie",
  },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

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
        width: { sm: 100, md: 240 },
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: { sm: 100, md: 240 },
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
              <ListItemText
                primary={content.label}
                sx={{ display: { sm: "none", md: "flex" } }}
              />
              {content.label === "Charts" ? (
                <ListItemIcon
                  sx={{ pl: 3, display: { sm: "none", md: "block" } }}
                >
                  {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </ListItemIcon>
              ) : null}
            </ListItemButton>
          </ListItem>
        ))}
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List sx={{ paddingLeft: { sm: 0, md: 3 } }} disablePadding>
            {chartContents.map((chartContent) => (
              <ListItem key={chartContent.label}>
                <ListItemButton
                  onClick={() => navigate(`/charts?type=${chartContent.type}`)}
                >
                  <ListItemIcon>{chartContent.icon}</ListItemIcon>
                  <ListItemText
                    primary={chartContent.label}
                    sx={{ display: { sm: "none", md: "flex" } }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
};

export default Sidebar;
