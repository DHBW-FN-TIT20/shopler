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
    opacity: 0.65,
    marginBottom: 5,
  }
};

export default function StartScreen() {
  return (
    <Container>
      <Container style={styles.Container} className="FirstView">
        <Container maxWidth="60%" component={Paper} variant={"outlined"} style={styles.TextField}>
          <Typography textAlign={"center"} alignContent={"center"} height={"35vh"} width={"20%"} variant="h2">
            <img src={Logo} alt="logo" width={"500%"}/>
          </Typography>
          <Typography textAlign={"center"} variant="h2">
            Hier steht unsere Geschichte
          </Typography>
          <Typography textAlign={"center"}>
            Haben wir ihr Interesse geweckt?
          </Typography>
          <Typography>
            Registrieren Sie sich hier.
          </Typography>
        </Container>
      </Container>
    </Container>
  );
}
