import Box from "@mui/material/Box";
import InfoCardContainer from "../components/home/InfoCardContainer";
import SiteTable from "../components/home/SiteTable";
import ChartGridContainer from "../components/home/ChartGridContainer";
import AreaChart from "../components/charts/AreaChart";
import DoughnutChart from "../components/charts/DoughnutChart";
import ChartGridItem from "../components/home/ChartGridItem";

const HomePage = () => {
  return (
    <Box>
      <InfoCardContainer />
      <SiteTable />
      <ChartGridContainer>
        <ChartGridItem>
          <AreaChart />
        </ChartGridItem>
        <ChartGridItem>
          <DoughnutChart />
        </ChartGridItem>
      </ChartGridContainer>
    </Box>
  );
};

export default HomePage;
