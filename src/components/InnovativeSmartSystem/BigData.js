import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Card from "react-bootstrap/Card";

import clustering from "../../Assets/Matiere/Big_Data_clustering.PNG";
import ProgressBar from "@ramonak/react-progress-bar";




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
              <strong className="purple"> Descriptif et Analyse - Gestion des données </strong>
            </a>
            <br />
            <br />
            <p style={{ textAlign: "justify" }}>
              La multiplication des objets connectés et des systèmes intelligents entraine une quantité de donnée massive à gérer. Travailler sur l'exploitation de ces données est une des problématiques majeure de nos jours. Ce module est une introduction aux concepts de données massives "Big Data" et au Web Sémantique avec la notion d'ontologie.


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
                Le Big Data est au coeur de notre vie quotidienne à travers les objets connectés, les réseaux sociaux.... . Ces cours nous ont permis de découvrir le concept de Machine Learning avec le "Clustering".

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
                Nous avons réalisés plusieurs travaux pratiques pour appréhender le concept de Clustering. Le but est d'utiliser des approches mathématiques sur des jeux de données, pour pouvoir les classer et former des familles de données qui ont des similitudes entre eux. Nous avons découvert et tester trois différentes méthodes de clustering (KMEAN, DBSCAN et Agglomerative) sur plusieurs type de jeu de données.
                <br />
                Après avoir testé ses dataset sur des jeux de données fictifs, nous devions appliquer ces algorithmes directement sur des dataset réelles afin de concentrer nos éfforts sur l’interpretation et
                l’analyse des résultats de clustering sur la dataset, mais aussi sur différentes de tranformer notre dataset afin de faciliter sa visualisation.
                Pour ce qui est du jeu de données, il s’agissait d’un dataframe regroupant des
                données de pluviométries et autres indicateurs météos et géographiques, et ce
                sur une année de temps pour 33 villes francaises.

              </p>
            </blockquote>
          </Col>

          <Col md={5} style={{ paddingTop: 60 }}>
            <img src={clustering} className="img-fluid rounded w-100" />
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
              <label>Savoir explorer et représenter des ensembles de données   </label>
              <ProgressBar
                completed={70}
                labelColor="#ffffff"
                labelAlignment="center"
                bgColor="#2d1950"
                className="wrapper"
                animateOnRender={true}
                labelClassName="label"
              />
              <br />
              <br />
              <label> Maitriser la complexité des traitements statistiques et connaitre les techniques de contournement   </label>
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
              <strong className="purple"> Analyse de données sémantiques</strong>
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

                Le Web sémantique est une vision d'une extension du Web existant, qui fournit aux programmes logiciels des métadonnées (qui sont partagées et réutilisées entre plusieurs applications, entreprises...) interprétables par les machines. En conséquence, les ordinateurs sont en mesure de faire des interprétations significatives, de la même manière que les humains traitent les informations pour atteindre leurs objectifs.
                Ce cours est donc une introduction à tous ces concepts et passe donc en revue les principaux concepts du web sémantique,notamment la notion d'ontologie. Nous avons ensuite construit notre propre ontologie et l'avons appliqué à un exemple dans le domaine de l'IOT.

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

                Pour mieux appréhender les différents concepts d'ontologies et de web semantiques, nous avons réalisés deux travaux pratiques. Le premier était de créer une ontologie sur les phénomènes météorologiques avec le logiciel "Protégé".

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
              <label>Concevoir et comprendre un modèle conceptuel pour un domaine d'application donné   </label>
              <ProgressBar
                completed={70}
                labelColor="#ffffff"
                labelAlignment="center"
                bgColor="#2d1950"
                className="wrapper"
                animateOnRender={true}
                labelClassName="label"
              />
              <br />
              <br />
              <label>Savoir inférer de nouvelles connaissances à partir d'une base de connaissance (terminologie et assertions) 	</label>
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
              <label> Etre capable d'enrichir des données avec des méta-données sémantisées  </label>
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
            <a style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple"> Retrospection de l'Unité de formation  </strong>
            </a>

            <blockquote className="blockquote mb-0">
              <p style={{ justifyContent: "left", textAlign: "justify" }}>
                Ce module comportait des cours très distincts impliquant différents ensembles de compétences. Ce module m'a fait découvrir le monde du Big Data et de l'analyse de données. Il est clair qu'il est important dans l'IOT de pouvoir gérer et analyser toutes ses données massives provenant dee capteurs, actionneurs ou autres systèmes...
                <br /><br />
                Le cours de Big Data était une première pour moi dans ce domaine. J'ai beaucoup apprécié l'étude de machine learning à travers plusieurs méthode de clustering. Le langage utilisé était le Python, nous avions déjà appris ce langage.
                Ce cours reposait beaucoup sur des modèles mathématiques, et comme les algorithmes était déjà donné.
                C'était tout de même une belle expéience et une belle découverte pour moi.
                J'ai eu quelques difficultés au début à comprendre les mathématiques derrière chaque algorithme. Mais j'ai tout de même réussi dans l'ensemble à réaliser l'ensemble des expériences. Pour l'ensemble de compétences Traitement des données sémantiques, la plupart des exigences étaient déjà satisfaites dans la classe de l'année dernière ou avec la formation générale en RI. 
                
                <br /><br />

                Le cours de Web Sémantique était une découverte pour moi. Je n'avais jamais entendu parlé de ce terme, et j'ai eu du mal à comprendre. Heureusement que les deux séances de TP m'ont permis de mieux appréhender ce domaine, et de mieux comprendre l'utilité du Web Semantique. J'ai trouvé que le premier TP était simple à prendre en main et à comprendre, mais le deuxième TP était très compliqué pour moi. D'autres élèves qui étaient plus à l'aise sur ce sujet notamment les élèves d'IR ont pu m'aider à finir ce dernier TP. Il aurait surement fallu que le deuxième TP soit plus guidé pour savoir par quoi commencer par exemple.
                <br /><br />

                Concernant l'ingénieur logicielle, je connaissais déjà la plupart des méthodes présentées et j'avais beaucoup d'expérience avec la méthode Agile, notamment lors de mon stage de 4A qui fonctionnait en méthode Agile. Donc je pense que grâce à mon expérience professionnelle et ma formation INSA , j'ai atteins toutes les exigences.
                <br /><br />
                Dans l'ensemble, j'ai compris l'essentielle des notions abordées pour le Web Semantique et le Big Data, mais je ne pense pas plus tard travailler dans ce secteur, ce fut tout de même une belle découverte.

              </p>
            </blockquote>
          </Col>
        </Row>



      </Container>
    </Container >
  );
}

export default BigData;