import { styled } from "@mui/material";
import Button, { ButtonProps } from "@mui/material/Button";

export default styled(Button)<ButtonProps>(({ theme, fullWidth }: any) => ({
  color: theme.primary,
  backgroundColor: theme.palette.primary[500],
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  height: theme.spacing(8),
  width: fullWidth ? '100%' : theme.spacing(20),
  '&:hover': {
    background: theme.palette.primary[800],
  },
}));
