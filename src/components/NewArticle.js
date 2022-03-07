import { Add } from "@mui/icons-material";
import { Button, Container, CssBaseline, Grid, TextField, Typography } from "@mui/material";

export default function NewArticle() {
  return(
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Typography variant="h2" component="h1">
        Neuer Artikel
      </Typography>
      <Grid container>
        <Grid item xs={5}>
          <img src="https://images.hdqwalls.com/wallpapers/material-design-stock-4k-y7.jpg" width={250} alt="image upload"></img>
        </Grid>
        <Grid item xs={7}>
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
            id="email"
            label="Username"
            name="email"
            autoComplete="email"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sx={{mt: 3}}>
          <Button variant="contained" startIcon={<Add/>} sx={{float: "right"}}>
            Hinzufügen
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}