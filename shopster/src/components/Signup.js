import { Box, Button, Container, CssBaseline, Grid, Link, TextField, Typography } from "@mui/material";


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
          <Typography component="h1" variant="h2">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Username"
              name="email"
              autoComplete="email"
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
              autoComplete="new-password"
            />
            <Typography>
              <Link href="#" variant="body2">
                  {"Already have an accoung? Sign In here"}
              </Link>
            </Typography>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 2, float: 'right' }}
            >
              Sign Up
            </Button>

          </Box>
        </Box>
      </Container>
  )
}