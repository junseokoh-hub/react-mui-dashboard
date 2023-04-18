import TextField from "@mui/material/TextField";
import type { TextFieldProps } from "@mui/material/TextField";

const Input = ({
  id,
  label,
  name,
  variant,
  type,
  sx,
  fullWidth,
}: TextFieldProps) => {
  return (
    <TextField
      id={id}
      label={label}
      name={name}
      variant={variant}
      type={type}
      sx={sx}
      fullWidth={fullWidth}
    />
  );
};

export default Input;
