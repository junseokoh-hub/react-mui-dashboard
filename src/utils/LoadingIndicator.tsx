import LinearProgress from "@mui/material/LinearProgress";

const LoadingIndicator = () => {
  return (
    <LinearProgress sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} />
  );
};

export default LoadingIndicator;
