import Grid from "@mui/material/Grid";

interface ChartGridContainerProps {
  children: React.ReactNode;
}

const ChartGridContainer = ({ children }: ChartGridContainerProps) => {
  return (
    <Grid container sx={{ mt: 2, position: "relative", height: "500px" }}>
      {children}
    </Grid>
  );
};

export default ChartGridContainer;
