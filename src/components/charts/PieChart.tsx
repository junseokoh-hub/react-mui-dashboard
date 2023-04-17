import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import PRODUCTS from "../../products.json";
import { chartOptions } from "../../libs/chart-options";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = chartOptions(`Sales of the Month`);

export const data = {
  labels: PRODUCTS.map((product) => product.product),
  datasets: [
    {
      label: `Best Sales of the Month`,
      data: [34, 192, 120, 42, 54, 29, 96, 203, 129, 54, 70, 198],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 99, 132, 0.5)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(53, 162, 235, 0.5)",
      ],
    },
  ],
};

const PieChart = () => {
  return <Pie options={options} data={data} />;
};

export default PieChart;
