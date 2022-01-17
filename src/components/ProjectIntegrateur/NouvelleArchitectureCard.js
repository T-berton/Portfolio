import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function NouvelleArchitectureCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ justifyContent: "left", textAlign: "justify" }}>
          Notre dispositif embarqué sur le vélo utilise deux LiDAR pour détecter les véhicules et communique par Bluetooth Low Energy (BLE) pour informer l'utilisateur qu'un véhicule a été détecté. Le téléphone conservera ces rapports hors ligne et ne les téléchargera via les réseaux Wi-Fi ou cellulaires que lorsque l'utilisateur l'autorisera. Ces données seront ensuite stockées dans une base de données centrale, accessible par une API REST.


          <br/>
           <br/> 
           Nous voulions créer un système permettant aux cyclistes d'exprimer leurs plaintes et de s'entraider. Nous voulions un système ouvert que chacun pourrait utiliser et auquel il pourrait contribuer. Comme presque tout le monde possède un smartphone et une connexion internet, l'utilisation de BLE et d'une application mobile était le meilleur moyen de s'assurer que tout le monde puisse avoir accès à notre système. Au final, il suffit à l'utilisateur de télécharger l'application et d'installer notre dispositif sur son vélo pour pouvoir utiliser notre système.

            
          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default NouvelleArchitectureCard;