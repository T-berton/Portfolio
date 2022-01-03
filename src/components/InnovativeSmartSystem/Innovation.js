import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Card from "react-bootstrap/Card";



function ProjetInnovant() {
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
          <h style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            <strong> Descriptif et Analyse - Innovation et Humanité </strong>
          </h>
          <br/>
          <br/>
          <p style={{textAlign:"justify"}}> 
          Le métier d'ingénieur ne se résume pas qu'à un profil purement technique, il faut également avoir d'autres compétences transverses. Dans ce module nous avons eu l'occasion de découvrir une méthode lié à l'innovation, la méthode "TRIZ" ainsi que des cours sur l'aspect innovation d'un point de vue business. Etant en alternance, je n'ai pas encore pu suivre tous les cours liés au module Humanité comme la Psychologie (que je ferai au mois d'avril). 
          

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
            <strong className="purple"> Innovation </strong>
          </h>  

 
                  <Card className="quote-card-view">
          <Card.Body>
              <blockquote className="blockquote mb-0">
              <p style={{ justifyContent: "left", textAlign: "justify" }}>
              <h1 style={{ fontSize: "1.4em", paddingBottom: "0px" }}>
                  </h1>
                  L'objectif du cours "Innovation, Social Accetability and Business Development" est de nous présenter les outils de gestion utiles au développement de projets innovants. Nous avons pu découvrir différentes notions de gestion de projets et d'organisation qui sont favorable pour mettre en oeuvre des projets innovants.
                  <br/>
                  <br/>
                  Pour mettre en oeuvre les concepts appris, nous avons élaboré un briefing pour notre projet innovant. Vous pouvez le trouver ici.
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
            <strong className="purple"> Méthode de Créativité - TRIZ </strong>
          </h>

          <Card className="quote-card-view">
          <Card.Body>
              <blockquote className="blockquote mb-0">
              <p style={{ justifyContent: "left", textAlign: "justify" }}>
              <h1 style={{ fontSize: "1.4em", paddingBottom: "0px" }}>
                  </h1>
                Ce cours fais office d'introduction à la méthode TRIZ, qui est une méthode qui facilité la créativite pour résoudre des problèmes d'innovation pour un objet ou pour tout simplement pousser à la créativité d'une nouvelle invention.

                <br/>
                <br/>
                Par binôme, nous devions appliquer la méthode TRIZ sur un objet spécifique afin de l'améliorer. Dans mon cas, nous avons décidé de l'appliquer sur la gourde. Vous pouvez trouver notre rapport ici.

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

export default ProjetInnovant;