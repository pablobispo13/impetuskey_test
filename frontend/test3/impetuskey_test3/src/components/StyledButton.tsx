//Imports
import { Button } from "@mui/material/";

//Types
type Variant = "contained" | "outlined" | "text";
type Color =
  | "success"
  | "error"
  | "secondary"
  | "info"
  | "inherit"
  | "primary"
  | "warning";

function StyledButton({
  content,
  variant,
  disabled,
  color,
  onClick,
}: {
  content: string;
  variant?: Variant;
  color?: Color;
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <Button
      size="large"
      onClick={onClick}
      color={color}
      disabled={disabled}
      variant={variant}
      sx={{ width: "20%" }}
    >
      {content}
    </Button>
  );
}

export default StyledButton;
