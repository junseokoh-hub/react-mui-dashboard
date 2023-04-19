import Grid from "@mui/material/Grid";
import AreaChart from "../charts/AreaChart";
import DoughnutChart from "../charts/DoughnutChart";
import ChartGridItem from "./ChartGridItem";

const charts = [
  { id: 1, chart: <AreaChart /> },
  { id: 2, chart: <DoughnutChart /> },
];

const ChartGridContainer = () => {
  return (
    <Grid container sx={{ mt: 2, position: "relative", height: "500px" }}>
      {charts.map((chart) => (
        <ChartGridItem key={chart.id} chart={chart.chart} />
      ))}
    </Grid>
  );
};

export default ChartGridContainer;
