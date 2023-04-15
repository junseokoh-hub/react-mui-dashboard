import Typography from "@mui/material/Typography";
import type { TypographyProps } from "@mui/material/Typography";

const Text = ({
  align,
  children,
  sx,
  variant,
  gutterBottom,
}: TypographyProps) => {
  return (
    <Typography
      align={align}
      sx={sx}
      variant={variant}
      gutterBottom={gutterBottom}
    >
      {children}
    </Typography>
  );
};

export default Text;
