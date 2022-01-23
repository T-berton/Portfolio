import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Card from "react-bootstrap/Card";

import clustering from "../../Assets/Matiere/Big_Data_clustering.PNG";
import ProgressBar from "@ramonak/react-progress-bar";

import { BsCheckBox } from "react-icons/bs"
import pdflogo from "../../Assets/logo-pdf.svg"
import githublogo from "../../Assets/GitHub-Logo.png"
import diapologo from "../../Assets/diapo_logo.jpg"




function Projet_Innovateur() {
    return (

        <Container fluid className="about-section">
            <Particle />
            <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col
                        md={12}
                        style={{
                            justifyContent: "center",
                            paddingTop: "10px",
                            paddingBottom: "10px",
                        }}
                    >
                        <a style={{ fontSize: "2.1em"}}>
                            <strong className="purple">  Partie Descriptif et Technique - Projet Innovant </strong>
                        </a>
                        <p style={{ textAlign: "center" }}>
                            Vous trouverez  la description et les détails techniques du Projet Innovant  <a href={"/projetintegrateur"}> <strong className="purple"> ici</strong></a>.

                        </p>
                    </Col>

                </Row>


                <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={12}
            style={{
              justifyContent: "center",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <a style={{ fontSize: "2.1em", paddingBottom: "10px" }}>
              <strong className="purple"> Analyse de l'Unité de Formation  </strong>
            </a>
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
              <strong className="blue"> Mon évaluation </strong>
            </h>

            <div className="mt-3" style={{ textAlign: "start" }}>
              <label>Analyser un problème issue d'une application réelle   </label>
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
              <label>Proposer une solution scientifique pour ce problème	  	</label>
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
              <label> Realiser un prototype fonctionnel pour ce probleme 	   </label>
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
              <label> Presenter et argumenter en anglais devant un jury les choix scientifiques faits 	 	   </label>
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
              <label> Réaliser un rapport synthètique en anglais du projet technique realisé 	 	   </label>
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
              <strong className="blue">  Mon Feedback </strong>
            </h>
            <blockquote className="blockquote mb-0">
              <p style={{ justifyContent: "left", textAlign: "justify" }}>
Il s'agit du projet sur lequel je me suis le plus investis ces derniers mois. Notre groupe était composé de deux 2AE (dont moi-même), deux IR et un MSIOT. Nous étions donc très complémentaires dans nos compétences et nous sommes donc répartis les tâches en prenant en compte nos points forts.                <br /> <br />
Dans l'ensemble j'ai grandement apprécié réaliser ce projet en groupe. Nous nous sommes très bien répartis les tâches, les IR s'occupaient de la partie software et serveur alors que nous les AE nous nous sommes occupés de la partie embarqué. J'ai découvert beaucoup de choses, notamment la manipulation de capteurs de distance Lidar, ainsi que la mise en place d'un Serveur BLE sur un ESP32. J'ai également grandement appris à utiliser git. N'étant pas très à l'aise sur cet outil, les IR de notre groupe nous ont expliqué comment bien utiliser git et s'organiser pour réaliser notre soft côté embarqué. Il y a eu toute une organisation à faire pour bien se coordonner entre les résultats reçu des capteurs et l'envoie vers l'application Android. Nous avons donc réussis à bien travailler ensemble, en équipe et à bien s'organiser.

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
            <h style={{ fontSize: "1.4em" }}>
              <strong className="blue"> Résumé des nouvelles compétences acquises </strong>
            </h>
            <blockquote className="blockquote mb-0">
              <p style={{ justifyContent: "justify", textAlign: "justify" }}>
                <BsCheckBox /> Déployer un serveur BLE pour un microcontroleur  <br />
                <BsCheckBox /> Déployer une communication entre deux capteurs à travers de l'UART et l'I2C<br />
                <BsCheckBox /> Mettre en place le format JSON pour envoyer les données à l'application <br />
                <BsCheckBox /> Amélioration de mes compétences en C++ <br />
                <BsCheckBox /> Amélioration de mes compétences en Anglais <br />
                <BsCheckBox /> Programmer des capteurs de distances (ultrasonics et LIDAR)  <br />
                <BsCheckBox /> Comparer et connaitre les avantages et les inconvénient des différents capteurs de distance <br />
                <BsCheckBox /> Amélioration de mes compétences pour travailler en équipes <br />
                <BsCheckBox /> Maitrise de l'outil git pour pouvoir coder ensemble <br />
                <BsCheckBox /> Amélioration de mes compétences en communication <br />
                <BsCheckBox /> Comprendre et connaitre un circuit d'alimentation <br />
                <BsCheckBox /> Comprendre et connaitre des circuits électroniques pour mettre en place un Dynamo afin de faire de la récupération d'énergie <br />





              </p>
            </blockquote>

          </Col>
        </Row>

            </Container >
        </Container >
    );

}

export default Projet_Innovateur;
