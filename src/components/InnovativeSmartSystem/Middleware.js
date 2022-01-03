import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Card from "react-bootstrap/Card";



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
            <br/>
            <br/>
            <p style={{textAlign:"center"}}> 
            Ce module regroupe toutes les matières qui sont liés à l'intergiciel, l'achitecture de service (REST, SOAP) et au cloud computing.
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
                    <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                <p style={{ justifyContent: "left", textAlign: "justify" }}>
                <h1 style={{ fontSize: "1.4em", paddingBottom: "0px" }}>
                    </h1>
                    Cette matière nous a inités à l'utilisation des Architecture orientés service de type REST et SOAP. 
                    <br/>
                    <br/>
                    Nous avons réalisé un projet dans lequel nous devions, par groupe de 3, réaliser une application de domotique simulant une salle de classe connectée pour appliquer les leçons d'architecture orientée service et de middleware. L'objectif était de réaliser une application Web pour gérer plusieurs pièces d'un établissement, comme ouvrir la porte, allumer/éteindre la lumière en fonction de l'état d'un ensemble de capteurs. Nous devions créer plusieurs scénario comme par exemple "ouvrir les volets d'une pièce si la luminosité est inférieur à une certaine valeur seuil".
                    Pour réaliser ce projet, nous avons crée une architecture de classe où chaque type d'actionneur/capteur était un SpringBoot Java projet. Puis nous avons crée un controlleur qui va gérer et faire intéragir ses micro-services à travers des requêtes GET et POST.
                    Ce projet devait également prendre en compte l'aspect gestion de projet. Nous avons donc utilisé des outils de la méthode SCRUM avec l'outil JIRA (méthode agile classique) et l'outil Jenkins.
                </p>

                </blockquote>
            </Card.Body>
            </Card>
            </Col>

            <Col
            md={12}
            style={{
              justifyContent: "center",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <h style={{ fontSize: "2.1em", paddingBottom: "0px" }}>
              <strong className="purple"> Intergiciel pour l'internet des objets </strong>
            </h>

            <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                <p style={{ justifyContent: "left", textAlign: "justify" }}>
                <h1 style={{ fontSize: "1.4em", paddingBottom: "0px" }}>
                    </h1>
                   
                    A travers ce module, nous avons appris à implémenter deux protocoles middlewarequi sont OM2M et
                    MQTT. Ces deux protocoles fonctionnent différemment, MQTT est un protocole pub-sub alors que OM2M est basé sur HTTP. Développé par le LAAS-CNRS, OM2M fournit une plateforme pour développer des services pour un réseau d’appareils hétérogènes.
                    <br/>
                    <br/>
                    Pour mettre en oeuvre ces deux protocoles, nous avons réalisés plusieurs travaux pratiques. Premièrement, pour nous implémenter MQTT, nous avons mis en place un broker mosquitto. Nous avons crée un sujet de scénario pour lequel une lampe s'allume automatiquement dès qu'une certaine valeur de luminosité a été atteinte. Ainsi toutes les lampes connectés qui sont abonnés à ce "topic" respecteront ce scénario. Pour plus de détails vous retrouverez ici notre compte-rendu. 
                    <br/>
                    Ensuite nous avons réaliser un TP sur la norme OM2M dont le but est de permettre la communication et de contrôler plusieurs capteurs et objets connectés entre eux. OM2M met en place une architecture de ressource qui peut contenir une liste de capteur, ainsi que leurs données/états. Avvec des requêtes REST, nous pouvons intéragir avec ces ressources.
                    <br/>
                    Enfin nous avons découvrir l'outil Node-Red qui permet de relier des dispositif matériel avec des services en lignes et des API, de façon visuelle. Node-red permet de faire des dashboard et donc d'afficher des résultats liés aux différents capteurs et objets connectés.
                </p>


                </blockquote>
            </Card.Body>
            </Card>

            </Col>

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

            <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                <p style={{ justifyContent: "left", textAlign: "justify" }}>
                <h1 style={{ fontSize: "1.4em", paddingBottom: "0px" }}>
                    </h1>
                    Le cloud computing est une technologie de plus en plus utilisé dans le milieu profesionnel. Il s'agit d'utiliser la puissance de calcul et le stockage par des serveurs distants.
                    Nous avons vu à travers ce cours les différents niveaux de services du cloud computing à savoir : <br/>
                    - IAAS ' Infrastructure As A Service' <br/>
                    - PAAS 'Platform As A Service'<br/>
                    - SAAS 'Software As A Service'<br/>
                    <br/>
                    Pendant les travaux pratiques, nous nous sommes concentré sur l'IAAS. L'objectif principal de ces TPs était de nous initier à la plateforme Openstack pour la création d'une topologie virtualisé.

                </p>

                </blockquote>
            </Card.Body>
            </Card>

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
            <h style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            <strong className="purple"> Tableau récapitulatif des  Compétences </strong>
            </h>

            </Col>

            </Row>

            

          </Container>
          </Container>
  );
}

export default Middleware;
