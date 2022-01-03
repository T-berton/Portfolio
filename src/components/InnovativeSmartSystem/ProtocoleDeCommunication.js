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
            md={12}
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
                   Dans un premier temps, il nous était demander de rédiger un rapport et de présenter un protocole de communication dans le domaine de l'IOT. Nous avons décidé de prendre le protocole NB-IOT. Il s'agit d'un protocole sans fil spécialisé dans la connexion d'appareils Machine-To-Machine ou IoT sur des réseaux mobiles déjà établis, et le traitement de petites quantités de données bidirectionnelles.
                   <br/>
                   Ensuite, nous avions un autre rapport et une présentation à faire sur les différents protocoles MAC de réseaux de capteurs sans fil. J'ai rédigé un rapport avec plusieurs protocole MAC différents en présentant leurs avantages/inconvénients dans les différents cas d'utilisation. 
                    <br/>
                    <br/>
                    Ce cours était très complet et diversifié. Même si j'avais déjà quelques bases de réseaux, j'ai pu découvrir beaucoup de notions, sur les différents protocoles pour l'IOT à différent niveaux (UMTS, GSM, 3G, 4G, 5G, Zigbee, LoRa, Sigfox), ainsi que l'aspect énergétique. Désormais, lorsqu'il me sera demandé de concevoir un objet intelligent je pourrai en déduire quel type de protocole à utiliser en fonction des contraintes (distance d'emission/reception, consommation électriques, débit etc...). La dimension énergétique d'un objet dans l'IOT est très importante, donc le choix du protocole est important. Comme par exemple dans le projet intégrateur.
                    <br/> De manière général, je n'ai pas eu beaucoup de difficultés, j'en ai eu quelques une notamment lors de la rédaction des rapports sur les protocoles de réseaux de capteurs sans fil dans le monde de l'IOT, car il s'agissait de notions très pointues et techniques. Le nombre important de recherche sur les différents rapport à rendre m'as permis d'assimiler à mon rythme les notions attendues.

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
              <strong className="purple"> Sécurité dans les réseaux d'objets connectés </strong>
            </h>

            <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                <p style={{ justifyContent: "left", textAlign: "justify" }}>
                <h1 style={{ fontSize: "1.4em", paddingBottom: "0px" }}>
                    </h1>
                    Le but de ce cours était de nous présenter les principaux concepts de sécurité des réseaux d'objets connectés, notamment les attaques et les défenses (détection des erreurs et des défauts) concernant les réseaux sans fil pour l'IOT. Ce cours passe en revue les principaux types d'attaques, ainsi que la manière dont nous pouvons mettre en place des défenses pour les contrer.                    <br/>
                    <br/>
                    Les cours étaient très complets sur la sécurité dans l'IOT. Cependant, nous n'avons pas pratiqué et par conséquent je ne serais pas nécessairement capable de mettre en place une défense de sécurité.           

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
