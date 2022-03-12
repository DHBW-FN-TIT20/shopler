import {
  Container,
  Typography,
  Paper,
  Button,
  Stepper,
  StepLabel,
  Step,
} from "@mui/material";
import { Box } from "@mui/system";
import { Fragment, useState } from "react";
import HowToStepper from "../components/Home/HowToStepper";
import image from "../img/einkaufen.jpg";
import Logo from "../img/logo.svg";
import "./Home.css";

const styles = {
  Container: {
    "--image": `url(${image})`,
    height: "100vh",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  Logo: {
    backgroundImage: `url(${Logo})`,
    maxWidth: 500
  },
  Headline: {
    height: "30vh",
    filter: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  TextField: {
    padding: 15,
    opacity: 0.7,
    textAlign: "center"
  },
  Stepper: {
    paddingTop: "10vh",
    paddingBottom: "10vh"
  }
};

export default function Home() {
  return (
    <Container>
      <Container style={styles.Container} className="FirstView">
        <Container
          maxWidth="60%"
          component={Paper}
          elevation={20}
          style={styles.TextField}
        >
          <img src={Logo} style={styles.Logo} alt="logo" />
          <Typography variant="body1">
            Hier steht unsere Geschichte
          </Typography>
        </Container>
      </Container>
      <Container style={styles.Stepper}>
        <HowToStepper />
      </Container>
    </Container>
  );
}
