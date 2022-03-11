import { Box, Button, Container, CssBaseline, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";


export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  return(
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h2">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="Username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Typography>
              <Link to={{pathname: "/signup"}}>
                  Don't have an account? Sign Up
              </Link>
            </Typography>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 2, float: 'right' }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
  )
}