import React from "react";

interface ChartContainerProps {
  children: React.ReactNode;
}

const ChartContainer = ({ children }: ChartContainerProps) => {
  return (
    <div style={{ width: "1000px", height: "50vh", position: "relative" }}>
      {children}
    </div>
  );
};

export default ChartContainer;
