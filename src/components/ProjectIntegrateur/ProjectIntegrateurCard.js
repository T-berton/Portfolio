import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function ProjectIntegrateurCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ justifyContent: "left", textAlign: "justify" }}>
           Il s'agit de la suite du projet proposé dans le cadre du Hackathon "Safe City for Cyclist" avec cette fois-ci un réel prototype et des améliorations. L'idée de base reste la même, à savoir intégrer un système connecté et intelligent sur un vélo pour récupérer des données (vitesse, distance) pour les retracer sur une application Android et afficher les zones dangereuses/ à éviter en fonctions des données récoltés.

           
           <br/>
           <br/> 
           En revanche nous avons changé l'architecture de notre système et ce qui le compose.
           Cette fois-ci, nous avons enlevé la Raspberry et le protocole OM2M, pour simplifier son intégration pour les utilisateurs. En effet, ajouter une Raspberry pour chaque vélo n'est pas pratique, il nous fallait donc trouver un nouvel objet connecté pour servir de "gateway". Il y a un seul objet connecté que tout le monde dispose et qui peut servir de gateway, il s'agit du téléphone portable. Nous avons également modifier le choix de transmission entre notre microcontrolleur et notre gateway. Le wifi consommant beaucoup trop d'énergie, nous avons opté pour la suite par du BLE. Comme l'ESP8266, n'étant pas compatible, nous l'avons donc changé par l'ESP32 qui est lui même compatible BLE.
           Nous avons également changé les deux capteurs ultrasons par des capteurs Lidar qui est certe plus couteux mais beaucoup plus précis et performant.
            
          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default ProjectIntegrateurCard;
