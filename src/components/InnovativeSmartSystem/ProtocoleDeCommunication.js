import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Card from "react-bootstrap/Card";



function ProtocoleDeCommunication() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "30px" }}>
          <Col
            md={12}
            style={{
              justifyContent: "center",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <a style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong> Descriptif et Analyse - Communication</strong>
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
            md={6}
            style={{
              justifyContent: "center",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <h style={{ fontSize: "2.1em", paddingBottom: "0px" }}>
              <strong className="purple"> Protocole pour les objets connectés </strong>
            </h>

                    <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                <p style={{ justifyContent: "left", textAlign: "justify" }}>
                <h1 style={{ fontSize: "1.4em", paddingBottom: "0px" }}>
                    </h1>
                    Au travers de ce cours, nous avons pu apprendre beaucoup sur les différentes technologies utilisées par les appareils IOT pour communiquer et sur l'impact des appareils sans fil sur notre monde. 
                    <br/>
                    <br/>
                   Dans un premier temps, il nous était demander de rédiger un rapport et de présenter un protocole de communication dans le domaine de l'IOT. Nous avons décidé de prendre le protocole NB-IOT. Nous avons choisi ce protocole car il Il s'agit d'un protocole sans fil spécialisé dans la connexion d'appareils Machine-To-Machine ou IoT sur des réseaux mobiles déjà établis, et le traitement de petites quantités de données bidirectionnelles.
                    <br/>
                    <br/>
                    J'ai pu découvrir beaucoup de notions à travers ce cours. auparavant j'avais déjà quelques bases de réseaux ce qui m'a permis tout de même de bien assimiler les notions. J'ai eu quelques difficultés à rédiger le rapport sur les protocoles de réseaux de capteurs sans fil dans le monde de l'IOT, car il s'agissait de notions très pointues et techniques. Le nombre important de recherche sur les différents rapport à rendre m'as permis d'assimiler à mon rythme les notions attendues.

                </p>

                </blockquote>
            </Card.Body>
            </Card>
            </Col>

            <Col
            md={6}
            style={{
              justifyContent: "center",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <h style={{ fontSize: "2.1em", paddingBottom: "0px" }}>
              <strong className="purple"> Sécurité dans les réseaux d'objets connectés </strong>
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

export default ProtocoleDeCommunication;
