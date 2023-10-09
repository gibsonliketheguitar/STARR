import { useNavigate } from "react-router-dom";
import { z } from "zod";

import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Button from "@common/button";
import Form from "@common/form";
import { useUserStore } from "@pages/store/userStore";

const LoginSchema = z.object({
  username: z.string().min(6).max(18) || z.string().email(),
  password: z.string().min(6).max(16),
});

export function Login() {
  const navigate = useNavigate();
  const setAuth = useUserStore((state: any) => state.setAuth);
  const setToken = useUserStore((state: any) => state.setToken);

  const mockLogin = async (fail = false) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (fail) reject(false);
        else {
          resolve(true);
        }
      }, 5000);
    });
  };

  const handleLogin = async (data: any) => {
    const isValidLogin = await LoginSchema.parse(data);
    const res = await mockLogin();
    if (isValidLogin && !!res) {
      setAuth(true);
      setToken("Hello World");
      navigate("/dashboard");
    }
  };

  const Layout = styled(Box)(({ theme }: any) => ({
    display: "grid",
    color: theme.primary,
    backgroundColor: theme.palette.neutral[100],
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    height: theme.spacing(40),
    width: theme.spacing(40),
  }));

  return (
    <Box display="flex" justifyContent="center" alignItems="center" sx={{ width: "100vw", height: "100vh" }}>
      <Form onSubmit={handleLogin} schema={LoginSchema}>
        <Layout>
          <TextField
            name="username"
            label="User Name"
            variant="outlined"
            sx={{
              "& label.Mui-focused": {
                color: "green",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "green",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "red",
                },
                "&:hover fieldset": {
                  borderColor: "yellow",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "green",
                },
              },
            }}
          />
          <TextField name="password" label="Password" variant="outlined" />
        </Layout>
        <Button type="submit" variant="contained" fullWidth>
          Submit
        </Button>
      </Form>
    </Box>
  );
}
