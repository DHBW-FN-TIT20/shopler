import { Container, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { render } from "@testing-library/react";
import image from "../img/einkaufen.jpg";
import { BackdropFilter } from '@mui/material';
import { sizing } from '@mui/system';

const styles = {
  Container: {
    backgroundImage: `url(${image})`,
    height: '100vh',
    backgroundSize: 'cover',
    filter: "blur(2px)"
  },
  box: {
    height: '100vh',
    display: 'flex',
    fontSize: '80px',
    alignItems: 'center',
    justifyContent: 'center',
  }
};

export default function StartScreen(){
  return(
    <div style={styles.Container}>
      <Typography style={styles.box}>
        Shopler
      </Typography>
    </div>
  )
};