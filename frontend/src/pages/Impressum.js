import { Container, Typography, Paper, Button } from "@mui/material";
import { positions } from "@mui/system";
import image from "../img/einkaufen.jpg";
import Logo from "../img/logo.svg";
import "./Impressum.css";

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
    opacity: 0.9
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
            Impressum
          </Typography>
          <Typography textAlign={"left"}>
            <p>Shopler GmbH</p>
            <p>
                Anschrift: <br />
                Shopler GmbH <br />
                Shopstraße 54 <br />
                88046 Friedrichshafen </p>
            <p>
                Kontaktaufnahme: <br />
                E-Mail   : Shopler@shop.de <br />
                Telefon  : 0123 456789
            </p>
            <p>
                Umsatzsteuer-ID <br />
                -
            </p>
            <p>
                Umsatzsteuer-Identifikationsnummer gem. § 27 a Umsatzsteuergesetz: <br />
                DE XXX XXX XXX
            </p>
            <p>
                Haftungsausschluss - Disclaimer <br />
                <p>
                    Haftung für Inhalte <br />
                    Alle Inhalte unseres Internetauftritts wurden mit größter Sorgfalt und nach bestem Gewissen erstellt. Für die Richtigkeit, <br /> 
                    Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 <br />
                    TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als <br />
                    Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen <br />
                    zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von <br />
                    Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. <br /> <br />

                    Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntniserlangung einer konkreten Rechtsverletzung möglich. Bei <br />
                    Bekanntwerden von den o.g. Rechtsverletzungen werden wir diese Inhalte unverzüglich entfernen.
                </p>
                <p>
                    Haftungsbeschränkung für externe Links <br /> 
                    Unsere Webseite enthält Links auf externe Webseiten Dritter. Auf die Inhalte dieser direkt oder indirekt verlinkten Webseiten haben wir keinen Einfluss. Daher können wir für die „externen Links“ auch keine Gewähr auf Richtigkeit der Inhalte übernehmen. Für die Inhalte der externen Links sind die jeweilige Anbieter oder Betreiber (Urheber) der Seiten verantwortlich.

                    Die externen Links wurden zum Zeitpunkt der Linksetzung auf eventuelle Rechtsverstöße überprüft und waren im Zeitpunkt der Linksetzung frei von rechtswidrigen Inhalten. Eine ständige inhaltliche Überprüfung der externen Links ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht möglich. Bei direkten oder indirekten Verlinkungen auf die Webseiten Dritter, die außerhalb unseres Verantwortungsbereichs liegen, würde eine Haftungsverpflichtung ausschließlich in dem Fall nur bestehen, wenn wir von den Inhalten Kenntnis erlangen und es uns technisch möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern.

                    Diese Haftungsausschlusserklärung gilt auch innerhalb des eigenen Internetauftrittes „Name Ihrer Domain“ gesetzten Links und Verweise von Fragestellern, Blogeinträgern, Gästen des Diskussionsforums. Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere für Schäden, die aus der Nutzung oder Nichtnutzung solcherart dargestellten Informationen entstehen, haftet allein der Diensteanbieter der Seite, auf welche verwiesen wurde, nicht derjenige, der über Links auf die jeweilige Veröffentlichung lediglich verweist.

                    Werden uns Rechtsverletzungen bekannt, werden die externen Links durch uns unverzüglich entfernt.
                </p>
                <p>
                    Urheberrecht <br />
                    Die auf unserer Webseite veröffentlichen Inhalte und Werke unterliegen dem deutschen Urheberrecht (http://www.gesetze-im-internet.de/bundesrecht/urhg/gesamt.pdf) . Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung des geistigen Eigentums in ideeller und materieller Sicht des Urhebers außerhalb der Grenzen des Urheberrechtes bedürfen der vorherigen schriftlichen Zustimmung des jeweiligen Urhebers i.S.d. Urhebergesetzes (http://www.gesetze-im-internet.de/bundesrecht/urhg/gesamt.pdf ). Downloads und Kopien dieser Seite sind nur für den privaten und nicht kommerziellen Gebrauch erlaubt. Sind die Inhalte auf unserer Webseite nicht von uns erstellt wurden, sind die Urheberrechte Dritter zu beachten. Die Inhalte Dritter werden als solche kenntlich gemacht. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte unverzüglich entfernen.

                    Dieses Impressum wurde freundlicherweise von jurarat.de zur Verfügung gestellt.
                </p>
            </p>
          </Typography>
          <Typography>
            Registrieren Sie sich hier.
          </Typography>
        </Container>
      </Container>
    </Container>
  );
}
