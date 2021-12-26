import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function HackathonCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ justifyContent: "left", textAlign: "justify" }}>
          Le projet "Safe city for cyclist" vise à aider les gens à identifier les zones dangereuses pour les cyclistes dans les villes. Ces zones seront accessibles au public et affichées sur une carte interactive sur une application android. Les informations seront recueillies à partir du vélo de chaque utilisateur, à l'aide de capteurs de distance (ultrason) pour détecter la distance et la vitesse des voitures qui passent à côté de chaque utilisateur. Notre système se compose également d'un GPS, afin de pouvoir géolocaliser les utilisateurs. Ces données seront ensuite récupérées par un Raspberry et envoyées à un serveur en utilisant le protocole oneM2M. Les utilisateurs pourront installer notre système sur leur vélo.


            <br />
            <br />
            Aujourd'hui, il y a 17 millions de cyclistes en France. Le nombre d'accidents ne cesse d'augmenter, on compte en effet près de 200 morts par an. De nombreuses villes sont mal équipées en termes d'infrastructures cyclables et ne sont pas en mesure d'offrir un environnement sûr à leurs cyclistes. Très souvent, les cyclistes se retrouvent à côtoyer les voitures, ce qui peut être très dangereux compte tenu des limitations techniques de la plupart des vélos (pas de rétroviseurs, pas de feux stop, etc.).

C'est pourquoi le cycliste a besoin d'une plateforme qui le guiderait à travers la ville en toute sécurité, soit en utilisant uniquement les pistes cyclables, soit en utilisant les routes pour voitures qui seraient considérées comme les plus sûres. De telles plateformes existent déjà mais ne sont pas automatisées (comme l'application Geovelo). Les utilisateurs doivent s'arrêter pour signaler les zones dangereuses sur leur téléphone, ce qu'ils peuvent facilement oublier de faire. La plateforme serait également un moyen pour les dirigeants des villes de mieux comprendre où implanter leurs prochaines pistes cyclables et comment entretenir celles qui existent déjà.

Ce système s'adresse donc aux cyclistes et aux dirigeants des villes en charge de la planification urbaine.

            <br />
            
          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default HackathonCard;
