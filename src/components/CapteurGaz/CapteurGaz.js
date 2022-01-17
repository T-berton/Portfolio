import React from "react";
import CapteurGazCard from "./CapteurGazCard";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Card from "react-bootstrap/Card";
import { BsFillCaretRightFill } from "react-icons/bs";




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
              paddingTop: "30px",
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

            <CapteurGazCard />
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
