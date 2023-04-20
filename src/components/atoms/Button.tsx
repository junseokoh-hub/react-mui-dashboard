import MaterialButton from "@mui/material/Button";
import type { ButtonProps } from "@mui/material/Button";

const Button = ({
  id,
  name,
  type,
  variant,
  children,
  color,
  fullWidth,
  sx,
  onClick,
}: ButtonProps) => {
  return (
    <MaterialButton
      id={id}
      name={name}
      type={type}
      variant={variant}
      color={color}
      fullWidth={fullWidth}
      sx={sx}
      onClick={onClick}
    >
      {children}
    </MaterialButton>
  );
};

export default Button;
