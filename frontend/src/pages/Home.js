import { Container, Typography, Paper, Button } from "@mui/material";
import { positions } from "@mui/system";
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
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  TextField: {
    opacity: 0.65
  }
};

export default function StartScreen() {
  return (
    <Container>
      <Container style={styles.Container} className="FirstView">
        <Container maxWidth="60%" component={Paper} variant={"outlined"} style={styles.TextField}>
          <Typography textAlign={"center"} height={"240px"} variant="h2">
            <img src={Logo} alt="logo"/>
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
