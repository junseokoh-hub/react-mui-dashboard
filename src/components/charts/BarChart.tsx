import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineController,
  BarController,
  ChartData,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { chartLabels } from "../../libs/chart-labels";
import { chartOptions } from "../../libs/chart-options";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineController,
  BarController,
);

export const options = chartOptions(`Monthly Sales & Rate`, {
  scales: {
    bar: {
      type: "linear" as const,
      position: "left" as const,
      title: {
        display: true,
        text: "Sales",
      },
      ticks: {
        stepSize: 500,
      },
    },
    line: {
      type: "linear" as const,
      position: "right" as const,
      title: {
        display: true,
        text: "Rate",
      },
      ticks: {
        stepSize: 30,
      },
      grid: {
        drawOnChartArea: false,
      },
    },
  },
});

const dataset = [
  1500, 2123, 956, 798, 2300, 3198, 2690, 2780, 767, 1004, 1843, 1560,
];

const rate = () => {
  const array = [];
  for (let i = 0; i < dataset.length; i++) {
    array.push(Math.ceil(((dataset[i + 1] - dataset[i]) / dataset[i]) * 100));
  }
  return array;
};

export const data: ChartData<"bar" | "line"> = {
  labels: chartLabels,
  datasets: [
    {
      type: "bar" as const,
      label: "Monthly Sales",
      yAxisID: "bar",
      data: [
        1500, 2123, 956, 798, 2300, 3198, 2690, 2780, 767, 1004, 1843, 1560,
      ],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      type: "line" as const,
      label: "Monthly Sales Rate(%)",
      yAxisID: "line",
      data: rate(),
      backgroundColor: "rgba(54, 13, 190, 0.5)",
      borderColor: "rgba(54, 13, 190, 0.5)",
    },
  ],
};

const BarChart = () => {
  return <Chart type="bar" options={options} data={data} />;
};

export default BarChart;
