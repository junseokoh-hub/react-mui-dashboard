import Box from "@mui/material/Box";
import InfoCardContainer from "../components/home/InfoCardContainer";
import SiteTable from "../components/home/SiteTable";
import ChartGridContainer from "../components/home/ChartGridContainer";

const HomePage = () => {
  return (
    <Box>
      <InfoCardContainer />
      <SiteTable />
      <ChartGridContainer />
    </Box>
  );
};

export default HomePage;
