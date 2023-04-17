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
    <ChartContainer>
      {type === "bar" && <BarChart />}
      {type === "line" && <LineChart />}
      {type === "pie" && <PieChart />}
    </ChartContainer>
  );
};

export default ChartsPage;
