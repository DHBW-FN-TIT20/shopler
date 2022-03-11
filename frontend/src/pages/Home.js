import { Container, Typography } from "@mui/material";
import image from "../img/einkaufen.jpg";
import "./Home.css";

const styles = {
  Container: {
    "--image": `url(${image})`,
    height: "100vh",
    width: "100vw",
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
    height: "10vh",
    filter: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
};

export default function StartScreen() {
  return (
    <Container>
      <Container style={styles.Container} className="FirstView">
        <Typography component="h1" variant="h1" style={styles.Headline}>Shopler</Typography>
        <Typography component="h6" variant="h6" style={styles.TextField}>
          Hier steht Text
        </Typography>
      </Container>
    </Container>
  );
}
