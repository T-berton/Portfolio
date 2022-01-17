import React from "react";
import ProjectIntegrateurCard from "./ProjectIntegrateurCard";
import NouvelleArchitectureCard from "./NouvelleArchitectureCard";
import ContributionPersonnelleCard from "./ContributionPersonnelleCard";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

import algo from "../../Assets/Projects/projet_algo.PNG";
import hard from "../../Assets/Projects/projet_archi.PNG";
import archi from "../../Assets/Projects/projet_architec.PNG";


function ProjectIntegrateur() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "0px" }}>
          <Col
            md={12}
            style={{
              justifyContent: "center",
              paddingTop: "0px",
              paddingBottom: "0px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "0px" }}>
              <strong className="purple">Projet Integrateur</strong>
            </h1>

            <ProjectIntegrateurCard />

          </Col>

        </Row>

        <Row style={{ justifyContent: "left", padding: "0px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "left",
              paddingTop: "0px",
              paddingBottom: "0px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "0px", justifyContent: "left" }}>
              <strong className="purple">Nouvelle Architecture</strong>
            </h1>

            <NouvelleArchitectureCard />
          </Col>
          <Col md={5} style={{ paddingTop: 100 }}>
            <img src={archi} className="img-fluid rounded w-100" />

          </Col>


          <Col
            md={12}
            style={{
              justifyContent: "left",
              paddingTop: "0px",
              paddingBottom: "0px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "0px", justifyContent: "left" }}>
              <strong className="purple">Nouveau Schéma Hardware</strong>
            </h1>
            <blockquote className="blockquote mb-0">
              <p style={{ justifyContent: "left", textAlign: "justify" }}>
                Notre système étant alimenté par une batterie, nous avons voulu lui implémenter un dynamo rechargeant notre système lorsque que le vélo roule. Cela permettrait d'être au système d'être autonome en énergie. Nous avons donc conçu et imprimé une carte electronique pour mettre en place ce dynamo et récupérer l'energie pour alimenter notre batterie.
              </p>
            </blockquote>


          </Col>

        </Row>

        <Row style={{ justifyContent: "left", padding: "0px" }}>
          <Col
            md={12}
            style={{
              justifyContent: "left",
              paddingTop: "0px",
              paddingBottom: "0px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "0px", justifyContent: "left" }}>
              Ma <strong className="purple">Contribution Personnelle</strong>
            </h1>

            <ContributionPersonnelleCard />
          </Col>
          <Col md={12} style={{ paddingBottom: 30 }}>
            <img src={algo} className="img-fluid rounded w-100" />
          </Col>

        </Row>



      </Container>
    </Container>
  );
}

export default ProjectIntegrateur;
