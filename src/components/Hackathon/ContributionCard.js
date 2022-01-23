import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
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
            <br/>
            <br/>
            Côté embarqué, il y avait deux parties à s'occuper: la partie GPS et la partie capteur de distance avec ultrason. Nous nous sommes divisé les tâches en deux, je me suis occupé avec un camarade de la partie capteur de distance. Nous avons crée une bibliothèque qui mesure la vitesse à partir de deux distances récupérés par les deux capteurs. L'implémentation des capteurs était assez simple car il y avait déjà une librarie de faite pour ce type de capteur.
            <br/>
            <br/>
            Lorsque nous avons voulu testé en réel notre système en l'implémentant sur un vélo, nous avons remarqué qu'il y avait beaucoup d'imprecision notamment avec la mesure de la distance des capteurs et donc de la vitesse des objets passant à côté du vélo. L'algorithme n'était également pas assez performance, il y avait des problèmes lorsque par exemple il y avait deux objets distinct qui passait à côté du vélo
            Par la suite, nous avons amélioré tous ces petits problèmes dans le <a href={"/projetintegrateur"}> <strong className="purple"> Projet Innovant.</strong> </a>

          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default ContributionCard;
