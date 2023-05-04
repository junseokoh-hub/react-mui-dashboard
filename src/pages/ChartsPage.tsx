import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ChartContainer from "../components/charts/ChartContainer";
import BarChart from "../components/charts/BarChart";
import LineChart from "../components/charts/LineChart";
import PieChart from "../components/charts/PieChart";

const ChartsPage = () => {
  const navigate = useNavigate();
  const searchParmas = new URLSearchParams(window.location.search.slice(1));
  const type = searchParmas.get("type");

  useEffect(() => {
    if (!type) {
      navigate("/charts?type=bar");
    }
  }, []);

  return (
    <ChartContainer
      sx={{
        mt: 2,
        width: { xs: "450px", sm: "500px", md: "700px", lg: "1200px" },
        height: "600px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {type === "bar" ? <BarChart /> : null}
      {type === "line" ? <LineChart /> : null}
      {type === "pie" ? <PieChart /> : null}
    </ChartContainer>
  );
};

export default ChartsPage;
