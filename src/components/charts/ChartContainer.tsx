import Box from "@mui/material/Box";
import type { BoxProps } from "@mui/material/Box";

const ChartContainer = ({ children, sx }: BoxProps) => {
  return <Box sx={sx}>{children}</Box>;
};

export default ChartContainer;
