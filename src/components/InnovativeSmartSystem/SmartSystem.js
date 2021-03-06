import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Card from "react-bootstrap/Card";

import capteur from "../../Assets/Matiere/SmartSystem_capteur.PNG";
import rn2483 from "../../Assets/Matiere/SmartSystem_RN2483.PNG";
import { BsFillCaretRightFill } from "react-icons/bs";

import ProgressBar from "@ramonak/react-progress-bar";
import '../SkillsBar/style.css';
import { CgEnter } from "react-icons/cg";
import { BsCheckBox } from "react-icons/bs"
import { AiFillFilePdf } from "react-icons/ai"
import { Link } from "react-router-dom";

import pdflogo from "../../Assets/logo-pdf.svg"
import githublogo from "../../Assets/GitHub-Logo.png"
import diapologo from "../../Assets/diapo_logo.jpg"

import datasheet from "../../Assets/Annexe/Datasheet-AIME.pdf"

import Image from 'react-bootstrap/Image'


function SmartSystem() {
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
              <strong className="purple"> Partie Descriptif et Technique - Smart System</strong>
            </a>
            <br />
            <br />
            <p style={{ textAlign: "justify" }}>
              Les systèmes intelligents basés sur des capteurs et des actionneurs sont partout dans notre vie quotidienne.
              Ce module est composé en deux matières : Introduction aux capteurs - Microcontrôleur et Open Source Hardware. A travers ce module, nous suivons le processus complet de création d'un capteur de gaz intelligent, depuis le dépôt de nanoparticules jusqu'à l'acquisition du signal sur un microcontrôleur et la communication LoRa.
            </p>
          </Col>

        </Row>



        <Row style={{ justifyContent: "center", paddingBot: "50px" }}>
          <Col
            md={12}
            style={{
              justifyContent: "center",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <h style={{ fontSize: "2.4em", paddingBottom: "0px" }}>
              <strong className="purple"> Introduction aux capteurs </strong>
            </h>
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
              <strong className="blue"> Description du module </strong>
            </h>
            <blockquote className="blockquote mb-0">
              <p style={{ justifyContent: "left", textAlign: "justify" }}>
                Pour nous introduire le cours sur l'introduction de capteurs nous avons d'abord effectuer une semaine de stage dans l'AIME (laboratoire de recherche) afin de réaliser son propre capteur. Dans notre cas il s'agissait d'un capteur de gaz à nano-particules.
              </p>
              <p style={{ justifyContent: "left", textAlign: "justify" }}>
                <BsFillCaretRightFill className="blue" /> Etape 1 : Photolitographie <br />
                Gravure d'une plaquette de silicium à partir d'un masque avec le principe de la photolitographie <br />
                <BsFillCaretRightFill className="blue" /> Etape 2 : Fabrication et dépôt des nanoparticules <br />
                Utilisation d'un processus chimique pour les créer <br />
                <BsFillCaretRightFill className="blue" /> Etape 3 : Diélectrophorèse de nanoparticules <br />
                Dépôt d'une goutte de la solution dilué contenant les nanoparticules sur l'ensemble du circuit du capteur, puis nous avons appliqué un champ électrique uniquement sur la partie des peignes intercalés. Ainsi, les particules n'ont "collé" que sur la partie souhaitée lorsque nous avons rincé la solution dans l'eau.

              </p>
              <p style={{ justifyContent: "left", textAlign: "justify" }}>

                Après avoir conçu et developpé notre propre capteur de gaz, nous avons dû présenter ses différents caractéristiques à travers sa datasheet. Vous trouverez la datasheet de mon capteur.

              </p>
              <p style={{ justifyContent: "left", textAlign: "justify" }}>
                Enfin nous avons vu comment les implémenter avec des montages électriques dits « conditionneurs » (pont, amplificateurs...) qui leur sont associés pour optimiser leurs performances et récupérer leurs données.
              </p>
            </blockquote>



          </Col>


          <Col md={5} style={{ paddingTop: 50 }}>
            <img src={capteur} className="img-fluid rounded" />
          </Col>

          <Col md={12} style={{ paddingBot: 50 }}>
            <h style={{ fontSize: "1.4em", paddingBottom: "0px" }}>
              <strong className="blue"> Mon évaluation </strong>
            </h>
            <div className="mt-3" style={{ textAlign: "start" }}>
              <label>Comprendre les notions de base des capteurs et des chaîne de mesure: aspects physique/électronique et métrologique </label>
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
              <label>Etre capable de fabriquer un capteur à nanoparticules (synthèse chimique, assemblage, test) avec les outils de la micro-électronique</label>
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
              <label>Etre capable de concevoir la datasheet du capteur fabriqué </label>
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


        <Row style={{ justifyContent: "center", padding: "10px" }}>

          <Col
            md={12}
            style={{
              justifyContent: "center",

            }}
          >
            <h style={{ fontSize: "2.1em" }}>
              <strong className="purple"> Microcontrôleur et Open Source Hardware </strong>
            </h>
          </Col>

          <Col
            md={9}
            style={{
              justifyContent: "center",
            }}
          >

            <h style={{ fontSize: "1.4em" }}>
              <strong className="blue"> Description du module </strong>
            </h>
            <blockquote className="blockquote mb-0">
              <p style={{ justifyContent: "left", textAlign: "justify" }}>
                Un objet connecté est un système comprenent un ensemble (capteur, actionneur et Microcontrôleur), nous avons vu à travers cette matière comment les associer ensemble dans un cas pratique. Il était question de réaliser objet connecté et intelligent à partir du capteur de gaz fabriqué. Vous trouverez plus d'explications <a href={"/capteurgaz"}> <strong className="purple"> ici</strong></a>.
              </p>

            </blockquote>


          </Col>
          <Col md={3} style={{ paddingTop: 0 }}>
            <img src={rn2483} className="img-fluid rounded" />
          </Col>

          <Col md={12} style={{ paddingBot: 50 }}>
            <h style={{ fontSize: "1.4em", paddingBottom: "0px" }}>
              <strong className="blue"> Problèmes rencontrés </strong>
            </h>
            <blockquote className="blockquote mb-0">
              <p style={{ justifyContent: "left", textAlign: "justify" }}>
                <BsFillCaretRightFill className="blue" /> La première chose à faire était de pouvoir faire communiquer une carte Lora avec une gateway. Nous avons souhaité au départ crée notre propre bibliothèque en C, mais nous avons eu quelques difficultés dès le départ notamment lors de l'initialisation du Lora. Par manque de temps, nous sommes donc partis directement avec le framework Arduino pour nous simplifier les codes. C'était la première fois que moi et mon binôme manipulons un Lora, mais comme nous venions tout les deux d'une formation en electronique, nous n'avions pas eu de difficultés à brancher, relier notre Lora avec notre microcontroleur (nous avons choisis un ESP32) et de mettre en place la communication.
                <br />
                <BsFillCaretRightFill className="blue" /> Concernant les schémas electriques du circuit, nous avons voulu rajouter d'autres circuits comme notamment un PID (pour maintenir une certaine température du capteur) et un comparateur (LT071) pour déclencher une interruption matérielle sur notre microcontroleur
              </p>
              <p style={{ justifyContent: "center", textAlign: "justify" }}>
                Finalement, comme j'ai suivi une formation en electronique et automatique auparavant, je n'ai eu aucune difficultés à appréhender ce cours. Nous avions déjà vu toutes ses notions mais cela m'a permis d'avoir un rappel sur plusieurs montages electriques.

              </p>

            </blockquote>
          </Col>

          <Col md={12} style={{ paddingBot: 50 }}>
            <h style={{ fontSize: "1.4em" }}>
              <strong textAlign="center"> Mon évaluation </strong>
            </h>

            <br />
            <div className="mt-3" style={{ textAlign: "start" }}>
              <label className="text-start">Comprendre l'architecture des microcontrôleurs et savoir les utiliser  </label>
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
              <label className="text-start">Etre capable de dimensionner l'ensemble (capteur + conditionneur + microcontroleur) en fonction de l’application </label>
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
              <label className="text-center">Etre capable de concevoir l'électronique de conditionnement du signal du capteur (design + simulation) 	 </label>
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
              <label className="center">Etre capable de réaliser un shield permettant d'interfacer le capteur de gaz à nanoparticules 	 	 </label>
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
              <label className="text-center">Etre capable de réaliser le logiciel associé et l’interface homme/machine éventuelle 		 </label>
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
              <label className="text-center">Etre capable d'intégrer le tout pour réaliser un smart devices 		 </label>
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
            <h style={{ fontSize: "1.4em" }}>
              <strong className="blue">  Mon Feedback </strong>
            </h>
            <blockquote className="blockquote mb-0">
              <p style={{ justifyContent: "left", textAlign: "justify" }}>
                Le module "Smart Device" est le module sur lequel j'étais je pense le plus à l'aise techniquement. C'était l'un des cours les moins orientés vers les compétences logicielles, reposant davantage sur l'électronique, l'informatique embarqué et les connaissances en physique. Grâce ma formation d'AE, je n'ai pas eu de difficultés à appréhender toutes les compétences nécessaires. <br />
                <br />
                Pour le cours d'introduction aux capteurs, nous avions déjà fait une semaine à l'AIME lors de ma deuxième année en IMACS où l'on a réalise une cellule photovoltaïque. De plus mes connaissances en physique et chimie acquises lors des premières années à l'INSA m'ont permis de bien comprendre les notions pour la fabricaiton du capteur à nano-particule. En ce qui concerne la rédaction de la datasheet, je n'ai pas trouvé de difficultés majeur car en tant qu'AE nous sommes habitués à lire et à analyser des datasheets. De plus nous avions accès à plusieurs exemples sur moodle pour nous permettre de suivre un plan cohérent.
                <br /> <br />
                Quant au projet Microcontrôleur et matériel open source, je me suis sentie vraiment à l'aise sur ce sujet. La réalisation du schéma electronique sur KICAD et sur LT SPICE étaient des choses que l'on a déjà vu mais comme je n'ai pas eu l'occasion de faire du routage lors de mon stage de 4A, j'ai oublié quelques fonctions pour utiliser le logiciel KICAD. Grâce à ce cours, j'ai pu revoir certaines notions et certaines fonctionnalités du logiciel KICAD.
                <br /><br />Dans l'ensemble, je pense avoir acquis toutes les compétences pour ce module et même plus au vu du schéma electronique que l'on a pu réalisé à la fin de ce module qui implémentait des fonctions supplémentaires.

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
                <BsCheckBox /> Rédiger une datasheet  <br />
                <BsCheckBox /> Concevoir un capteur à nano-particule en salle Blanche <br />
                <BsCheckBox /> Etablir une communication avec le protocole LoraWan entre un capteur et une gateway <br />
                <BsCheckBox /> Afficher les résultats d'un capteur sous forme de Dashboard à l'aide de NodeRed <br />
                <BsCheckBox /> Concevoir un capteur à nano-particule en laboratoire <br />
                <BsCheckBox /> Amélioration de mes compétences en programmation embarquée en C++ avec le framework Arduino sous VSCode <br />
                <BsCheckBox /> Amélioration de mes compétences sous KICAD pour effectuer un routage <br />


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
            md={6}
          >
            <a href={datasheet} target="Blank_">
              <img src={pdflogo} style={{ height: 64, width: 64 }} />
            </a>
            <p aria-hidden="true" ng-show="showTitle" class="thumbnail-name ng-binding">
              <strong>Datasheet capteur à nanoparticules</strong>
            </p>


          </Col>
          <Col
            md={6}
          >

            <a href="https://github.com/MOSH-Insa-Toulouse/2021-2022-BOUKEZZATA-BERTON-MESLOUH"><img width="64" alt="Octicons-mark-github" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/64px-Octicons-mark-github.svg.png" />
            </a>
            <p aria-hidden="true" ng-show="showTitle" class="thumbnail-name ng-binding">
              <strong>Github Projet Smart Device </strong>
            </p>

          </Col>
        </Row>





      </Container >
    </Container >
  );
}

export default SmartSystem;
