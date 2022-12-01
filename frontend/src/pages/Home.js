import { Container, Typography, Grid, Button } from "@mui/material";
import HowToStepper from "../components/Home/HowToStepper";
import CheckBoxes from "../img/Checking-boxes.svg";
import AboutUs from "../img/About-Us.svg";
import Tasks from "../img/Tasks.svg";
import Logo from "../img/logo.svg";
import { Link } from "react-router-dom";

const styles = {
  Headline: {
    height: "30vh",
    filter: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  TextField: {
    padding: 15,
    textAlign: "center",
  },
  Stepper: {
    paddingTop: "10vh",
    paddingBottom: "10vh",
  },
  CenterText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  CenterImage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default function Home() {
  return (
    <Container>
      <Grid container sx={{ mt: "20vh", mb: "10vh" }}>
        <Grid item style={styles.TextField} xs={12} sm={7}>
          <img style={{ width: "70%" }} src={Logo} alt="Shopler" />
          <Typography textAlign={"center"} paragraph>
            Einkaufen hat sich noch nie so einfach gestaltet. Dein Begleiter
            durch den ganzen Tag. Vergessen ist gestern.
          </Typography>
          <Button
            component={Link}
            to={{ pathname: "shop" }}
            variant="contained"
          >
            Los gehts
          </Button>
        </Grid>
        <Grid item xs={12} sm={5} sx={styles.CenterImage}>
          <img style={{ width: "80%" }} src={CheckBoxes} alt="" />
        </Grid>
      </Grid>
      <Container style={styles.Stepper}>
        <HowToStepper />
      </Container>
      <Container>
        <Grid component={Container} container>
          <Grid item xs={12} sm={5} sx={styles.CenterImage}>
            <img style={{ width: "80%" }} src={AboutUs} alt="" />
          </Grid>
          <Grid item xs={12} sm={7} sx={styles.CenterText}>
            <Typography variant="h4">Wer wir sind</Typography>
            <Typography paragraph>
              Wir sind 3 Studenten der DHBW und sind begeisterte Entwickler. Und
              alle haben das gleiche Alltagsproblem: Wir müssen Einkaufen gehen.
              Unvorbereitet gibt es hierbei leider so gut wie immer Sachen die
              wir dabei vergessen, obwohl sich manches noch extra vorgenommen
              wurde. Doch ein Schritt durch die Tür und <strong>Zack</strong>
              Blackout. So ineffizient wie bisher konnte es also nicht weiter
              gehen. So die Idee der digitalen Einkaufsliste, kurz: Shopler.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={7} sx={styles.CenterText}>
            <Typography variant="h4">Die Idee</Typography>
            <Typography paragraph>
              Stift und Block ist Vergangenheit. Keiner hat immer und überall
              seinen Block dabei, spätestens nach einem Tag bleibt dieser
              irgendwo liegen. So nicht Shopler. Die Online Einkaufsliste bleibt
              und kann nicht vergessen oder liegen gelassen werden.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5} sx={styles.CenterImage}>
            <img style={{ width: "80%" }} src={Tasks} alt="" />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
