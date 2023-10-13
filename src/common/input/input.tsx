import { TextField, styled } from "@mui/material";

export const MyInput = styled(TextField)(({ theme }: any) => ({
  "& label.Mui-focused": {
    color: theme.palette.secondary[200],
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: theme.palette.secondary[200],
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.primary[600],
    },
    "&:hover fieldset": {
      borderColor: theme.palette.primary[400],
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.secondary[400],
    },
  },
}));
