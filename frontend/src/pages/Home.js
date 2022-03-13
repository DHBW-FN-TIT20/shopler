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
            Unsere Geschichte
          </Typography>
          <Typography textAlign={"center"}>
            Wir sind drei Studenten der DHBW und haben alle das gleiche Alltagsproblem: Wir müssen Einkaufen gehen. 
            Unvorbereitet gibt es hierbei leider so gut wie immer das Problem, dass wir Sachen kaufen, welche wir nicht 
            benötigen oder wir laufen unnötigerweise sehr Lange durch ein Geschäft. Um dieses Problem zu Lösen 
            gibt es den Ansatz einer Einkaufsliste. Da wir allerdings keine Lust auf Papierverschwendung haben, 
            haben wir uns dazu entschieden eine eigene Anwendung für solch eine Einkaufsliste zu Programmieren. 
            Diese soll uns helfen organisierter Einzukaufen und nur das zu kaufen, was wir auch wirklich benötigen.
            Somit sparen wir uns die Zeit lange im Geschäft nachzudenken, da wir das bereits Zuhause getan haben. 
            Außerdem gibt es die Möglichkeit Einkaufslisten zu speichern und diese jederzeit abzurufen. Hierdurch können 
            Listen für Rezepte, den Alltagsbedarf und sonstiges angelegt und jederzeit abgerufen werden. Unser Ziel ist es 
            den Einkauf durch diese Anwendung effizienter zu gestalten und unsere Zeit wichtigeren Dingen zu widmen.
          </Typography>
          <Typography>
            Registrieren Sie sich hier.
          </Typography>
        </Container>
      </Container>
    </Container>
  );
}
