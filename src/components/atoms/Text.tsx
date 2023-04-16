import Typography from "@mui/material/Typography";
import type { TypographyProps } from "@mui/material/Typography";

const Text = ({
  align,
  children,
  sx,
  variant,
  gutterBottom,
  color,
}: TypographyProps) => {
  return (
    <Typography
      align={align}
      sx={sx}
      variant={variant}
      gutterBottom={gutterBottom}
      color={color}
    >
      {children}
    </Typography>
  );
};

export default Text;
