import React from "react";
import ProjectIntegrateurCard from "./ProjectIntegrateurCard";
import NouvelleArchitectureCard from "./NouvelleArchitectureCard";
import ContributionPersonnelleCard from "./ContributionPersonnelleCard";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

import algo from "../../Assets/Projects/projet_algo.PNG";
import hard from "../../Assets/Projects/projet_archi.PNG";
import archi from "../../Assets/Projects/projet_architec.PNG";
import speed from "../../Assets/Safe_City_For_Cyclists.gif"


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
            <blockquote className="blockquote mb-0">
              <p style={{ justifyContent: "left", textAlign: "justify" }}>
                Notre dispositif embarqué sur le vélo utilise deux LiDAR pour détecter les véhicules et communique par Bluetooth Low Energy (BLE) pour informer l'utilisateur qu'un véhicule a été détecté. Le téléphone conservera ces rapports hors ligne et ne les téléchargera via les réseaux Wi-Fi ou cellulaires que lorsque l'utilisateur l'autorisera. Ces données seront ensuite stockées dans une base de données centrale, accessible par une API REST.

              </p>
            </blockquote>

          </Col>
          <Col md={5} style={{ paddingTop: 80 }}>
            <img src={archi} className="img-fluid rounded w-100" />

          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "left",
              paddingTop: "0px",
              paddingBottom: "0px",
            }}
          >
            <blockquote className="blockquote mb-0">
              <p style={{ justifyContent: "left", textAlign: "justify" }}>
                Nous voulions créer un système permettant aux cyclistes d'exprimer leurs plaintes et de s'entraider. Nous voulions un système ouvert que chacun pourrait utiliser et auquel il pourrait contribuer. Comme presque tout le monde possède un smartphone et une connexion internet, l'utilisation de BLE et d'une application mobile était le meilleur moyen de s'assurer que tout le monde puisse avoir accès à notre système. Au final, il suffit à l'utilisateur de télécharger l'application et d'installer notre dispositif sur son vélo pour pouvoir utiliser notre système.


              </p>
            </blockquote>

          </Col>

          <Col md={5} style={{ paddingTop: 10 }}>
            <img src={hard} className="img-fluid rounded w-100" />

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
                Notre système étant alimenté par une batterie, nous avons voulu lui implémenter un dynamo afin qu'il puisse y avoir une deuxième source d'énergie pour alimenter le système. Cela permettrait de réduire la consommation énergétique de la batterie et d'avoir une autonomie plus grande. Nous avons donc conçu une carte electronique sur KICAD mais n'avons pas eu le temps de l'imprimer.
              </p>
            </blockquote>


          </Col>

        </Row>

        <Row style={{ justifyContent: "left", padding: "0px" }}>
          <Col
            md={8}
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
          <Col md={4} style={{ paddingTop: 200 }}>
            <img src={speed} className="img-fluid rounded" />
          </Col>

        </Row>



      </Container>
    </Container >
  );
}

export default ProjectIntegrateur;
