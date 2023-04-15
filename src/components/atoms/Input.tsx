import TextField, { TextFieldProps } from "@mui/material/TextField";

const Input = ({ id, label, name, variant, type, sx }: TextFieldProps) => {
  return (
    <TextField
      id={id}
      label={label}
      name={name}
      variant={variant}
      type={type}
      sx={sx}
    />
  );
};

export default Input;
