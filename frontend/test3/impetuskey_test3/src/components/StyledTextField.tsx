//Imports
import { TextField } from "@mui/material/";
import React, { useEffect } from "react";

//Types
type Variant = "filled" | "outlined" | "standard";
type Color =
  | "success"
  | "error"
  | "secondary"
  | "info"
  | "inherit"
  | "primary"
  | "warning";

function StyledTextField({
  label,
  placeholder,
  variant,
  disabled,
  error,
  onChange,
  cleanerInput,
}: {
  label?: string;
  placeholder: string;
  variant?: Variant;
  color?: Color;
  disabled?: boolean;
  error?: boolean;
  cleanerInput: boolean;
  onChange: (value: string) => void;
}) {
  const [value, setValue] = React.useState("");
  useEffect(() => {
    setValue("");
  }, [cleanerInput]);

  return (
    <TextField
      label={label}
      placeholder={placeholder}
      disabled={disabled}
      error={error}
      variant={variant}
      value={value}
      sx={{ width: "80%" }}
      onChange={(e) => {
        setValue(e.target.value);
        onChange(e.target.value);
      }}
    />
  );
}

export default StyledTextField;
