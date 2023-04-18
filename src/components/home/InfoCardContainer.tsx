import Grid from "@mui/material/Grid";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import StoreIcon from "@mui/icons-material/Store";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import InfoCard from "./InfoCard";

const cards = [
  {
    id: 1,
    icon: <SubscriptionsIcon sx={{ fontSize: "2.5rem" }} />,
    bgColor: "secondary.main",
    content: "+1004",
    percentage: "+10%",
    description: "than last month",
  },
  {
    id: 2,
    icon: <StoreIcon sx={{ fontSize: "2.5rem" }} />,
    bgColor: "info.main",
    content: "$10,234",
    percentage: "+52%",
    description: "than last month",
  },
  {
    id: 3,
    icon: <PersonAddIcon sx={{ fontSize: "2.5rem" }} />,
    bgColor: "primary.main",
    content: "+31",
    percentage: "-21%",
    description: "than last week",
  },
  {
    id: 4,
    icon: <ErrorOutlineIcon sx={{ fontSize: "2.5rem" }} />,
    bgColor: "error.main",
    content: "21",
    percentage: "",
    description: "Just Updated",
  },
];

const InfoCardContainer = () => {
  return (
    <Grid container pt={3} spacing={2} rowSpacing={4}>
      {cards.map((card) => (
        <InfoCard card={card} />
      ))}
    </Grid>
  );
};

export default InfoCardContainer;
