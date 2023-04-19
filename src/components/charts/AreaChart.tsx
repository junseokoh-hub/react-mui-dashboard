import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ChartData,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { chartOptions } from "../../libs/chart-options";
import { chartLabels } from "../../libs/chart-labels";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
);

const options = chartOptions(`Monthly Subscribers`, {
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
});

export const data: ChartData<"line"> = {
  labels: chartLabels,
  datasets: [
    {
      type: "line" as const,
      label: "Monthly Subscribers",
      yAxisID: "line",
      data: [142, 121, 98, 210, 197, 156, 310, 263, 219, 189, 301, 304],
      backgroundColor: "rgba(6, 150, 73, 0.5)",
      borderColor: "rgba(6, 150, 73, 0.5)",
      fill: true,
      cubicInterpolationMode: "monotone",
    },
  ],
};

const AreaChart = () => {
  return <Line data={data} options={options} />;
};

export default AreaChart;
