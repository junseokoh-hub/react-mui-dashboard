import React from "react";

interface ChartContainerProps {
  children: React.ReactNode;
}

const ChartContainer = ({ children }: ChartContainerProps) => {
  return (
    <div
      style={{
        width: "1200px",
        height: "600px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
};

export default ChartContainer;
