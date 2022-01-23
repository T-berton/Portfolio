import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function SolutionCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ justifyContent: "left", textAlign: "justify" }}>
          <h1 style={{ fontSize: "1.4em", paddingBottom: "0px" }}>
            </h1>
            Le projet "Safe City for Cyclist" vise à aider les gens à identifier les zones dangereuses pour les cyclistes dans les villes. 
            Ces zones seront accessibles au public et affichées sur une carte interactive sur un site web. 
            Les informations seront recueillies à partir du vélo de chaque utilisateur, à l'aide de capteurs de distance (ultrasons) pour détecter la proximité et la vitesse des voitures qui passent, et d'un GPS pour géolocaliser le vélo. 
            Ces données seront ensuite récupérées par un Raspberry et envoyées à un serveur en utilisant le protocole oneM2M. Les utilisateurs pourront ainsi installer notre système sur leur vélo.



          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default SolutionCard;
