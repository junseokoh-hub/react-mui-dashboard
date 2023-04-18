import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import StoreIcon from "@mui/icons-material/Store";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Text from "../components/atoms/Text";

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

const HomePage = () => {
  return (
    <Box>
      <Grid container pt={3} spacing={2} rowSpacing={4}>
        {cards.map((card) => (
          <Grid
            item
            key={card.id}
            sm={6}
            md={6}
            lg={3}
            sx={{ display: "grid", placeItems: "center" }}
          >
            <Paper
              sx={{ width: "15rem", height: "10rem", position: "relative" }}
            >
              <Card
                sx={{
                  width: "55%",
                  height: "60%",
                  position: "absolute",
                  top: -20,
                  left: "23%",
                  backgroundColor: card.bgColor,
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                  }}
                >
                  {card.icon}
                  {card.content}
                </CardContent>
              </Card>
              <Divider flexItem sx={{ position: "relative", top: 100 }} />
              <Stack
                direction="row"
                position="absolute"
                bottom="10%"
                pl={2}
                spacing={1}
              >
                <Text color={card.percentage.includes("+") ? "green" : "red"}>
                  {card.percentage}
                </Text>
                <Text color="rgba(0,0,0,0.7)">{card.description}</Text>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomePage;
