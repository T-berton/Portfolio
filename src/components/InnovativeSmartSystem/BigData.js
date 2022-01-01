import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Card from "react-bootstrap/Card";




function BigData() {
  return (
    <Container fluid className="about-section">
    <Particle />
    <Container>
      <Row style={{ justifyContent: "center", padding: "20px" }}>
        <Col
          md={12}
          style={{
            justifyContent: "center",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <a style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            <strong> Descriptif et Analyse - Big Data</strong>
          </a>
          <br/>
          <br/>
          <p style={{textAlign:"justify"}}> 
          Ce module regroupe les cours de communication mobile, de réseau émergent, de protocole utilisés pour les objets connectés ainsi que l'aspect énergétique et sécurité.


          </p>
          </Col>

          </Row>


          <Row style={{ justifyContent: "center", padding: "0px" }}>
        <Col
          md={12}
          style={{
            justifyContent: "center",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <h style={{ fontSize: "2.1em", paddingBottom: "0px" }}>
            <strong className="purple"> Architecture de service </strong>
          </h>

                  <Card className="quote-card-view">
          <Card.Body>
              <blockquote className="blockquote mb-0">
              <p style={{ justifyContent: "left", textAlign: "justify" }}>
              <h1 style={{ fontSize: "1.4em", paddingBottom: "0px" }}>
                  </h1>
                  Pour nous introduire les différents capteurs existants et comment les implémenter, nous avons d'abord fais une semaine de stage dans un laboratoire afin de réaliser son propre capteur. Dans notre cas il s'agissait d'un capteur de gaz à nano-particules. Ensuite nous avons vu comment les implémenter avec des montages électriques dits « conditionneurs » (pont, amplificateurs...) qui leur sont associés pour optimiser leurs performances et récupérer leurs données.
                  <br/>
                  <br/>
                  Après avoir conçu et developpé notre propre capteur de gaz, nous avons dû présenter ses différents caractéristiques à travers sa datasheet. Vous trouverez la datasheet de mon capteur <a href={"/projetintegrateur"}> <strong className="purple"> ici.</strong> </a>

                  <br/>
                  <br/>
                  Ayant suivi une formation en electronique et automatique auparavant, je n'ai eu aucune difficultés à appréhender ce cours. Nous avions déjà vu toutes ses notions mais cela m'a permis d'avoir un rappel sur plusieurs montages electriques.
                 

              </p>

              </blockquote>
          </Card.Body>
          </Card>
          </Col>

          <Col
          md={12}
          style={{
            justifyContent: "center",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <h style={{ fontSize: "2.1em", paddingBottom: "0px" }}>
            <strong className="purple"> Intergiciel pour l'internet des objets </strong>
          </h>

          <Card className="quote-card-view">
          <Card.Body>
              <blockquote className="blockquote mb-0">
              <p style={{ justifyContent: "left", textAlign: "justify" }}>
              <h1 style={{ fontSize: "1.4em", paddingBottom: "0px" }}>
                  </h1>
                 Un objet connecté est un système comprenent un ensemble (capteur, actionneur et Microcontrôleur), nous avons vu à travers cette matière comment les associer ensemble dans un cas pratique. Il était question de réaliser un shield Arduino. Vous trouverez plus d'explications <a href={"/projetintegrateur"}> <strong className="purple"> ici.</strong> </a> 
                  <br/>
                  <br/>
                  Je n'ai pas eu vraiment de difficultés à réaliser le projet car il s'agissait de beaucoup de rappel que nous avons déjà eu l'occasion de voir dans les années passés. J'ai par contre appris sur l'aspect réseaux, notamment à implémenter une carte LoRaWAN à un Microcontrôleur et comment le connecter à une gateway (TheThingsNetwork). Les montages electriques et le routage sur KICAD étaient de bons rappels.
                 

              </p>

              </blockquote>
          </Card.Body>
          </Card>

          </Col>

          <Col
          md={12}
          style={{
            justifyContent: "center",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <h style={{ fontSize: "2.1em", paddingBottom: "0px" }}>
            <strong className="purple"> Adaptabilité : Cloud et gestion autonomique </strong>
          </h>

          <Card className="quote-card-view">
          <Card.Body>
              <blockquote className="blockquote mb-0">
              <p style={{ justifyContent: "left", textAlign: "justify" }}>
              <h1 style={{ fontSize: "1.4em", paddingBottom: "0px" }}>
                  </h1>
                 Un objet connecté est un système comprenent un ensemble (capteur, actionneur et Microcontrôleur), nous avons vu à travers cette matière comment les associer ensemble dans un cas pratique. Il était question de réaliser un shield Arduino. Vous trouverez plus d'explications <a href={"/projetintegrateur"}> <strong className="purple"> ici.</strong> </a> 
                  <br/>
                  <br/>
                  Je n'ai pas eu vraiment de difficultés à réaliser le projet car il s'agissait de beaucoup de rappel que nous avons déjà eu l'occasion de voir dans les années passés. J'ai par contre appris sur l'aspect réseaux, notamment à implémenter une carte LoRaWAN à un Microcontrôleur et comment le connecter à une gateway (TheThingsNetwork). Les montages electriques et le routage sur KICAD étaient de bons rappels.
                 

              </p>

              </blockquote>
          </Card.Body>
          </Card>

          </Col>

          </Row>

          <Row style={{ justifyContent: "center", padding: "30px" }}>
        <Col
          md={12}
          style={{
            justifyContent: "center",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <h style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
          <strong className="purple"> Tableau récapitulatif des  Compétences </strong>
          </h>

          </Col>

          </Row>

          

        </Container>
        </Container>
  );
}

export default BigData;