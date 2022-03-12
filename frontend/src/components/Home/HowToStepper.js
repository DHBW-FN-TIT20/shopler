import { Add } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Chip,
  Container,
  FormControl,
  Grid,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
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

export default function HowToStepper() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  function renderSwitch(stepcount) {
    switch (stepcount) {
      case 0:
        return (
          <Fragment>
            <Grid item xs={12} sm={6} sx={{padding: 2}}>
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
            <Grid item xs={12} sm={6} sx={{padding: 2}}>
              Füge Artikel zu deiner Einkaufsliste über das Plus Symbol hinzu
            </Grid>
          </Fragment>
        );
      case 1:
        return (
          <Fragment>
            <Grid item xs={12} sm={7} sx={{padding: 2}}>
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
            <Grid item xs={12} sm={5} sx={{padding: 2}}>
              Hake deine erledigten Einkäufe ab
            </Grid>
          </Fragment>
        );
      case 2:
        return (
          <Fragment>
            <Grid item xs={12} md={5} component="form" noValidate sx={{padding: 2}}>
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
            <Grid item xs={12} md={7} sx={{padding: 2}}>
              Füge eigene, neue Artikel hinzu und erweitere so den Katalog
              aller.
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
        {steps.map((label, index) => {
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
          <Typography sx={{ mt: 2, mb: 1 }} textAlign="center">
            Bereit für den Start! Jetzt
            <Link to={{ pathname: "signup" }}>Registrieren</Link>
            und loslegen
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </Fragment>
      ) : (
        <Fragment>
          <Grid container sx={{ margin: "auto" }}>
            {renderSwitch(activeStep)}
          </Grid>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </Fragment>
      )}
    </Box>
  );
}
