import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Card from "react-bootstrap/Card";
import { BsFillCaretRightFill } from "react-icons/bs";
import pcb from "../../Assets/pcb_smart_device.png"




function CapteurGaz() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>


        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={12}
            style={{
              justifyContent: "center",
            }}
          >

            <h1 style={{ fontSize: "2.8em" }}>
              <strong className="purple"> Smart Device with Gaz Sensor </strong>
            </h1>
          </Col>

        </Row>

        <Row style={{ justifyContent: "center" }}>
          <Col
            md={12}
            style={{
              justifyContent: "center",
            }}
          >
            <blockquote className="blockquote mb-0">
              <p style={{ justifyContent: "left", textAlign: "justify" }}>
                <h1 style={{ fontSize: "1.4em" }}>
                  <strong className="purple">Contexte </strong>
                </h1>
                Ce projet a été réalisé dans le cadre de ma formation, pour l'unité de formation "Smart Device". Pour réaliser ce projet, j'étais dans une équipe de trois. Le projet était divisé en deux parties. Dans un premier temps, nous avons eu une semaine de stage dans un laboratoire de recherche "AIME", pour concevoir un capteur de gaz à nanoparticules. A la fin du stage, nous avons elaboré une datasheet correspondant à notre capteur.
                <br />
                <br />
                Ensuite, il était question de realiser un système connecté et intelligent qui utilisait ce capteur de gaz. Nous devions donc développer le côté hardware et software du système.

              </p>
              <br />
              <p style={{ justifyContent: "left", textAlign: "justify" }}>
                <h1 style={{ fontSize: "1.4em" }}>
                  Ma<strong className="purple"> Contribution Personnelle </strong>
                </h1>
                Concernant la partie hardware, nous avons décidé de faire un shield Arduino, dans lequel nous pourrions brancher un microcontrolleur (l'ESP32 dans notre cas), un récepteur LoRaWAN ,un capteur de gaz arduino (de marque groove) et notre capteur de gaz crée à l'AIME.
                Notre équipe étant formé de trois élève ingénieur en embarqué, nous étions à l'aise dans la réalisation du circuit electronique et du PCB sous KICAD. Pour rajouter un peu d'automatique dans notre projet, nous avons décidé d'implémenter une commande PID pour maintenir une température de 200°C (température pour laquelle le capteur à nano-particule est le plus fonctionnel).
                Nous avons également implémenté une interruption matérielle qui se déclenche lorsque le capteur de gaz détecte une valeur seuil (qui aura été préalablement choisis).<br /> <br />


              </p>

            </blockquote>
          </Col>
          <Col md={8} >
            <img src={pcb} className="img-fluid rounded" />
          </Col>
          <Col
            md={12}
            style={{
              justifyContent: "center",
            }}
          >
            <Card className="quote-card-view">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p style={{ justifyContent: "left", textAlign: "justify" }}>
                    La partie software était divisé en quatre étapes : <br />
                    <BsFillCaretRightFill className="blue" /> Initialisation du récepteur LoRaWAN pour envoyer les données à une gateway, dans notre cas il s'agissait de "The Things Network"(TTN) <br />
                    <BsFillCaretRightFill className="blue" /> Récupération des données du capteur pour les stocker dans un tableau <br />
                    <BsFillCaretRightFill className="blue" /> Emission de ces données <br />
                    <BsFillCaretRightFill className="blue" /> Réception et traitement des données sur la gateway
                  </p>
                </blockquote>
              </Card.Body>
            </Card>

          </Col>

          <Col
            md={12}
            style={{
              justifyContent: "center",
            }}
          >
            <Card className="quote-card-view">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p style={{ justifyContent: "left", textAlign: "justify" }}>

                    Enfin, nous avons également développer un code pour pouvoir gérer notre commande PID et la gestion de notre interruption matérielle qui déclenche une alarme signalant un danger dû à la présence de certain gazs de trop grande quantité dans la pièce où se situe le capteur.
                    Vous trouverez le lien github de notre projet  <a href="https://github.com/MOSH-Insa-Toulouse/2021-2022-BOUKEZZATA-BERTON-MESLOUH">ici
            </a>.
                  </p>
                </blockquote>
              </Card.Body>
            </Card>

          </Col>

        </Row>



      </Container>
    </Container >
  );
}

export default CapteurGaz;
