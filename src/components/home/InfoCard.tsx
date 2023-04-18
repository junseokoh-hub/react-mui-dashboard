import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Text from "../atoms/Text";

interface InfoCardProps {
  card: {
    id: number;
    icon: React.ReactNode;
    bgColor: string;
    content: string;
    percentage: string;
    description: string;
  };
}

const InfoCard = ({ card }: InfoCardProps) => {
  return (
    <Grid
      item
      key={card.id}
      sm={12}
      md={6}
      lg={3}
      sx={{ display: "grid", placeItems: "center" }}
    >
      <Paper sx={{ width: "15rem", height: "10rem", position: "relative" }}>
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
  );
};

export default InfoCard;
