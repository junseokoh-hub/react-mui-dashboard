import MaterialButton, { ButtonProps } from "@mui/material/Button";

const Button = ({
  id,
  name,
  type,
  variant,
  children,
  color,
  fullWidth,
  sx,
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
    >
      {children}
    </MaterialButton>
  );
};

export default Button;
