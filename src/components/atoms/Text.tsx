import Typography from "@mui/material/Typography";
import type { TypographyProps } from "@mui/material/Typography";

const Text = ({
  align,
  children,
  sx,
  variant,
  gutterBottom,
  color,
  onClick,
}: TypographyProps) => {
  return (
    <Typography
      align={align}
      sx={sx}
      variant={variant}
      gutterBottom={gutterBottom}
      color={color}
      onClick={onClick}
    >
      {children}
    </Typography>
  );
};

export default Text;
