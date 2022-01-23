import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Card from "react-bootstrap/Card";
import nbiot from "../../Assets/Matiere/Communication_NB-IoT.jpeg";
import sdr from "../../Assets/Matiere/Communication_SDR.jpeg.png";
import ProgressBar from "@ramonak/react-progress-bar";
import pdflogo from "../../Assets/logo-pdf.svg"
import githublogo from "../../Assets/GitHub-Logo.png"
import diapologo from "../../Assets/diapo_logo.jpg"
import { BsCheckBox } from "react-icons/bs"

import wsn from "../../Assets/Annexe/WSN MAC PROTOCOL (1).pdf"
import rapportnbiot from "../../Assets/Annexe/Rapport NB-IoT final.pdf"
import diapo from "../../Assets/Annexe/NB_IoT_Diapo_v2.pdf"
import sdr_rapport from "../../Assets/Annexe/Raport SDR BOUKEZZATA BERTON.pdf"
import nrj from "../../Assets/energie.jpg"



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
              <strong className="purple"> Partie Descriptif et Technique - Communication</strong>
            </a>
            <br />
            <br />
            <p style={{ textAlign: "justify" }}>
              Ce module regroupe beaucoup de sujets différents, ayant en commun le domaine de l'Internet des objets. Les problématiques liés à l'IOT comme la communication sans fil, l'énergie des objets connectés et la sécurité sont des points abordés. On y retrouve également toutes les notions liées aux différents protocoles de communication sans fils (Zigbee, BLE, WIFI, 5G...).


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
            <h style={{ fontSize: "2.1em" }}>
              <strong className="purple"> Protocole pour les objets connectés </strong>
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
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >

            <blockquote className="blockquote mb-0">
              <p style={{ justifyContent: "left", textAlign: "justify" }}>
                <h1 style={{ fontSize: "1.4em" }}>
                  Protocoles de Communication :
                </h1>
                Au travers de ce cours, nous avons pu apprendre beaucoup sur les différentes technologies utilisées par les appareils IOT pour communiquer et sur l'impact des appareils sans fil sur notre monde.
                <br />
                <br />
                Au sein d'un groupe de quatre étudiants, j'ai dû réaliser une étude approfondie du protocole NB-IOT. L'idée était que toute la classe présente différents protocoles, notamment Zigbee, BLE, Sigfox, Lora et NB-IoT, puis que nous fassions une grande comparaison sur ceux-ci pour essayer de les classer dans différentes catégories. Nous avons décidé de prendre le protocole NB-IOT. Il s'agit d'un protocole sans fil spécialisé dans la connexion d'appareils Machine-To-Machine ou IoT sur des réseaux mobiles déjà établis, et le traitement de petites quantités de données bidirectionnelles.
                <br />
                <br />
                Ensuite, nous avions un autre rapport et une présentation à faire sur les différents protocoles MAC de réseaux de capteurs sans fil. J'ai rédigé un rapport avec plusieurs protocole MAC différents en présentant leurs avantages/inconvénients dans plusieurs cas d'utilisations.


              </p>

            </blockquote>

          </Col>
          <Col md={5} style={{ paddingTop: 200 }}>
            <img src={nbiot} className="img-fluid rounded" />
          </Col>

          <Col
            md={12}
            style={{
              justifyContent: "center",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >

            <blockquote className="blockquote mb-0">
              <p style={{ justifyContent: "left", textAlign: "justify" }}>
                <h1 style={{ fontSize: "1.4em" }}>
                  Radio Logicielle (Software Defined Radio) :
                </h1>
                A travers plusieurs cours théoriques et plusieurs TP, nous avons travaillé les bases de la radio logicielle (SDR). L'intérêt de la Radio Logicielle est de remplacer l'utilisation de composants matériels qui effectue certaines opérations pour recevoir un signal FM comme le décalage de fréquence ou la démodulation par exemple. Dans la SDR, toutes ces tâches sont effectuées par un seul appareil, et toute la partie décodage du signal se fait par logiciel.
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

            <blockquote className="blockquote mb-0">
              <p style={{ justifyContent: "left", textAlign: "justify" }}>
                Dans les trois laboratoires, nous avons d'abord examiné la théorie du décodage d'un signal FM, puis nous avons utilisé le logiciel Gnuradio.

                L'idée était de prendre en entrée un signal d'un échantillon préalablement enregistré et d'essayer d'obtenir l'audio de la source.

                Pour ce faire, nous avons mis en place différents éléments de traitement, comme un décaleur de fréquence, des filtres passe-bande pour traiter le bruit, ou encore des démodulateurs de fréquence.

                Après plusieurs étapes de traitement, nous avons pu récupérer un signal audio propre que nous avons pu écouter.



              </p>

            </blockquote>

          </Col>

          <Col md={5} style={{ paddingTop: 80 }}>
            <img src={sdr} className="img-fluid rounded" />
          </Col>

          <Col
            md={12}
            style={{
              justifyContent: "center",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >

            <blockquote className="blockquote mb-0">
              <p style={{ justifyContent: "left", textAlign: "justify" }}>
                <h1 style={{ fontSize: "1.4em" }}>
                  Réseaux Emergents (Software Defined Network) :
                </h1>
                Dans ce cours, nous avons vu le principe de fonctionnement des réseaux définis par logiciel (SDN). Nous avons pu les manipuler pendant des séances de travaux pratique. L'objectif était d'utiliser des commutateurs Openflow afin d'établir des communications entre plusieurs PC en définissant des règles de routage à partir de la console du routeur SDN.

              </p>
            </blockquote>

          </Col>

          <Col
            md={9}
            style={{
              justifyContent: "center",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >

            <blockquote className="blockquote mb-0">
              <p style={{ justifyContent: "left", textAlign: "justify" }}>
                <h1 style={{ fontSize: "1.4em" }}>
                Energie pour les objets connectés                </h1>

L'objectif de ce cours était de comprendre et découvrir les différents types et manière de récupération d'énergie ainsi que les différents type de stockage (batterie, supercondensateur). Nous avons fais un TP sur la récupération d'énergie sans fil notamment par transmission d'onde, où nous avons pu voir que ce type de récupération présente de nombreuses avantage en terme de portée mais est encore immature en terme de technologie, on ne sait pas son impact sur la santé.
<br/><br/>Nous avons eu également l'opportunité de pouvoir réaliser en salle blanche un supercondensateur.
              </p>
            </blockquote>

          </Col>

          <Col md={3} style={{ paddingTop: 80 }}>
            <img src={nrj} className="img-fluid rounded" />
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
              <strong className="blue">  Problèmes rencontrés </strong>
            </h>
            <blockquote className="blockquote mb-0">
              <p style={{ justifyContent: "left", textAlign: "justify" }}>
                Ce cours était très complet et diversifié. Même si j'avais déjà quelques bases de réseaux, j'ai pu découvrir beaucoup de notions, sur les différents protocoles pour l'IOT à différent niveaux (UMTS, GSM, 3G, 4G, 5G, Zigbee, LoRa, Sigfox), ainsi que l'aspect énergétique. Désormais, lorsqu'il me sera demandé de concevoir un objet intelligent je pourrai en déduire quel type de protocole à utiliser en fonction des contraintes (distance d'emission/reception, consommation électriques, débit etc...). La dimension énergétique d'un objet dans l'IOT est très importante, donc le choix du protocole est important. Comme par exemple dans le projet intégrateur.
                <br />  J'ai eu quelques difficultés notamment lors de la rédaction des rapports sur les protocoles de réseaux de capteurs sans fil dans le monde de l'IOT, car il s'agissait de notions très pointues et techniques. N'étant pas un expert dans le domaine des réseaux, il m'a fallut beaucoup de temps pour comprendre. Le nombre important de recherche sur les différents rapport à rendre m'as permis d'assimiler à mon rythme les notions attendues.
              </p>
            </blockquote>

          </Col>

          <Col md={12} style={{ paddingBot: 50 }}>
            <h style={{ fontSize: "1.4em", paddingBottom: "0px" }}>
              <strong className="blue"> Mon évaluation  </strong>
            </h>
            <div className="mt-3" style={{ textAlign: "start" }}>
              <label>Comprendre les étapes majeurs de développement des communications mobiles et les développements technologiques associés  </label>
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
              <label>Connaitre les enjeux des nouvelles générations de communications mobiles 	</label>
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
              <label>Etre capable d'analyser et évaluer les technolgies réseaux sans fil optimales  </label>
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
              <label>Etre capable de proposer de solutions de technologies réseaux optimales applicables à l'IoT 	  </label>
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
              <label>Comprendre et maitriser la prise en compte de la contrainte energetique dans l'optimisation de protocoles de communication pour IoT 	 </label>
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
              <label>Etre capable d'analyser et évaluer les technolgies réseaux sans fil optimales  </label>
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
              <label>Comprendre et maitriser la prise en compte de la contrainte securité dans l'optimisation de protocoles 	  </label>
              <ProgressBar
                completed={70}
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
              <label>Connaitre les principaux traitements utilisés dans une communication numérique et savoir expliquer la structure de base des émetteurs-récepteurs radiofréquences numériques   </label>
              <ProgressBar
                completed={80}
                // customLabel="Etre capable de fabriquer un capteur à nanoparticules (synthèse chimique, assemblage, test) avec les outils de la micro-électronique  "
                labelColor="#ffffff"
                labelAlignment="center"
                bgColor="#2d1950"
                className="wrapper"
                animateOnRender={true}
                labelClassName="label"
              />

              <label>Maîtriser l'architecture d'un système de gestion de l'énergie,  à stockage simple, à récupération d'énergie, savoir dimensionner l'élément de stockage en fonction du cahier des charges    </label>
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

        <Row style={{ justifyContent: "center", padding: "30px" }}>

          <Col
            md={12}
            style={{
              justifyContent: "center",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <h style={{ fontSize: "2.1em" }}>
              <strong className="purple"> Sécurité dans les réseaux d'objets connectés </strong>
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
                Le but de ce cours était de nous présenter les principaux concepts de sécurité des réseaux d'objets connectés, notamment les attaques et les défenses (détection des erreurs et des défauts) concernant les réseaux sans fil pour l'IOT. Ce cours passe en revue les principaux types d'attaques, ainsi que la manière dont nous pouvons mettre en place des défenses pour les contrer.                    <br />
                <br />
                Nous avons pu imaginer à travers un rapport détaillé les différents problèmes de sécurité que pourrait rencontrer notre projet "Innovant" et comment on pourrait les résoudre.

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
              <strong className="blue">  Problèmes rencontrés </strong>
            </h>
            <blockquote className="blockquote mb-0">
              <p style={{ justifyContent: "left", textAlign: "justify" }}>
                Les cours étaient très complets sur la sécurité dans l'IOT. Cependant, nous n'avons pas pratiqué et par conséquent je ne serais pas nécessairement capable de mettre en place une défense de sécurité pour un système. Mais le sujet de mon alternance porte sur le développement d'un robot pour les particuliers, et la notion de sécurité est primordiale. Cela va donc me permmettre de compléter mon apprentissage dans ce domaine.
              </p>
            </blockquote>
          </Col>

          <Col md={12} style={{ paddingBot: 50 }}>
            <h style={{ fontSize: "1.4em", paddingBottom: "0px" }}>
              <strong className="blue"> Mon évaluation </strong>
            </h>
            <div className="mt-3" style={{ textAlign: "start" }}>
              <label>Comprendre les notions de base de la sécurité 	 </label>
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
              <label>Etre capable d'identifier les faiblesses d'une architecture IoT 	</label>
              <ProgressBar
                completed={80}
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
              <label>Savoir identifier l'impact de l'exploitation d'une vulnérabilité sur une architecture IoT 	</label>
              <ProgressBar
                completed={80}
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
              <label>Etre capable de proposer des contre-mesures de sécurité adaptées	</label>
              <ProgressBar
                completed={60}
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
            <a style={{ fontSize: "2.1em"}}>
              <strong className="purple"> Analyse de l'Unité de formation  </strong>
            </a>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={12}
            style={{
              justifyContent: "center",

            }}
          >
            <h style={{ fontSize: "1.4em" }}>
              <strong className="blue">  Mon Feedback </strong>
            </h>
            <blockquote className="blockquote mb-0">
              <p style={{ justifyContent: "left", textAlign: "justify" }}>
                Le module de Communication était vraiment dense, et touchait beaucoup de notions différentes. Grâce à ma formation d'AE, j'ai quelques notions et bases de réseaux qui m'ont été très utile pour bien comprendre ce module. Il y a eu bien sûr certaines matières où je suis moins à l'aise comme la sécurité dans les objets connectés mais le reste était convenable.
                <br />
                <br />
                Concernant le cours de Protocoles de communication, j'ai pu découvir et apprendre quelques protocoles de communications de manière techniques. Je connaissais beaucoup de nom (BLE, WIFI, 5G, Sigfox) de manière général mais sans savoir leurs caractéristiques et leurs spécifités. Avec ce module, je pense avoir compris dans quel cas d'application un protocle est le mieux à utiliser. Ce module parlait abordait souvent les contraintes énergétiques dans le choix de protocole, c'est un sujet pour un AE qui est très important à prendre en compte.

                Le cours de sécurité sur l'IOT, était quelque chose de complètement inconnu pour moi. Les cours était intéressant et faisait une bonne introduction à ce domaine. Cependant, il est dommage que nous n'ayons pas eu assez de cas pratiques.
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
                <BsCheckBox /> Comprendre les différents types de protocole de communications dans l'IOT, leurs caractéristiques et l'aspect énergétique<br />
                <BsCheckBox /> Aperçu et comparaison des protocoles de communication
<br />
                <BsCheckBox /> Être capable de suggérer des protocoles adaptés aux réseaux IoT en fonction du cas d'application  <br />
                <BsCheckBox /> Connaitre et comprendre les concepts de la Radio Logicielle <br />
                <BsCheckBox /> Connaitre et comprendre les concepts de routeurs SDN <br />
                <BsCheckBox /> Manipulation d'un routeur SDN pour écrire des règles de routage en Python <br />
                <BsCheckBox /> Connaitre et comprendre les différents types de récupération d'énergie sans fil <br />
                <BsCheckBox /> Comprendre les bases de la sécurité et connaitre quelques types d'attaques et défenses<br />




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
            md={3}
          >
            <a href={wsn} target="Blank_">
              <img src={pdflogo} style={{ height: 64, width: 64 }} />
            </a>
            <p aria-hidden="true" ng-show="showTitle" class="thumbnail-name ng-binding">
              <strong>Rapport sur les protocoles MAC des réseaux de capteurs sans fil</strong>
            </p>
            </Col>

            <Col
            md={3}
          >
            <a href={rapportnbiot} target="Blank_">
              <img src={pdflogo} style={{ height: 64, width: 64 }} />
            </a>
            <p aria-hidden="true" ng-show="showTitle" class="thumbnail-name ng-binding">
              <strong>Rapport sur le protocole NB-IOT</strong>
            </p>
            </Col>
            <Col
            md={3}
          >
            <a href={diapo} target="Blank_">
              <img src={pdflogo} style={{ height: 64, width: 64 }} />
            </a>
            <p aria-hidden="true" ng-show="showTitle" class="thumbnail-name ng-binding">
              <strong>Diaporama sur le protocole NB-IOT</strong>
            </p>
            </Col>
            <Col
            md={3}
          >
            <a href={sdr_rapport} target="Blank_">
              <img src={pdflogo} style={{ height: 64, width: 64 }} />
            </a>
            <p aria-hidden="true" ng-show="showTitle" class="thumbnail-name ng-binding">
              <strong>Rapport sur le TP de Radio Logicielle</strong>
            </p>
            </Col>
    </Row>



      </Container>
    </Container >
  );
}

export default ProtocoleDeCommunication;
