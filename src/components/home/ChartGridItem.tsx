import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

interface ChartGridItemProps {
  chart: JSX.Element;
}

const ChartGridItem = ({ chart }: ChartGridItemProps) => {
  return (
    <Grid item xs={12} sm={12} md={12} lg={6} sx={{ mb: { xs: 2, lg: 0 } }}>
      <Paper
        sx={{
          margin: "0 auto",
          width: { sm: "90%", lg: "90%" },
          height: "100%",
        }}
      >
        {chart}
      </Paper>
    </Grid>
  );
};

export default ChartGridItem;
