import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ProjectCard2 from "./ProjetCards2";

import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import safe_city_for_cyclist from "../../Assets/Projects/safe_city_for_cyclist.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

import safe_city from "../../Assets/Safe_City_For_Cyclists.gif"
import smart from "../../Assets/Smart_Device.jpeg"

import actia from "../../Assets/ihm_actia.JPG"
import streamart from "../../Assets/logo_StreamArt.png"
import construction from "../../Assets/under_construction.jpg"
import pdf_stream from "../../Assets/Annexe/extrait business plan.pdf"
import pdf_actia from "../../Assets/Annexe/Poster_Berton_Thomas.pdf"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes récents <strong className="purple"> Projets </strong>
        </h1>
        <p style={{ color: "white" }}>
          Vous trouverez plusieurs projets en rapport avec l'IOT et l'embarqué durant ma dernière année à l'INSA.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={safe_city_for_cyclist}
              isBlog={false}
              title="International Hackathon"
              chemin="/hackathon"
              description="Ce projet a été crée dans le cadre d'un Hackathon, il s'agit d'un concours international dans le domaine de l'IOT organisé par KETI (Korea Electronics Technology Ins-tute) et ETSI (European Telecommunication Standards Institute). Plusieurs universités, écoles d'ingénieur (dont l'INSA Toulouse) du monde entier ont participé à ce concours. L'objectif est de construire une solution IoT qui
              peut aider les citoyens, à résoudre des problèmes majeurs d'environnement et de société.
              La seule règle à respecter est d'utiliser le protocole oneM2M. "

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={safe_city}
              isBlog={false}
              title="Projet Innovant - Safe City For Cyclist "
              chemin="/projetintegrateur"
              description= "Il s'agit du plus gros projet sur lequel nous avons travaillé en équipe durant ma dernière année à l'INSA. Ce projet a pour but de concevoir et developper une application en rapport avec l'IOT, et de présenter un premier prototype à la fin de la formation. Il était possible de choisir plusieurs projets en provenance d'entreprises. Dans mon cas, nous avons repris le même sujet du Hackathon international et nous l'avons grandement amélioré."              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smart}
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
          <p style={{ color: "white" }}>
          Vous trouverez divers projets de mon expérience professionnelle
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard2
              imgPath={actia}
              isBlog={false}
              sample={pdf_actia}
              title="Développement logiciel d'une IHM sous Qt en C++"
              description="Il s'agit du sujet de mon stage de 4A année où j'ai dû réaliser du développement logiciel sous QT pour Actia Automotive"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard2
              imgPath={streamart}
              isBlog={false}
              title="Finaliste du concours régionale entreprenariat - CRECE"
              sample={pdf_stream}
              description="Vous trouverez un extrait du Business Plan de STREAM ART. Pour plus de détails n'hésitez pas à me contacter."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard2
              imgPath={construction}
              isBlog={false}
              title="Développement d'un robot en RUST/C "
              description="En construction...Il s'agit du sujet de mon alternance."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;