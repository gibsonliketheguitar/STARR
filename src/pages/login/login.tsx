import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Button from "@common/button";
import Form from "@common/form";

export function Login() {

  const handleLogin = (data: any) => {
    console.log(data)
  }

  const Layout = styled(Box)(({ theme }: any) => ({
    display: 'grid',
    color: theme.primary,
    backgroundColor: theme.palette.neutral[100],
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    height: theme.spacing(25),
    width: theme.spacing(40),
  }));

  return (
    <Box display='flex' justifyContent='center' alignItems='center' sx={{ width: '100vw', height: '100vh' }}>
      <Form onSubmit={handleLogin}>
        <Layout>
          <TextField
            name='username'
            label="User Name"
            variant="outlined"
          />
          <TextField
            name='password'
            label="Password"
            variant="outlined"
          />
        </Layout>
        <Button type='submit' variant="contained" fullWidth >Submit</Button>
      </Form>
    </Box>
  )
}
