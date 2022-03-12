import { Container, Typography, Paper, Button } from "@mui/material";
import image from "../img/einkaufen.jpg";
import Logo from "../img/logo.svg";
import "./Home.css";

const styles = {
  Container: {
    "--image": `url(${image})`,
    height: "100%",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  Logo:{
    backgroundImage: `url(${Logo})`,
  },
  Headline: {
    height: "30vh",
    filter: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  TextField: {
    width: "100vh",
    padding: 15,
    opacity: 0.7
  }
};

export default function StartScreen() {
  return (
    <Container>
      <Container style={styles.Container} className="FirstView">
        <Container maxWidth="60%" component={Paper} elevation={20} style={styles.TextField}>
          <Typography textAlign={"center"} variant="h2">
            <img src={Logo} style={styles.Logo} alt="logo"/>
          </Typography>
          <Typography textAlign={"center"} variant="h2">
            Hier steht unsere Geschichte
          </Typography>
          <Typography textAlign={"center"}>
            Haben wir ihr Interesse geweckt?
            Registrieren Sie sich 
            <Button>
              hier.
            </Button>
          </Typography>
        </Container>
      </Container>
    </Container>
  );
}
