import { Box, Button, Container, CssBaseline, TextField, Typography, Alert } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import {useUserStore} from "../stores/UserStore";


export default function SignIn() {

  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("")
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userContext, setUserContext] = useUserStore();

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const genericErrorMessage = "Something went wrong! Please try again later.";

    fetch(process.env.REACT_APP_API_ENDPOINT + "users/login", {
      method: "POST",
      credetials: "include",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({username, password})
    })
      .then(async response => {
        setIsSubmitting(false);
        if (!response.ok) {
          if (response.status === 400) {
            setError("Please fill all the fields correctly!");
          } else if (response.status === 401) {
            setError("Invalid email and password combination.");
          } else {
            setError(genericErrorMessage);
          }
        } else {
          const data = await response.json();
          setUserContext.setToken(data.token);
          setUserContext.setUsername(username);
          navigate("/Home")
        }
      })
      .catch(error => {
        setIsSubmitting(false);
        setError(genericErrorMessage);
        console.log(error);
    })
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
              value={username}
              onChange={e => setUsername(e.target.value)}
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
              value={password}
              onChange={e => setPassword(e.target.value)}
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
              disabled={isSubmitting}
            >
            {isSubmitting? "Signing In" : "Sign In"}
            </Button>
          </Box>
        </Box>
      </Container>
  )
}
