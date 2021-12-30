import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import safe_city_for_cyclist from "../../Assets/Projects/safe_city_for_cyclist.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes récents <strong className="purple"> Projets </strong>
        </h1>
        <p style={{ color: "white" }}>
          Vous trouverez plusieurs projets en rapport avec l'IOT et l'embarqué durant ma formation
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={safe_city_for_cyclist}
              isBlog={false}
              title="International Hackathon"
              chemin="/hackathon"
              description="Ce projet a été crée dans le cadre d'un Hackathon, il s'agit d'un concours international dans le domaine de l'IOT organisé par KETI (Korea Electronics Technology Ins-tute) et ETSI (European Telecommunication Standards Institute). Plusieurs université, écoles d'ingénieur (dont l'INSA Toulouse) du monde entier ont participé à ce concours. L'objectif est de construire une solution IoT qui
              peut aider les citoyens, à résoudre des problèmes majeurs d'environnement et de société.
              La seule règle à respecter est d'utiliser le protocole oneM2M. "

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Projet Innovant - Safe City For Cyclist "
              chemin="/projetintegrateur"
              description= "Il s'agit du plus gros projet sur lequel nous avons travaillé en équipe durant ma dernière année à l'INSA. Ce projet a pour but de concevoir et developper une application en rapport avec l'IOT, et de présenter un premier prototype à la fin de la formation. Il était possible de choisir plusieurs projets en provenance d'entreprises. Dans mon cas, nous avons repris le même sujet du Hackathon international et nous l'avons grandement amélioré."              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Réalisation d'un objet intelligent et connecté"
              chemin="/capteurgaz"
              description="A travers ce projet, nous devions réaliser la conception d'un Shield Arduino permettant l'utilisation d'un capteur de gaz à nanoparticules relié à une antenne LoRaWAN pour envoyer des données à une gateway."
            />
          </Col>
          </Row>
          </Container>

          <Container>
          <h1 className="project-heading">
          Mes  <strong className="purple"> Autres Projets </strong>
          </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Développement logiciel d'une IHM sous Qt en C++"
              description=""
              link="https://github.com/soumyajit4419/Bits-0f-C0de"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Finaliste du concours régionale entreprenariat - CRECE"
              description=""
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Développement d'un robot en RUST/C "
              description="En construction...Il s'agit du sujet de mon alternance."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;