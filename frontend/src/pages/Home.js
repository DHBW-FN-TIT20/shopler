import { Container, Typography, Paper } from "@mui/material";
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
    textAlign: "center",
  },
  Stepper: {
    paddingTop: "10vh",
    paddingBottom: "10vh",
  },
  Logo: {
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  TextField: {
    opacity: 0.65,
  },
};

export default function Home() {
  return (
    <Container>
      <Container style={styles.Container} className="FirstView">
        <Container
          maxWidth="60%"
          component={Paper}
          variant={"outlined"}
          style={styles.TextField}
        >
          <Typography textAlign={"center"} height={"260px"} variant="h2">
            <img src={Logo} alt="logo" />
          </Typography>
          <Typography textAlign={"center"} variant="body1">
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
