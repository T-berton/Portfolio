import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Card from "react-bootstrap/Card";

import broker from "../../Assets/Matiere/Middleware_broker.PNG";
import cloud from "../../Assets/Matiere/Middleware_cloud.PNG";
import om2m from "../../Assets/Matiere/Middleware_OM2M.png";
import { BsFillCaretRightFill } from "react-icons/bs";



function Middleware() {
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
              <strong> Descriptif et Analyse - Middleware</strong>
            </a>
            <br />
            <br />
            <p style={{ textAlign: "center" }}>
              Ce module regroupe toutes les matières qui sont liés à l'intergiciel, l'achitecture de service (REST, SOAP) et au cloud computing. L'architecture orientée services, le standard utilisée aujourd'hui pour développer des services Web. Nous avons également étudié la plateforme middleware OM2M, dont le but est d'assurer l'interopérabilité entre tous les types de capteurs et d'applications.

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
              <strong className="purple"> Architecture de service </strong>
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
              <strong className="blue"> Description du Module </strong>
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

            <blockquote className="blockquote mb-0">
              <p style={{ justifyContent: "left", textAlign: "justify" }}>
                Cette matière nous a inités à l'utilisation des Architecture orientés service de type REST et SOAP. L'idée principale du cours était de nous montrer comment créer et déployer des services Web à travers plusieurs API.
                Pour mettre en pratiques les connaissances apprises durant les cours théoriques, nous avons réalisé un projet dans lequel nous devions, par groupe de 3, réaliser une application de domotique simulant une salle de classe connectée pour appliquer les leçons d'architecture orientée service et de middleware. L'objectif était de réaliser une application Web pour gérer plusieurs pièces d'un établissement, comme ouvrir la porte, allumer/éteindre la lumière en fonction de l'état d'un ensemble de capteurs et déclencher certains actionneurs. Nous devions créer plusieurs scénarios comme par exemple "ouvrir les volets d'une pièce si la luminosité est inférieur à une certaine valeur seuil".


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

                Pour réaliser ce projet, nous avons crée une architecture de classe où chaque type d'actionneur/capteur était un SpringBoot Java projet. framework qui a été abordé lors des deux derniers tutoriels, à peu près au moment où nous avons commencé le projet SOA. SpringBoot permet de créer des services Web simples et de les déployer très facilement. Je n'ai donc pas eu de difficultés particulières à créer mon architecture via SpringBoot, car tout était automatiser.
                <br /><br />Comme nous ne pouvions pas utiliser de capteurs ou d'actionneurs réels, nous avons fais intervenir OM2M pour qu'il puisse simuler des capteurs, en créant des entités d'application. Puis nous avons crée un controlleur qui va gérer et faire intéragir ses micro-services à travers des requêtes GET et POST.

                <br /><br />Ce projet devait également prendre en compte l'aspect gestion de projet. Nous avons donc utilisé des outils de la méthode SCRUM avec l'outil JIRA (méthode agile classique) et l'outil Jenkins.
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
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", padding: "20px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <h style={{ fontSize: "2.1em", paddingBottom: "0px" }}>
              <strong className="purple"> Intergiciel pour l'internet des objets </strong>
            </h>

            <blockquote className="blockquote mb-0">
              <p style={{ justifyContent: "left", textAlign: "justify" }}>


                A travers ce module, nous avons appris à implémenter deux protocoles middleware qui sont OM2M et
                MQTT. Ces deux protocoles fonctionnent différemment, MQTT est un protocole pub-sub alors que OM2M est basé sur HTTP. Développé par le LAAS-CNRS, OM2M fournit une plateforme pour développer des services pour un réseau d’appareils hétérogènes.
              </p>
            </blockquote>


          </Col>

          <Col md={5} style={{ paddingTop: 70 }}>
            <img src={om2m} className="img-fluid rounded" />
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
              <BsFillCaretRightFill className="blue" /> Pour mettre en oeuvre ces deux protocoles, nous avons réalisés plusieurs travaux pratiques. Premièrement, pour nous implémenter MQTT, nous avons mis en place un broker mosquitto. Nous avons crée un sujet de scénario pour lequel une lampe s'allume automatiquement dès qu'une certaine valeur de luminosité a été atteinte. Ainsi toutes les lampes connectés qui sont abonnés à ce "topic" respecteront ce scénario. Pour plus de détails vous retrouverez ici notre compte-rendu.
                <br /><br />
                <BsFillCaretRightFill className="blue" /> Ensuite nous avons réaliser un TP sur la norme OM2M dont le but est de permettre la communication et de contrôler plusieurs capteurs et objets connectés entre eux. OM2M met en place une architecture de ressource qui peut contenir une liste de capteur, ainsi que leurs données/états. Avvec des requêtes REST, nous pouvons intéragir avec ces ressources.
                <br /> <br />
                <BsFillCaretRightFill className="blue" /> Enfin nous avons découvrir l'outil Node-Red qui permet de relier des dispositif matériel avec des services en lignes et des API, de façon visuelle. Node-red permet de faire des dashboard et donc d'afficher des résultats liés aux différents capteurs et objets connectés.
                <br /> <br />
                La principale difficulté a été de comprendre les spécificités de la norme OM2M. Il n'y a pas encore beaucoup de tutoriel sur des cas concrets, il était donc compliqué de bien comprendre le fonctionnement et les possibilités de l'OM2M. Heureusement, les différents TP nous ont permis d'aborder plusieurs notions différentes de OM2M. De plus, cette année nous avons eu l'opportunité de particier au Hackhathon dont le but principal était d'intégrer le standard oneM2M pour un système connecté, ce qui m'a permis d'encore mieux comprendre et de manipuler encore plus OM2M.


              
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
            <h style={{ fontSize: "2.1em", paddingBottom: "0px" }}>
              <strong className="purple"> Adaptabilité : Cloud et gestion autonomique </strong>
            </h>
            <blockquote className="blockquote mb-0">
              <p style={{ justifyContent: "left", textAlign: "justify" }}>
                <h1 style={{ fontSize: "1.4em", paddingBottom: "0px" }}>
                </h1>
                Le cloud computing est une technologie de plus en plus utilisé dans le milieu profesionnel. Il s'agit d'utiliser la puissance de calcul et le stockage par des serveurs distants.
                Nous avons vu à travers ce cours les différents niveaux de services du cloud computing à savoir : <br />
                - IAAS ' Infrastructure As A Service' <br />
                - PAAS 'Platform As A Service'<br />
                - SAAS 'Software As A Service'<br />
                <br />
                L'objectif principal de ces TPs était de nous initier à la plateforme Openstack pour la création d'une topologie virtualisé.
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
              <BsFillCaretRightFill className="blue" /> Pendant la première séance de travaux pratiques nous avons commencé par de la théorie. Nous avons comparé les deux principales techniques de virtualisatoin à savoir les machines virtuelles et les containers. 
              Je n'avais aucune connaissance dans le domaine du cloud, alors j'ai eu beaucoup de mal à comprendre ce premier TP. Le professeur et les élèves qui étaient à l'aise sur ce sujet m'ont permis de mieux comprendre les notions abordés.
              <br/>
              <BsFillCaretRightFill className="blue" /> Ensuite nous avons utilisé VirtualBox, pour créer des machines virtuelles sur Linux. Sur ces machines virtuelles, nous avons lancés deux container en utilisant Docker. Nous avons fais plusieurs essaies de communications entre les VM et les containers puis nous avons utilisés les principales opérations des containers comme la création de "snapshot". J'ai trouvé que ce TP était beaucoup moins compliqué à comprendre, même avec aucune experience dans ce domaine, j'ai pu bien comprendre les différentes notions car le TP était très bien guidé. Ainsi, nous avons pu voir que vraiment les containers sont utiles pour déployer des applications à grande échelle qui fonctionnent sur plusieurs serveurs qui ont besoin du même système d'exploitation et de même configuration.
              <BsFillCaretRightFill className="blue" /> Enfin dans les derniers TP, nous avons découvert et utilisé OpenStack. Il s'agit d'un service de machines virtuelles qui fournit des machines virtuelles qui fonctionnent directement sur les machines du serveur et qui est gérer par le biais d'une interface Web. Openstack permet également la virtualisation du réseau, c'est ce que nous avons expérimenté durant ces derniers TP. Pour le coup j'ai trouvé cette partie la plus compliqué. J'ai eu beaucoup de mal à gérer les différentes topologies du réseau. Heureusement que le professeur a pu nous montrer comment faire et nous guider.

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
          </Col>
        </Row>



      </Container>
    </Container>
  );
}

export default Middleware;
