import { Container, Typography, Paper } from "@mui/material";
import Logo from "../img/logo.svg";

export default function Privacy() {
  return (
    <Container maxWidth="md">
      <img
        src={Logo}
        alt="logo"
        width={"40%"}
        style={{ display: "block", margin: "auto" }}
      />
      <Typography variant="h2" textAlign={"center"}>
        Privacy
      </Typography>
      <Typography variant="h5" id="m14">
        Einleitung
      </Typography>
      <Typography paragraph>
        Mit der folgenden Datenschutzerklärung möchten wir Sie darüber
        aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend auch
        kurz als "Daten“ bezeichnet) wir zu welchen Zwecken und in welchem
        Umfang verarbeiten. Die Datenschutzerklärung gilt für alle von uns
        durchgeführten Verarbeitungen personenbezogener Daten, sowohl im Rahmen
        der Erbringung unserer Leistungen als auch insbesondere auf unseren
        Webseiten, in mobilen Applikationen sowie innerhalb externer
        Onlinepräsenzen, wie z.B. unserer Social-Media-Profile (nachfolgend
        zusammenfassend bezeichnet als "Onlineangebot“).
      </Typography>
      <Typography paragraph>
        Die verwendeten Begriffe sind nicht geschlechtsspezifisch.
      </Typography>
      <Typography paragraph>Stand: 13. März 2022</Typography>
      <Typography variant="h5">Inhaltsübersicht</Typography>
      <ul>
        <li>
          <a href="#m14">Einleitung</a>
        </li>
        <li>
          <a href="#m3">Verantwortlicher</a>
        </li>
        <li>
          <a href="#mOverview">Übersicht der Verarbeitungen</a>
        </li>
        <li>
          <a href="#m13">Maßgebliche Rechtsgrundlagen</a>
        </li>
        <li>
          <a href="#m27">Sicherheitsmaßnahmen</a>
        </li>
        <li>
          <a href="#m12">Löschung von Daten</a>
        </li>
        <li>
          <a href="#m134">Einsatz von Cookies</a>
        </li>
        <li>
          <a href="#m317">Geschäftliche Leistungen</a>
        </li>
        <li>
          <a href="#m225">Bereitstellung des Onlineangebotes und Webhosting</a>
        </li>
        <li>
          <a href="#m182">Kontakt- und Anfragenverwaltung</a>
        </li>
        <li>
          <a href="#m328">Plugins und eingebettete Funktionen sowie Inhalte</a>
        </li>
        <li>
          <a href="#m15">
            Änderung und Aktualisierung der Datenschutzerklärung
          </a>
        </li>
        <li>
          <a href="#m10">Rechte der betroffenen Personen</a>
        </li>
        <li>
          <a href="#m42">Begriffsdefinitionen</a>
        </li>
      </ul>
      <Typography variant="h5" id="m3">
        Verantwortlicher
      </Typography>
      <Typography paragraph>
        Shopler GmbH
        <br />
        Shopstraße 54
        <br />
        88046 Friedrichshafen
      </Typography>
      <Typography paragraph>
        E-Mail-Adresse: <a href="mailto:info@shopler.de">info@shopler.de</a>
      </Typography>
      <Typography variant="h5" id="mOverview">
        Übersicht der Verarbeitungen
      </Typography>
      <Typography paragraph>
        Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und
        die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen
        Personen.
      </Typography>
      <Typography variant="h5">Arten der verarbeiteten Daten</Typography>
      <ul>
        <li>Bestandsdaten.</li>
        <li>Zahlungsdaten.</li>
        <li>Kontaktdaten.</li>
        <li>Inhaltsdaten.</li>
        <li>Vertragsdaten.</li>
        <li>Nutzungsdaten.</li>
        <li>Meta-/Kommunikationsdaten.</li>
      </ul>
      <Typography variant="h5">Kategorien betroffener Personen</Typography>
      <ul>
        <li>Kunden.</li>
        <li>Interessenten.</li>
        <li>Kommunikationspartner.</li>
        <li>Nutzer.</li>
        <li>Geschäfts- und Vertragspartner.</li>
      </ul>
      <Typography variant="h5">Zwecke der Verarbeitung</Typography>
      <ul>
        <li>Erbringung vertraglicher Leistungen und Kundenservice.</li>
        <li>Kontaktanfragen und Kommunikation.</li>
        <li>Sicherheitsmaßnahmen.</li>
        <li>Büro- und Organisationsverfahren.</li>
        <li>Verwaltung und Beantwortung von Anfragen.</li>
        <li>
          Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.
        </li>
      </ul>
      <Typography variant="h5" id="m13">
        Maßgebliche Rechtsgrundlagen
      </Typography>
      <Typography paragraph>
        Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO,
        auf deren Basis wir personenbezogene Daten verarbeiten. Bitte nehmen Sie
        zur Kenntnis, dass neben den Regelungen der DSGVO nationale
        Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder Sitzland gelten
        können. Sollten ferner im Einzelfall speziellere Rechtsgrundlagen
        maßgeblich sein, teilen wir Ihnen diese in der Datenschutzerklärung mit.
      </Typography>
      <ul>
        <li>
          <strong>
            Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1
            lit. b. DSGVO)
          </strong>{" "}
          - Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen
          Vertragspartei die betroffene Person ist, oder zur Durchführung
          vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der
          betroffenen Person erfolgen.
        </li>
        <li>
          <strong>
            Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c. DSGVO)
          </strong>{" "}
          - Die Verarbeitung ist zur Erfüllung einer rechtlichen Verpflichtung
          erforderlich, der der Verantwortliche unterliegt.
        </li>
        <li>
          <strong>
            Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO)
          </strong>{" "}
          - Die Verarbeitung ist zur Wahrung der berechtigten Interessen des
          Verantwortlichen oder eines Dritten erforderlich, sofern nicht die
          Interessen oder Grundrechte und Grundfreiheiten der betroffenen
          Person, die den Schutz personenbezogener Daten erfordern, überwiegen.
        </li>
      </ul>
      <Typography paragraph>
        Zusätzlich zu den Datenschutzregelungen der Datenschutz-Grundverordnung
        gelten nationale Regelungen zum Datenschutz in Deutschland. Hierzu
        gehört insbesondere das Gesetz zum Schutz vor Missbrauch
        personenbezogener Daten bei der Datenverarbeitung
        (Bundesdatenschutzgesetz – BDSG). Das BDSG enthält insbesondere
        Spezialregelungen zum Recht auf Auskunft, zum Recht auf Löschung, zum
        Widerspruchsrecht, zur Verarbeitung besonderer Kategorien
        personenbezogener Daten, zur Verarbeitung für andere Zwecke und zur
        Übermittlung sowie automatisierten Entscheidungsfindung im Einzelfall
        einschließlich Profiling. Des Weiteren regelt es die Datenverarbeitung
        für Zwecke des Beschäftigungsverhältnisses (§ 26 BDSG), insbesondere im
        Hinblick auf die Begründung, Durchführung oder Beendigung von
        Beschäftigungsverhältnissen sowie die Einwilligung von Beschäftigten.
        Ferner können Landesdatenschutzgesetze der einzelnen Bundesländer zur
        Anwendung gelangen.
      </Typography>
      <Typography variant="h5" id="m27">
        Sicherheitsmaßnahmen
      </Typography>
      <Typography paragraph>
        Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter
        Berücksichtigung des Stands der Technik, der Implementierungskosten und
        der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie
        der unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmaßes der
        Bedrohung der Rechte und Freiheiten natürlicher Personen geeignete
        technische und organisatorische Maßnahmen, um ein dem Risiko
        angemessenes Schutzniveau zu gewährleisten.
      </Typography>
      <Typography paragraph>
        Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit,
        Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen
        und elektronischen Zugangs zu den Daten als auch des sie betreffenden
        Zugriffs, der Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit
        und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die
        eine Wahrnehmung von Betroffenenrechten, die Löschung von Daten und
        Reaktionen auf die Gefährdung der Daten gewährleisten. Ferner
        berücksichtigen wir den Schutz personenbezogener Daten bereits bei der
        Entwicklung bzw. Auswahl von Hardware, Software sowie Verfahren
        entsprechend dem Prinzip des Datenschutzes, durch Technikgestaltung und
        durch datenschutzfreundliche Voreinstellungen.
      </Typography>
      <Typography variant="h5" id="m12">
        Löschung von Daten
      </Typography>
      <Typography paragraph>
        Die von uns verarbeiteten Daten werden nach Maßgabe der gesetzlichen
        Vorgaben gelöscht, sobald deren zur Verarbeitung erlaubten
        Einwilligungen widerrufen werden oder sonstige Erlaubnisse entfallen
        (z.B. wenn der Zweck der Verarbeitung dieser Daten entfallen ist oder
        sie für den Zweck nicht erforderlich sind).
      </Typography>
      <Typography paragraph>
        Sofern die Daten nicht gelöscht werden, weil sie für andere und
        gesetzlich zulässige Zwecke erforderlich sind, wird deren Verarbeitung
        auf diese Zwecke beschränkt. D.h., die Daten werden gesperrt und nicht
        für andere Zwecke verarbeitet. Das gilt z.B. für Daten, die aus handels-
        oder steuerrechtlichen Gründen aufbewahrt werden müssen oder deren
        Speicherung zur Geltendmachung, Ausübung oder Verteidigung von
        Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen
        oder juristischen Person erforderlich ist.
      </Typography>
      <Typography paragraph>
        Unsere Datenschutzhinweise können ferner weitere Angaben zu der
        Aufbewahrung und Löschung von Daten beinhalten, die für die jeweiligen
        Verarbeitungen vorrangig gelten.
      </Typography>
      <Typography variant="h5" id="m134">
        Einsatz von Cookies
      </Typography>
      <Typography paragraph>
        Cookies sind kleine Textdateien, bzw. sonstige Speichervermerke, die
        Informationen auf Endgeräten speichern und Informationen aus den
        Endgeräten auslesen. Z.B. um den Login-Status in einem Nutzerkonto,
        einen Warenkorbinhalt in einem E-Shop, die aufgerufenen Inhalte oder
        verwendete Funktionen eines Onlineangebotes speichern. Cookies können
        ferner zu unterschiedlichen Zwecken eingesetzt werden, z.B. zu Zwecken
        der Funktionsfähigkeit, Sicherheit und Komfort von Onlineangeboten sowie
        der Erstellung von Analysen der Besucherströme.{" "}
      </Typography>
      <Typography paragraph>
        <strong>Hinweise zur Einwilligung: </strong>Wir setzen Cookies im
        Einklang mit den gesetzlichen Vorschriften ein. Daher holen wir von den
        Nutzern eine vorhergehende Einwilligung ein, außer wenn diese gesetzlich
        nicht gefordert ist. Eine Einwilligung ist insbesondere nicht notwendig,
        wenn das Speichern und das Auslesen der Informationen, also auch von
        Cookies, unbedingt erforderlich sind, um dem den Nutzern einen von ihnen
        ausdrücklich gewünschten Telemediendienst (also unser Onlineangebot) zur
        Verfügung zu stellen. Die widerrufliche Einwilligung wird gegenüber den
        Nutzern deutlich kommuniziert und enthält die Informationen zu der
        jeweiligen Cookie-Nutzung.
      </Typography>
      <Typography paragraph>
        <strong>Hinweise zu datenschutzrechtlichen Rechtsgrundlagen: </strong>
        Auf welcher datenschutzrechtlichen Rechtsgrundlage wir die
        personenbezogenen Daten der Nutzer mit Hilfe von Cookies verarbeiten,
        hängt davon ab, ob wir Nutzer um eine Einwilligung bitten. Falls die
        Nutzer einwilligen, ist die Rechtsgrundlage der Verarbeitung Ihrer Daten
        die erklärte Einwilligung. Andernfalls werden die mithilfe von Cookies
        verarbeiteten Daten auf Grundlage unserer berechtigten Interessen (z.B.
        an einem betriebswirtschaftlichen Betrieb unseres Onlineangebotes und
        Verbesserung seiner Nutzbarkeit) verarbeitet oder, wenn dies im Rahmen
        der Erfüllung unserer vertraglichen Pflichten erfolgt, wenn der Einsatz
        von Cookies erforderlich ist, um unsere vertraglichen Verpflichtungen zu
        erfüllen. Zu welchen Zwecken die Cookies von uns verarbeitet werden,
        darüber klären wir im Laufe dieser Datenschutzerklärung oder im Rahmen
        von unseren Einwilligungs- und Verarbeitungsprozessen auf.
      </Typography>
      <Typography paragraph>
        <strong>Speicherdauer: </strong>Im Hinblick auf die Speicherdauer werden
        die folgenden Arten von Cookies unterschieden:
      </Typography>
      <ul>
        <li>
          <strong>
            Temporäre Cookies (auch: Session- oder Sitzungs-Cookies):
          </strong>
          Temporäre Cookies werden spätestens gelöscht, nachdem ein Nutzer ein
          Online-Angebot verlassen und sein Endgerät (z.B. Browser oder mobile
          Applikation) geschlossen hat.
        </li>
        <li>
          <strong>Permanente Cookies:</strong> Permanente Cookies bleiben auch
          nach dem Schließen des Endgerätes gespeichert. So können
          beispielsweise der Login-Status gespeichert oder bevorzugte Inhalte
          direkt angezeigt werden, wenn der Nutzer eine Website erneut besucht.
          Ebenso können die mit Hilfe von Cookies erhobenen Daten der Nutzer zur
          Reichweitenmessung verwendet werden. Sofern wir Nutzern keine
          expliziten Angaben zur Art und Speicherdauer von Cookies mitteilen (z.
          B. im Rahmen der Einholung der Einwilligung), sollten Nutzer davon
          ausgehen, dass Cookies permanent sind und die Speicherdauer bis zu
          zwei Jahre betragen kann.
        </li>
      </ul>
      <Typography paragraph>
        <strong>
          Allgemeine Hinweise zum Widerruf und Widerspruch (Opt-Out):{" "}
        </strong>
        Nutzer können die von ihnen abgegebenen Einwilligungen jederzeit
        Widerrufen und zudem einen Widerspruch gegen die Verarbeitung
        entsprechend den gesetzlichen Vorgaben im Art. 21 DSGVO einlegen
        (weitere Hinweise zum Widerspruch erfolgen im Rahmen dieser
        Datenschutzerklärung). Nutzer können Ihren Widerspruch auch mittels der
        Einstellungen Ihres Browsers erklären.
      </Typography>
      <Typography paragraph>
        <strong>
          Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:
        </strong>
      </Typography>
      <ul>
        <li>
          <strong>
            Verarbeitung von Cookie-Daten auf Grundlage einer Einwilligung:{" "}
          </strong>
          Wir setzen ein Verfahren zum Cookie-Einwilligungs-Management ein, in
          dessen Rahmen die Einwilligungen der Nutzer in den Einsatz von
          Cookies, bzw. der im Rahmen des
          Cookie-Einwilligungs-Management-Verfahrens genannten Verarbeitungen
          und Anbieter eingeholt sowie von den Nutzern verwaltet und widerrufen
          werden können. Hierbei wird die Einwilligungserklärung gespeichert, um
          deren Abfrage nicht erneut wiederholen zu müssen und die Einwilligung
          entsprechend der gesetzlichen Verpflichtung nachweisen zu können. Die
          Speicherung kann serverseitig und/oder in einem Cookie (sogenanntes
          Opt-In-Cookie, bzw. mithilfe vergleichbarer Technologien) erfolgen, um
          die Einwilligung einem Nutzer, bzw. dessen Gerät zuordnen zu können.
          Vorbehaltlich individueller Angaben zu den Anbietern von
          Cookie-Management-Diensten, gelten die folgenden Hinweise: Die Dauer
          der Speicherung der Einwilligung kann bis zu zwei Jahren betragen.
          Hierbei wird ein pseudonymer Nutzer-Identifikator gebildet und mit dem
          Zeitpunkt der Einwilligung, Angaben zur Reichweite der Einwilligung
          (z. B. welche Kategorien von Cookies und/oder Diensteanbieter) sowie
          dem Browser, System und verwendeten Endgerät gespeichert.
        </li>
      </ul>
      <Typography variant="h5" id="m317">
        Geschäftliche Leistungen
      </Typography>
      <Typography paragraph>
        Wir verarbeiten Daten unserer Vertrags- und Geschäftspartner, z.B.
        Kunden und Interessenten (zusammenfassend bezeichnet als
        "Vertragspartner") im Rahmen von vertraglichen und vergleichbaren
        Rechtsverhältnissen sowie damit verbundenen Maßnahmen und im Rahmen der
        Kommunikation mit den Vertragspartnern (oder vorvertraglich), z.B., um
        Anfragen zu beantworten.
      </Typography>
      <Typography paragraph>
        Wir verarbeiten diese Daten, um unsere vertraglichen Verpflichtungen zu
        erfüllen. Dazu gehören insbesondere die Verpflichtungen zur Erbringung
        der vereinbarten Leistungen, etwaige Aktualisierungspflichten und
        Abhilfe bei Gewährleistungs- und sonstigen Leistungsstörungen. Darüber
        hinaus verarbeiten wir die Daten zur Wahrung unserer Rechte und zum
        Zwecke der mit diesen Pflichten verbundenen Verwaltungsaufgaben sowie
        der Unternehmensorganisation. Darüber hinaus verarbeiten wir die Daten
        auf Grundlage unserer berechtigten Interessen an einer ordnungsgemäßen
        und betriebswirtschaftlichen Geschäftsführung sowie an
        Sicherheitsmaßnahmen zum Schutz unserer Vertragspartner und unseres
        Geschäftsbetriebes vor Missbrauch, Gefährdung ihrer Daten, Geheimnisse,
        Informationen und Rechte (z.B. zur Beteiligung von Telekommunikations-,
        Transport- und sonstigen Hilfsdiensten sowie Subunternehmern, Banken,
        Steuer- und Rechtsberatern, Zahlungsdienstleistern oder Finanzbehörden).
        Im Rahmen des geltenden Rechts geben wir die Daten von Vertragspartnern
        nur insoweit an Dritte weiter, als dies für die vorgenannten Zwecke oder
        zur Erfüllung gesetzlicher Pflichten erforderlich ist. Über weitere
        Formen der Verarbeitung, z.B. zu Marketingzwecken, werden die
        Vertragspartner im Rahmen dieser Datenschutzerklärung informiert.
      </Typography>
      <Typography paragraph>
        Welche Daten für die vorgenannten Zwecke erforderlich sind, teilen wir
        den Vertragspartnern vor oder im Rahmen der Datenerhebung, z.B. in
        Onlineformularen, durch besondere Kennzeichnung (z.B. Farben) bzw.
        Symbole (z.B. Sternchen o.ä.), oder persönlich mit.
      </Typography>
      <Typography paragraph>
        Wir löschen die Daten nach Ablauf gesetzlicher Gewährleistungs- und
        vergleichbarer Pflichten, d.h., grundsätzlich nach Ablauf von 4 Jahren,
        es sei denn, dass die Daten in einem Kundenkonto gespeichert werden,
        z.B., solange sie aus gesetzlichen Gründen der Archivierung aufbewahrt
        werden müssen (z.B. für Steuerzwecke im Regelfall 10 Jahre). Daten, die
        uns im Rahmen eines Auftrags durch den Vertragspartner offengelegt
        wurden, löschen wir entsprechend den Vorgaben des Auftrags,
        grundsätzlich nach Ende des Auftrags.
      </Typography>
      <Typography paragraph>
        Soweit wir zur Erbringung unserer Leistungen Drittanbieter oder
        Plattformen einsetzen, gelten im Verhältnis zwischen den Nutzern und den
        Anbietern die Geschäftsbedingungen und Datenschutzhinweise der
        jeweiligen Drittanbieter oder Plattformen.{" "}
      </Typography>
      <Typography variant="h5">Shop und E-Commerce</Typography>
      <Typography paragraph>
        Wir verarbeiten die Daten unserer Kunden, um ihnen die Auswahl, den
        Erwerb, bzw. die Bestellung der gewählten Produkte, Waren sowie
        verbundener Leistungen, als auch deren Bezahlung und Zustellung, bzw.
        Ausführung zu ermöglichen. Sofern für die Ausführung einer Bestellung
        erforderlich, setzen wir Dienstleister, insbesondere Post-, Speditions-
        und Versandunternehmen ein, um die Lieferung, bzw. Ausführung gegenüber
        unseren Kunden durchzuführen. Für die Abwicklung der Zahlungsvorgänge
        nehmen wir die Dienste von Banken und Zahlungsdienstleistern in
        Anspruch. Die erforderlichen Angaben sind als solche im Rahmen des
        Bestell- bzw. vergleichbaren Erwerbsvorgangs gekennzeichnet und umfassen
        die zur Auslieferung, bzw. Zurverfügungstellung und Abrechnung
        benötigten Angaben sowie Kontaktinformationen, um etwaige Rücksprache
        halten zu können.
      </Typography>
      <ul>
        <li>
          <strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z.B. Namen,
          Adressen); Zahlungsdaten (z.B. Bankverbindungen, Rechnungen,
          Zahlungshistorie); Kontaktdaten (z.B. E-Mail, Telefonnummern);
          Vertragsdaten (z.B. Vertragsgegenstand, Laufzeit, Kundenkategorie);
          Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten,
          Zugriffszeiten); Meta-/Kommunikationsdaten (z.B. Geräte-Informationen,
          IP-Adressen).
        </li>
        <li>
          <strong>Betroffene Personen:</strong> Kunden; Interessenten;
          Geschäfts- und Vertragspartner.
        </li>
        <li>
          <strong>Zwecke der Verarbeitung:</strong> Erbringung vertraglicher
          Leistungen und Kundenservice; Sicherheitsmaßnahmen; Kontaktanfragen
          und Kommunikation; Büro- und Organisationsverfahren; Verwaltung und
          Beantwortung von Anfragen.
        </li>
        <li>
          <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und
          vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b. DSGVO);
          Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO); Rechtliche
          Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c. DSGVO).
        </li>
      </ul>
      <Typography variant="h5" id="m225">
        Bereitstellung des Onlineangebotes und Webhosting
      </Typography>
      <Typography paragraph>
        Um unser Onlineangebot sicher und effizient bereitstellen zu können,
        nehmen wir die Leistungen von einem oder mehreren Webhosting-Anbietern
        in Anspruch, von deren Servern (bzw. von ihnen verwalteten Servern) das
        Onlineangebot abgerufen werden kann. Zu diesen Zwecken können wir
        Infrastruktur- und Plattformdienstleistungen, Rechenkapazität,
        Speicherplatz und Datenbankdienste sowie Sicherheitsleistungen und
        technische Wartungsleistungen in Anspruch nehmen.
      </Typography>
      <Typography paragraph>
        Zu den im Rahmen der Bereitstellung des Hostingangebotes verarbeiteten
        Daten können alle die Nutzer unseres Onlineangebotes betreffenden
        Angaben gehören, die im Rahmen der Nutzung und der Kommunikation
        anfallen. Hierzu gehören regelmäßig die IP-Adresse, die notwendig ist,
        um die Inhalte von Onlineangeboten an Browser ausliefern zu können, und
        alle innerhalb unseres Onlineangebotes oder von Webseiten getätigten
        Eingaben.
      </Typography>
      <ul>
        <li>
          <strong>Verarbeitete Datenarten:</strong> Inhaltsdaten (z.B. Eingaben
          in Onlineformularen); Nutzungsdaten (z.B. besuchte Webseiten,
          Interesse an Inhalten, Zugriffszeiten); Meta-/Kommunikationsdaten
          (z.B. Geräte-Informationen, IP-Adressen).
        </li>
        <li>
          <strong>Betroffene Personen:</strong> Nutzer (z.B. Webseitenbesucher,
          Nutzer von Onlinediensten).
        </li>
        <li>
          <strong>Zwecke der Verarbeitung:</strong> Bereitstellung unseres
          Onlineangebotes und Nutzerfreundlichkeit.
        </li>
        <li>
          <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs.
          1 S. 1 lit. f. DSGVO).
        </li>
      </ul>
      <Typography paragraph>
        <strong>
          Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:
        </strong>
      </Typography>
      <ul>
        <li>
          <strong>Erhebung von Zugriffsdaten und Logfiles: </strong>Wir selbst
          (bzw. unser Webhostinganbieter) erheben Daten zu jedem Zugriff auf den
          Server (sogenannte Serverlogfiles). Zu den Serverlogfiles können die
          Adresse und Name der abgerufenen Webseiten und Dateien, Datum und
          Uhrzeit des Abrufs, übertragene Datenmengen, Meldung über
          erfolgreichen Abruf, Browsertyp nebst Version, das Betriebssystem des
          Nutzers, Referrer URL (die zuvor besuchte Seite) und im Regelfall
          IP-Adressen und der anfragende Provider gehören. Die Serverlogfiles
          können zum einen zu Zwecken der Sicherheit eingesetzt werden, z.B., um
          eine Überlastung der Server zu vermeiden (insbesondere im Fall von
          missbräuchlichen Angriffen, sogenannten DDoS-Attacken) und zum
          anderen, um die Auslastung der Server und ihre Stabilität
          sicherzustellen; <strong>Löschung von Daten:</strong>{" "}
          Logfile-Informationen werden für die Dauer von maximal 30 Tagen
          gespeichert und danach gelöscht oder anonymisiert. Daten, deren
          weitere Aufbewahrung zu Beweiszwecken erforderlich ist, sind bis zur
          endgültigen Klärung des jeweiligen Vorfalls von der Löschung
          ausgenommen.
        </li>
      </ul>
      <Typography variant="h5" id="m182">
        Kontakt- und Anfragenverwaltung
      </Typography>
      <Typography paragraph>
        Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail,
        Telefon oder via soziale Medien) sowie im Rahmen bestehender Nutzer- und
        Geschäftsbeziehungen werden die Angaben der anfragenden Personen
        verarbeitet soweit dies zur Beantwortung der Kontaktanfragen und
        etwaiger angefragter Maßnahmen erforderlich ist.
      </Typography>
      <Typography paragraph>
        Die Beantwortung der Kontaktanfragen sowie die Verwaltung von Kontakt-
        und Anfragedaten im Rahmen von vertraglichen oder vorvertraglichen
        Beziehungen erfolgt zur Erfüllung unserer vertraglichen Pflichten oder
        zur Beantwortung von (vor)vertraglichen Anfragen und im Übrigen auf
        Grundlage der berechtigten Interessen an der Beantwortung der Anfragen
        und Pflege von Nutzer- bzw. Geschäftsbeziehungen.
      </Typography>
      <ul>
        <li>
          <strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z.B. Namen,
          Adressen); Kontaktdaten (z.B. E-Mail, Telefonnummern); Inhaltsdaten
          (z.B. Eingaben in Onlineformularen).
        </li>
        <li>
          <strong>Betroffene Personen:</strong> Kommunikationspartner.
        </li>
        <li>
          <strong>Zwecke der Verarbeitung:</strong> Kontaktanfragen und
          Kommunikation; Erbringung vertraglicher Leistungen und Kundenservice.
        </li>
        <li>
          <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und
          vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b. DSGVO);
          Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO); Rechtliche
          Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c. DSGVO).
        </li>
      </ul>
      <Typography variant="h5">
        Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:
      </Typography>
      <ul>
        <li>
          <strong>Kontaktformular: </strong>Wenn Nutzer über unser
          Kontaktformular, E-Mail oder andere Kommunikationswege mit uns in
          Kontakt treten, verarbeiten wir die uns in diesem Zusammenhang
          mitgeteilten Daten zur Bearbeitung des mitgeteilten Anliegens. Zu
          diesem Zweck verarbeiten wir personenbezogene Daten im Rahmen
          vorvertraglicher und vertraglicher Geschäftsbeziehungen, soweit dies
          zu deren Erfüllung erforderlich ist und im Übrigen auf Grundlage
          unserer berechtigten Interessen sowie der Interessen der
          Kommunikationspartner an der Beantwortung der Anliegen und unserer
          gesetzlichen Aufbewahrungspflichten.
        </li>
      </ul>
      <Typography variant="h5" id="m328">
        Plugins und eingebettete Funktionen sowie Inhalte
      </Typography>
      <Typography paragraph>
        Wir binden in unser Onlineangebot Funktions- und Inhaltselemente ein,
        die von den Servern ihrer jeweiligen Anbieter (nachfolgend bezeichnet
        als "Drittanbieter”) bezogen werden. Dabei kann es sich zum Beispiel um
        Grafiken, Videos oder Stadtpläne handeln (nachfolgend einheitlich
        bezeichnet als "Inhalte”).
      </Typography>
      <Typography paragraph>
        Die Einbindung setzt immer voraus, dass die Drittanbieter dieser Inhalte
        die IP-Adresse der Nutzer verarbeiten, da sie ohne die IP-Adresse die
        Inhalte nicht an deren Browser senden könnten. Die IP-Adresse ist damit
        für die Darstellung dieser Inhalte oder Funktionen erforderlich. Wir
        bemühen uns, nur solche Inhalte zu verwenden, deren jeweilige Anbieter
        die IP-Adresse lediglich zur Auslieferung der Inhalte verwenden.
        Drittanbieter können ferner sogenannte Pixel-Tags (unsichtbare Grafiken,
        auch als "Web Beacons" bezeichnet) für statistische oder Marketingzwecke
        verwenden. Durch die "Pixel-Tags" können Informationen, wie der
        Besucherverkehr auf den Seiten dieser Webseite, ausgewertet werden. Die
        pseudonymen Informationen können ferner in Cookies auf dem Gerät der
        Nutzer gespeichert werden und unter anderem technische Informationen zum
        Browser und zum Betriebssystem, zu verweisenden Webseiten, zur
        Besuchszeit sowie weitere Angaben zur Nutzung unseres Onlineangebotes
        enthalten als auch mit solchen Informationen aus anderen Quellen
        verbunden werden.
      </Typography>
      <Typography paragraph>
        <strong>Hinweise zu Rechtsgrundlagen:</strong> Sofern wir die Nutzer um
        deren Einwilligung in den Einsatz der Drittanbieter bitten, ist die
        Rechtsgrundlage der Verarbeitung von Daten die Einwilligung. Ansonsten
        werden die Daten der Nutzer auf Grundlage unserer berechtigten
        Interessen (d.h. Interesse an effizienten, wirtschaftlichen und
        empfängerfreundlichen Leistungen) verarbeitet. In diesem Zusammenhang
        möchten wir Sie auch auf die Informationen zur Verwendung von Cookies in
        dieser Datenschutzerklärung hinweisen.
      </Typography>
      <ul>
        <li>
          <strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z.B. besuchte
          Webseiten, Interesse an Inhalten, Zugriffszeiten);
          Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).
        </li>
        <li>
          <strong>Betroffene Personen:</strong> Nutzer (z.B. Webseitenbesucher,
          Nutzer von Onlinediensten).
        </li>
        <li>
          <strong>Zwecke der Verarbeitung:</strong> Bereitstellung unseres
          Onlineangebotes und Nutzerfreundlichkeit.
        </li>
      </ul>
      <Typography variant="h5" id="m15">
        Änderung und Aktualisierung der Datenschutzerklärung
      </Typography>
      <Typography paragraph>
        Wir bitten Sie, sich regelmäßig über den Inhalt unserer
        Datenschutzerklärung zu informieren. Wir passen die Datenschutzerklärung
        an, sobald die Änderungen der von uns durchgeführten Datenverarbeitungen
        dies erforderlich machen. Wir informieren Sie, sobald durch die
        Änderungen eine Mitwirkungshandlung Ihrerseits (z.B. Einwilligung) oder
        eine sonstige individuelle Benachrichtigung erforderlich wird.
      </Typography>
      <Typography paragraph>
        Sofern wir in dieser Datenschutzerklärung Adressen und
        Kontaktinformationen von Unternehmen und Organisationen angeben, bitten
        wir zu beachten, dass die Adressen sich über die Zeit ändern können und
        bitten die Angaben vor Kontaktaufnahme zu prüfen.
      </Typography>
      <Typography id="m10">Rechte der betroffenen Personen</Typography>
      <Typography paragraph>
        Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die
        sich insbesondere aus Art. 15 bis 21 DSGVO ergeben:
      </Typography>
      <ul>
        <li>
          <strong>
            Widerspruchsrecht: Sie haben das Recht, aus Gründen, die sich aus
            Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung
            der Sie betreffenden personenbezogenen Daten, die aufgrund von Art.
            6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen; dies
            gilt auch für ein auf diese Bestimmungen gestütztes Profiling.
            Werden die Sie betreffenden personenbezogenen Daten verarbeitet, um
            Direktwerbung zu betreiben, haben Sie das Recht, jederzeit
            Widerspruch gegen die Verarbeitung der Sie betreffenden
            personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen;
            dies gilt auch für das Profiling, soweit es mit solcher
            Direktwerbung in Verbindung steht.
          </strong>
        </li>
        <li>
          <strong>Widerrufsrecht bei Einwilligungen:</strong> Sie haben das
          Recht, erteilte Einwilligungen jederzeit zu widerrufen.
        </li>
        <li>
          <strong>Auskunftsrecht:</strong> Sie haben das Recht, eine Bestätigung
          darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf
          Auskunft über diese Daten sowie auf weitere Informationen und Kopie
          der Daten entsprechend den gesetzlichen Vorgaben.
        </li>
        <li>
          <strong>Recht auf Berichtigung:</strong> Sie haben entsprechend den
          gesetzlichen Vorgaben das Recht, die Vervollständigung der Sie
          betreffenden Daten oder die Berichtigung der Sie betreffenden
          unrichtigen Daten zu verlangen.
        </li>
        <li>
          <strong>
            Recht auf Löschung und Einschränkung der Verarbeitung:
          </strong>{" "}
          Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht, zu
          verlangen, dass Sie betreffende Daten unverzüglich gelöscht werden,
          bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben eine
          Einschränkung der Verarbeitung der Daten zu verlangen.
        </li>
        <li>
          <strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das Recht,
          Sie betreffende Daten, die Sie uns bereitgestellt haben, nach Maßgabe
          der gesetzlichen Vorgaben in einem strukturierten, gängigen und
          maschinenlesbaren Format zu erhalten oder deren Übermittlung an einen
          anderen Verantwortlichen zu fordern.
        </li>
        <li>
          <strong>Beschwerde bei Aufsichtsbehörde:</strong> Sie haben
          unbeschadet eines anderweitigen verwaltungsrechtlichen oder
          gerichtlichen Rechtsbehelfs das Recht auf Beschwerde bei einer
          Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen
          Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen
          Verstoßes, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie
          betreffenden personenbezogenen Daten gegen die Vorgaben der DSGVO
          verstößt.
        </li>
      </ul>
      <Typography variant="h5" id="m42">
        Begriffsdefinitionen
      </Typography>
      <Typography paragraph>
        In diesem Abschnitt erhalten Sie eine Übersicht über die in dieser
        Datenschutzerklärung verwendeten Begrifflichkeiten. Viele der Begriffe
        sind dem Gesetz entnommen und vor allem im Art. 4 DSGVO definiert. Die
        gesetzlichen Definitionen sind verbindlich. Die nachfolgenden
        Erläuterungen sollen dagegen vor allem dem Verständnis dienen. Die
        Begriffe sind alphabetisch sortiert.
      </Typography>
      <ul>
        <li>
          <strong>Personenbezogene Daten:</strong> "Personenbezogene Daten“ sind
          alle Informationen, die sich auf eine identifizierte oder
          identifizierbare natürliche Person (im Folgenden "betroffene Person“)
          beziehen; als identifizierbar wird eine natürliche Person angesehen,
          die direkt oder indirekt, insbesondere mittels Zuordnung zu einer
          Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu
          einer Online-Kennung (z.B. Cookie) oder zu einem oder mehreren
          besonderen Merkmalen identifiziert werden kann, die Ausdruck der
          physischen, physiologischen, genetischen, psychischen,
          wirtschaftlichen, kulturellen oder sozialen Identität dieser
          natürlichen Person sind.{" "}
        </li>
        <li>
          <strong>Verantwortlicher:</strong> Als "Verantwortlicher“ wird die
          natürliche oder juristische Person, Behörde, Einrichtung oder andere
          Stelle, die allein oder gemeinsam mit anderen über die Zwecke und
          Mittel der Verarbeitung von personenbezogenen Daten entscheidet,
          bezeichnet.{" "}
        </li>
        <li>
          <strong>Verarbeitung:</strong> "Verarbeitung" ist jeder mit oder ohne
          Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede solche
          Vorgangsreihe im Zusammenhang mit personenbezogenen Daten. Der Begriff
          reicht weit und umfasst praktisch jeden Umgang mit Daten, sei es das
          Erheben, das Auswerten, das Speichern, das Übermitteln oder das
          Löschen.{" "}
        </li>
      </ul>
      <Typography textAlign={"center"}>
        <a
          href="https://datenschutz-generator.de/"
          title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken."
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <img
            src="https://datenschutz-generator.de/wp-content/plugins/ts-dsg/images/dsg-seal/dsg-seal-pp-de.png"
            alt="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken."
            width="250"
            height="250"
          />
        </a>
      </Typography>
    </Container>
  );
}
