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
            <strong> Descriptif et Analyse - Gestion des données </strong>
          </a>
          <br/>
          <br/>
          <p style={{textAlign:"justify"}}> 
          Ce module est un introduction aux concepts de données massives "Big Data" et au Web Sémantique avec la notion d'ontologie.


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
            <strong className="purple"> Big Data </strong>
          </h>

                  <Card className="quote-card-view">
          <Card.Body>
              <blockquote className="blockquote mb-0">
              <p style={{ justifyContent: "left", textAlign: "justify" }}>
              <h1 style={{ fontSize: "1.4em", paddingBottom: "0px" }}>
                  </h1>
                  Le Big Data est au coeur de notre vie quotidienne à travers les objets connectés, les réseaux sociaux.... Ces cours nous ont permis de découvrir le concept de Machine Learning avec le "Clustering".

                  <br/>
                  <br/>
                  Nous avons réalisés plusieurs travaux pratiques pour appréhender le concept de Clustering. Le but est d'utiliser des approches mathématiques sur des jeux de données, pour pouvoir les classer et former des familles de données qui ont des similitudes entre eux. Nous avons découvert et tester trois différentes méthodes de clustering (KMEAN, DBSCAN et Agglomerative) sur plusieurs type de jeu de données.  

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
            <strong className="purple"> Analyse de données sémantiques</strong>
          </h>

          <Card className="quote-card-view">
          <Card.Body>
              <blockquote className="blockquote mb-0">
              <p style={{ justifyContent: "left", textAlign: "justify" }}>
              <h1 style={{ fontSize: "1.4em", paddingBottom: "0px" }}>
                  </h1>
                  Le Web sémantique est une vision d'une extension du Web existant, qui fournit aux programmes logiciels des métadonnées (qui sont partagées et réutilisées entre plusieurs applications, entreprises...) interprétables par les machines. En conséquence, les ordinateurs sont en mesure de faire des interprétations significatives, de la même manière que les humains traitent les informations pour atteindre leurs objectifs. 
                  Ce cours est donc une introduction à tous ces concepts.
                  <br/>
                  <br/>
                  Pour mieux appréhender les différents concepts d'ontologies et de web semantiques, nous avons réalisés deux travaux pratiques. Le premier était de créer une ontologie sur les phénomènes météorologiques avec le logiciel "Protégé".
    
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