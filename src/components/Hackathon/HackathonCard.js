import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function HackathonCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ justifyContent: "left", textAlign: "justify" }}>
          <h1 style={{ fontSize: "1.4em", paddingBottom: "0px" }}>
              <strong className="purple">Contexte et Problématique </strong>
            </h1>

            Aujourd'hui, il y a 17 millions de cyclistes en France. Le nombre d'accidents ne cesse d'augmenter, on compte en effet près de 200 morts par an. De nombreuses villes sont mal équipées en termes d'infrastructures cyclables et ne sont pas en mesure d'offrir un environnement sûr à leurs cyclistes. Très souvent, les cyclistes se retrouvent à côtoyer les voitures, ce qui peut être très dangereux compte tenu des limitations techniques de la plupart des vélos (pas de rétroviseurs, pas de feux stop, etc.).

C'est pourquoi le cycliste a besoin d'une plateforme qui le guiderait à travers la ville en toute sécurité, soit en utilisant uniquement les pistes cyclables, soit en utilisant les routes pour voitures qui seraient considérées comme les plus sûres. De telles plateformes existent déjà mais ne sont pas automatisées (comme l'application Geovelo). Les utilisateurs doivent s'arrêter pour signaler les zones dangereuses sur leur téléphone, ce qu'ils peuvent facilement oublier de faire.
 La plateforme serait également un moyen pour l'administration en charge de la planification urbaine de mieux comprendre où implanter leurs prochaines pistes cyclables et comment entretenir celles qui existent déjà.

<br/>
<br/>
Aujourd'hui, il y a 17 millions de cyclistes en France. Le nombre d'accidents ne cesse d'augmenter, on compte en effet près de 200 morts par an. De nombreuses villes sont mal équipées en termes d'insfrastructures cyclables et ne sont pas en mesure d'offrir un environnement sûr à leur cyclistes. Très souvent, les cyclsites se retrouvent à côtoyer les v
            
          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default HackathonCard;
