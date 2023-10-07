import { styled } from "@mui/material";
import Button from "@mui/material/Button";

export default styled(Button)(({ theme }: any) => ({
  color: theme.primary,
  backgroundColor: theme.palette.primary[500],
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  height: theme.spacing(8),
  width: theme.spacing(20),
}));
