import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function ContributionCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ justifyContent: "left", textAlign: "justify" }}>
          <h1 style={{ fontSize: "1.4em", paddingBottom: "0px" }}>
            </h1>
            Notre équipe étant composé de cinq elève ingénieurs de parcours différents, nous nous sommes repartis les tâches dans les domainese que nous maitrisons le mieux. Nous nous sommes ainsi divisé en deux. Un groupe s'est occupé de l'implémentation de OM2M et la réalisation de l'application Android. L'autre groupe s'est occupé de la partie hardware et software de l'embarqué.
            Me concernant, j'étais dans l'équipe qui s'occupait de la partie embarqué du projet. 


          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default ContributionCard;
