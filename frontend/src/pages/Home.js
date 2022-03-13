import { Container, Typography, Grid, Button } from "@mui/material";
import HowToStepper from "../components/Home/HowToStepper";
import CheckBoxes from "../img/Checking-boxes.svg";
import AboutUs from "../img/About-Us.svg";
import Tasks from "../img/Tasks.svg";
import Logo from "../img/logo.svg";

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
  CenteredContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  Stepper: {
    paddingTop: "10vh",
    paddingBottom: "10vh",
  },
};

export default function Home() {
  return (
    <Container>
      <Grid container sx={{ mt: "20vh", mb: "10vh" }} className="FirstView">
        <Grid item style={styles.TextField} xs={12} sm={7}>
          <img style={{ width: "70%" }} src={Logo} alt="Shopler" />
          <Typography textAlign={"center"} paragraph>
            Einkaufen hat sich noch nie so einfach gestaltet. Dein Begleiter
            durch den ganzen Tag. Vergessen ist gestern.
          </Typography>
          <Button variant="contained">Los gehts</Button>
        </Grid>
        <Grid
          item
          xs={12}
          sm={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img style={{ width: "80%" }} src={CheckBoxes} alt="" />
        </Grid>
      </Grid>
      <Container style={styles.Stepper}>
        <HowToStepper />
      </Container>
      <Container>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={5}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img style={{ width: "80%" }} src={AboutUs} alt="" />
          </Grid>
          <Grid item xs={12} sm={7} sx={styles.CenteredContent}>
            <Typography variant="h4">Wer wir sind</Typography>
            <Typography paragraph>
              Wir sind 3 Studenten der DHBW und sind begeisterte Entwickler. Und
              alle haben das gleiche Alltagsproblem: Wir müssen Einkaufen gehen.
              Unvorbereitet gibt es hierbei leider so gut wie immer Sachen die
              wir dabei vergessen, obwohl sich manches noch extra vorgenommen
              wurde. Doch ein Schritt durch die Tür und <strong>Zack</strong>{" "}
              Blackout. So ineffizient wie bisher konnte es also nicht weiter
              gehen. So die Idee der digitalen Einkaufsliste, kurz: Shopler.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={7} sx={styles.CenteredContent}>
            <Typography variant="h4">Die Idee</Typography>
            <Typography paragraph>
              Stift und Block ist Vergangenheit. Keiner hat immer und überall
              seinen Block dabei, spätestens nach einem Tag bleibt dieser
              irgendwo liegen. So nicht Shopler. Die Online Einkaufsliste bleibt
              und kann nich vergessen oder liegen gelassen werden.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={5}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img style={{ width: "80%" }} src={Tasks} alt="" />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
