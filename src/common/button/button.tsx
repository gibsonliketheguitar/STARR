import { styled } from "@mui/material";
import Button from "@mui/material/Button";

export default styled(Button)(({ theme }: any) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: '#7E0482',
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  height: theme.spacing(8),
  width: theme.spacing(20),
}));
