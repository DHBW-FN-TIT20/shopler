import { Box, Button, Container, CssBaseline, TextField, Typography, Alert } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useUserStore } from "../stores/UserStore";

export default function SignUp() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userStore, userAction] = useUserStore();

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const genericErrorMessage = "Etwas ist schief gegangen, versuchen Sie es erneut."

    fetch(process.env.REACT_APP_API_ENDPOINT + "users/signup", {
      method: "POST",
      credentials: "include",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({username, password})
    })
    .then(async response => {
      setIsSubmitting(false);
      if (!response.ok) {
        if (response.status === 400) {
          setError("Bitte füllen Sie alle Felder korrekt aus");
        } else if (response.status === 401) {
          setError("Ungültige E-Mail und Passwort kombination");
        } else if (response.status === 500) {
          console.log(response);
          const data = await response.json();
          if (data.message) setError(data.message || genericErrorMessage);
        } else {
          setError(genericErrorMessage);
        }
      } else {
        const data = await response.json();
        userAction.setToken(data.token);
        userAction.setUsername(username);
        navigate("/home");
      }
    })
    .catch(error => {
      setIsSubmitting(false);
      setError(genericErrorMessage);
    });
  }

  return(
      <Container component="main" maxWidth="xs">
        {error&&<Alert severity="error">{error}</Alert>}
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
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Benutzername"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Passwort"
              type="password"
              id="password"
              autoComplete="new-password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <Typography>
              <Link to={{pathname: "/signin"}} variant="body2">
                  Sie haben bereits einen Account?
              </Link>
            </Typography>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 2, float: 'right' }}
              disabled={isSubmitting}
            >
            {isSubmitting? "bitte warten" : "Registrieren"}
            </Button>
          </Box>
        </Box>
      </Container>
  )
}
