import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { chartLabels } from "../../libs/chart-labels";
import { chartOptions } from "../../libs/chart-options";
import { interactionOption } from "../../libs/chart-interaction-option";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
);

export const options = chartOptions(`Monthly Subscribers`, {
  ...interactionOption,
  scales: {
    line: {
      type: "linear" as const,
      position: "left" as const,
      title: {
        display: true,
        text: "Subscribers",
      },
    },
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
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      borderColor: "rgba(255, 99, 132, 0.5)",
      cubicInterpolationMode: "monotone",
    },
  ],
};

const LineChart = () => {
  return <Line options={options} data={data} />;
};

export default LineChart;
