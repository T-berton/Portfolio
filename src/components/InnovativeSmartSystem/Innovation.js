import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Card from "react-bootstrap/Card";
import ProgressBar from "@ramonak/react-progress-bar";

import triz from "../../Assets/Matiere/Triz.PNG"

import pdflogo from "../../Assets/logo-pdf.svg"
import rapport_triz from "../../Assets/Annexe/Méthode_TRIZ_BERTON_BOUKEZZATA.pdf"

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
            <br />
            <br />
            <p style={{ textAlign: "justify" }}>
              Le métier d'ingénieur ne se résume pas qu'à un profil purement technique, il faut également avoir d'autres compétences transverses. Dans ce module nous avons eu l'occasion de découvrir une méthode lié à l'innovation, la méthode "TRIZ" ainsi que des cours sur l'aspect innovation d'un point de vue business. Etant en alternance, je n'ai pas encore pu suivre tous les cours liés au module Humanité comme la Psychologie, le Sport, le Team Management et le PPI (que je ferai au mois d'avril).


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
          </Col>
          <Col
            md={12}
            style={{
              justifyContent: "center",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <h style={{ fontSize: "1.4em" }}>
              <strong className="blue"> Description du module </strong>
            </h>
            <blockquote className="blockquote mb-0">
              <p style={{ justifyContent: "left", textAlign: "justify" }}>

                L'objectif du cours "Innovation, Social Accetability and Business Development" est de nous présenter les outils de gestion utiles au développement de projets innovants. Nous avons pu découvrir différentes notions de gestion de projets et d'organisation qui sont favorable pour mettre en oeuvre des projets innovants.

              </p>

            </blockquote>

          </Col>

          <Col
            md={12}
            style={{
              justifyContent: "center",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <h style={{ fontSize: "1.4em", paddingBottom: "0px" }}>
              <strong className="blue"> Problèmes rencontrés </strong>

            </h>
            <blockquote className="blockquote mb-0">
              <p style={{ justifyContent: "left", textAlign: "justify" }}>
                Pour mettre en oeuvre les concepts appris, nous avons élaboré un briefing pour notre projet innovant.
                Nous avons également fait une présentation pour montrer et expliquer les notions d'évalutions des risques, nos méthodes de gestion par rapport à notre projet innovant.
                Je n'avais aucune difficulté à appréhender cette matière, car j'ai déjà participé l'an dernier à un concours de jeune entrepreuner dans lequel j'ai dû faire un business plan très détaillé avec toutes les notions cités dans ce cours.
              </p>

            </blockquote>
          </Col>

          <Col
            md={12}
            style={{
              justifyContent: "center",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <h style={{ fontSize: "1.4em", paddingBottom: "0px" }}>
              <strong className="blue"> Compétences acquises </strong>
            </h>

            <div className="mt-3" style={{ textAlign: "start" }}>
              <label>Résoudre un problème de façon créative  </label>
              <ProgressBar
                completed={100}
                labelColor="#ffffff"
                labelAlignment="center"
                bgColor="#2d1950"
                className="wrapper"
                animateOnRender={true}
                labelClassName="label"
              />
              <br />
              <br />
              <label>Développer la première étape de l'innovation  	</label>
              <ProgressBar
                completed={100}
                // customLabel="Etre capable de fabriquer un capteur à nanoparticules (synthèse chimique, assemblage, test) avec les outils de la micro-électronique  "
                labelColor="#ffffff"
                labelAlignment="center"
                bgColor="#2d1950"
                className="wrapper"
                animateOnRender={true}
                labelClassName="label"
              />

              <br />
              <br />
              <label> Appréhender les processus de production, de validation, de diffusion, d’acceptance (risque organisationnel et social), et de répercussion de l’innovation   </label>
              <ProgressBar
                completed={100}
                // customLabel="Etre capable de fabriquer un capteur à nanoparticules (synthèse chimique, assemblage, test) avec les outils de la micro-électronique  "
                labelColor="#ffffff"
                labelAlignment="center"
                bgColor="#2d1950"
                className="wrapper"
                animateOnRender={true}
                labelClassName="label"
              />
              <br />
              <br />
              <label> Etablir un business plan (modalités de financement de l’innovation, marketing des produits innovants) 	   </label>
              <ProgressBar
                completed={100}
                // customLabel="Etre capable de fabriquer un capteur à nanoparticules (synthèse chimique, assemblage, test) avec les outils de la micro-électronique  "
                labelColor="#ffffff"
                labelAlignment="center"
                bgColor="#2d1950"
                className="wrapper"
                animateOnRender={true}
                labelClassName="label"
              />

            </div>
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
              <strong className="purple"> Méthode de Créativité - TRIZ </strong>
            </h>

          </Col>

          <Col
            md={12}
            style={{
              justifyContent: "center",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <h style={{ fontSize: "1.4em", paddingBottom: "0px" }}>
              <strong className="blue"> Description du module </strong>
            </h>
            <blockquote className="blockquote mb-0">
              <p style={{ justifyContent: "left", textAlign: "justify" }}>

                Ce cours fais office d'introduction à la méthode TRIZ, qui est une méthode qui facilité la créativite pour résoudre des problèmes d'innovation pour un objet ou pour tout simplement pousser à la créativité d'une nouvelle invention.
              </p>

            </blockquote>

          </Col>




          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <h style={{ fontSize: "1.4em", paddingBottom: "0px" }}>
              <strong className="blue"> Problèmes rencontrés </strong>
            </h>
            <blockquote className="blockquote mb-0">
              <p style={{ justifyContent: "left", textAlign: "justify" }}>
                Par binôme, nous devions appliquer la méthode TRIZ sur un objet spécifique afin de l'améliorer. Nous avons d’abord effectué une analyse précise de l’objet en question afin d’identifier une contraction de l’objet. Dans mon cas, nous avons décidé de l'appliquer sur la gourde, et la contradiction que nous avons pu définir est la suivante : « Avoir une gourde à la fois à grand volume mais qui soit également facilement transportable ».
                Ensuite, en appliquant la méthode TRIZ, nous avons pu élaborer plusieurs solutions pour répondre à cette problématique, vous trouverez en bas tout notre analyse dans un rapport.

              </p>
            </blockquote>
          </Col>

          <Col md={5} style={{ paddingTop: 40 }}>
            <img src={triz} className="img-fluid rounded" />
          </Col>

        </Row>
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
              <strong className="purple"> Analyse de l'Unité de formation  </strong>
            </a>

            <blockquote className="blockquote mb-0">
              <p style={{ justifyContent: "left", textAlign: "justify" }}>
                Il est compliqué pour moi de devoir me noter sur ce module dans le sens où je n'ai pas fait encore toutes les matières car je suis en alternance. Mais je pense que grâce à mon expérience professionnelle, j'ai pu acquérir toutes ces notions de travail d'équipe. De plus, j'ai participé l'an dernier à un concours de jeune entrepreneur (CRECE), où j'ai terminé finaliste et j'ai donc énormément appris pour convaincre des gens à adhérer à notre projet et à gérer un projet innovant.
            
 
              </p>
            </blockquote>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", padding: "20px" }}>
          <Col
            md={12}
            style={{
              justifyContent: "center",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <h style={{ fontSize: "1.4em" }}>
              <strong className="blue"> Mes rapports </strong>
            </h>
          </Col>
          <Col
            md={12}
          >
            <a href={rapport_triz} target="Blank_">
              <img src={pdflogo} style={{ height: 64, width: 64 }} />
            </a>
            <p aria-hidden="true" ng-show="showTitle" class="thumbnail-name ng-binding">
              <strong>Rapport sur la Méthode Triz pour la gourde</strong>
            </p>


          </Col>
          </Row>


      </Container>
    </Container >
  );
}

export default ProjetInnovant;