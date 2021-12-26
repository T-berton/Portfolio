import React from "react";
import Card from "react-bootstrap/Card";


function AboutMS() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
             La spécialisation <span className="purple"> Innovative Smart System</span> de l'INSA Toulouse se concentre sur le devéloppement et la conception d'objets connectés (IOT). L'internet des objets connectés est déjà en plein coeur de notre vie quotiedienne, on estime qu'il y a environ  On estime qu'en 2025, le nombre d'objets connectés sera de <span className="purple"> 55 miliards.</span> 
             <br />
             L'usage de l'IOT est présent dans divers domaines que ce soit pour les particuliers (maison connectés, montre connectés..) et dans le milieu profesionnelle (smart factory, smart cities, voiture connectés...).
             <br />
             L'objectif de cette formation est de concevoir, produire, et commercialiser un<span className="purple"> système intelligent basé sur des objets connectés </span>, depuis le composant jusqu'aux applications commerciales, tout en tenant compte des aspects sociaux.
            <br />
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutMS;