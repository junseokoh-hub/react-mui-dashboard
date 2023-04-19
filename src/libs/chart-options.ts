import { ChartTypeRegistry, CoreChartOptions } from "chart.js";
import { DeepPartial } from "chart.js/dist/types/utils";

export const chartOptions = (
  text: string,
  options?: any,
): DeepPartial<CoreChartOptions<keyof ChartTypeRegistry>> => {
  return {
    responsive: true,
    maintainAspectRatio: false,
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
