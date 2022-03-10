import { Container, Paper, Typography } from "@mui/material";
import { Box, createTheme, fontFamily } from "@mui/system";
import { render } from "@testing-library/react";
import image from "../img/einkaufen.jpg";
import { BackdropFilter } from '@mui/material';
import { sizing } from '@mui/system';

const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

const styles = {
  Container: {
    backgroundImage: `url(${image})`,
    height: '100vh',
    backgroundSize: 'cover',
    //filter: "blur(2px)"
  },
  headline: {
    height: '100vh',
    filter: "none",
    display: 'flex',
    fontSize: 140,
    alignItems: 'center',
    justifyContent: 'center',
    fontStyle: 'bold',
    fontFamily: 'sans-serif',
  }
};


export default function StartScreen(){
  return(
    <Container style={styles.Container} theme={theme}>
      <Typography style={styles.headline}>
        Shopler
      </Typography>
    </Container>
  )
};