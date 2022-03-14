import { Add } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Chip,
  Grid,
  List,
  ListItem,
  ListItemText,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const steps = ["Artikel auswählen", "Liste abhaken", "Neuer Artikel"];

const styles = {
  FormBox: {
    padding: 3,
  },
  TextBox: {
    padding: 4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  FinishedField: {
    margin: "auto",
    textAlign: "center",
    mt: 4,
    mb: 3,
  },
};

export default function HowToStepper() {
  const [activeStep, setActiveStep] = useState(0);

  // select next step
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  // select step before
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // select first step
  const handleReset = () => {
    setActiveStep(0);
  };

  function renderStep(stepcount) {
    switch (stepcount) {
      case 0:
        return (
          <Fragment>
            <Grid item xs={12} sm={6} sx={styles.FormBox}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {"name"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {"description"}
                  </Typography>
                  <Box>
                    <Chip
                      sx={{ marginRight: "2px", marginTop: 1 }}
                      label={"Gemüse"}
                    />
                  </Box>
                </CardContent>
                <CardActions
                  sx={{ marginTop: "auto", flexDirection: "row-reverse" }}
                >
                  <Button variant="contained">
                    <Add />
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} sx={styles.TextBox}>
              <Typography paragraph>
                Füge Artikel zu deiner Einkaufsliste über das Plus Symbol hinzu
              </Typography>
            </Grid>
          </Fragment>
        );
      case 1:
        return (
          <Fragment>
            <Grid item xs={12} sm={7} sx={styles.FormBox}>
              <List>
                <ListItem
                  button
                  divider
                  secondaryAction={<Checkbox edge="end" />}
                >
                  <ListItemText
                    primary={"name"}
                    secondary={"This is description"}
                  />
                </ListItem>
                <ListItem
                  button
                  divider
                  secondaryAction={<Checkbox edge="end" />}
                >
                  <ListItemText
                    primary={"name"}
                    secondary={"This is description"}
                  />
                </ListItem>
                <ListItem
                  button
                  divider
                  secondaryAction={<Checkbox edge="end" />}
                >
                  <ListItemText
                    primary={"name"}
                    secondary={"This is description"}
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={5} sx={styles.TextBox}>
              <Typography paragraph>
                Hake deine erledigten Einkäufe ab
              </Typography>
            </Grid>
          </Fragment>
        );
      case 2:
        return (
          <Fragment>
            <Grid
              item
              xs={12}
              md={5}
              component="form"
              noValidate
              sx={styles.FormBox}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                label="Artikelname"
                name="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Beschreibung"
                name="description"
                autoFocus
                multiline
                minRows={5}
              />
              <Button
                variant="contained"
                startIcon={<Add />}
                sx={{ float: "right", mt: 3 }}
              >
                Hinzufügen
              </Button>
            </Grid>
            <Grid item xs={12} md={7} sx={styles.TextBox}>
              <Typography paragraph>
                Füge eigene, neue Artikel hinzu und erweitere so den Katalog
                aller.
              </Typography>
            </Grid>
          </Fragment>
        );
      default:
        break;
    }
  }

  return (
    <Box>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <Fragment>
          <Box maxWidth={200} sx={styles.FinishedField}>
            <Typography paragraph>Bereit für den Einkauf!</Typography>
            <Button
              component={Link}
              variant="contained"
              to={{ pathname: "signup" }}
            >
              Registrieren
            </Button>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Nochmal</Button>
          </Box>
        </Fragment>
      ) : (
        <Fragment>
          <Grid container sx={{ margin: "auto" }}>
            {renderStep(activeStep)}
          </Grid>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Zurück
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Ende" : "Weiter"}
            </Button>
          </Box>
        </Fragment>
      )}
    </Box>
  );
}
