import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Card from "react-bootstrap/Card";
import nbiot from "../../Assets/Matiere/Communication_NB-IoT.jpeg";
import sdr from "../../Assets/Matiere/Communication_SDR.jpeg.png";
import ProgressBar from "@ramonak/react-progress-bar";



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
              <strong className="purple"> Descriptif et Analyse - Communication</strong>
            </a>
            <br />
            <br />
            <p style={{ textAlign: "justify" }}>
              Ce module regroupe beaucoup de sujets différents, ayant en commun le domaine de l'Internet des objets. Les problématiques liés à l'IOT comme la communication sans fil, l'énergétie des objets connectés et la sécurité sont des points abordés. On y retrouve également toute les notions liés aux différents protocoles de communication sans fils (Zigbee, BLE, WIFI, 5G...).


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
                A travers plusieurs cours théoriques et plusieurs TP, nous avons travaillé les bases de la radio logicielle (SDR). L'intérêt de la Radio Logicielle est de remplacer l'utilisation de composants matériels certaines opérations pour recevoir un signal FM comme le décalage de fréquence ou la démodulation par exemple. Dans la SDR, toutes ces tâches sont effectuées par un seul appareil, et toute la partie décodage du signal se fait par logiciel.
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
              <strong className="blue"> Compétences acquises </strong>
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
              <label>Etre capable d'analyser et évaluer les technolgies réseaux sans fil optimales  </label>
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
              <label>Etre capable de proposer de solutions de technologies réseaux optimales applicables à l'IoT 	  </label>
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
              <label>Comprendre et maitriser la prise en compte de la contrainte energetique dans l'optimisation de protocoles de communication pour IoT 	 </label>
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
              <label>Etre capable d'analyser et évaluer les technolgies réseaux sans fil optimales  </label>
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
              <label>Comprendre et maitriser la prise en compte de la contrainte securité dans l'optimisation de protocoles 	  </label>
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
                completed={80}
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
                Les cours étaient très complets sur la sécurité dans l'IOT. Cependant, nous n'avons pas pratiqué et par conséquent je ne serais pas nécessairement capable de mettre en place une défense de sécurité.
              </p>
            </blockquote>
          </Col>

          <Col md={12} style={{ paddingBot: 50 }}>
            <h style={{ fontSize: "1.4em", paddingBottom: "0px" }}>
              <strong className="blue"> Compétences acquises </strong>
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
                completed={80}
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

      </Container>
    </Container >
  );
}

export default ProtocoleDeCommunication;
