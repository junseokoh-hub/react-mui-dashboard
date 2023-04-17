import { ChartOptions, ChartTypeRegistry } from "chart.js";

export const chartOptions = (
  text: string,
  options?: any,
): ChartOptions<keyof ChartTypeRegistry> => {
  return {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    ...options,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text,
      },
    },
  };
};
