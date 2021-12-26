import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Je m'appelle <span className="purple">Thomas BERTON </span> et je suis actuellement en dernière année d'école d'ingénieur à l' <span className="purple"> INSA Toulouse. </span> 
            En entrant à l'INSA, je me suis spécialisé dans le domaine des <span className="purple">systèmes embarqués </span> dans la filière Automatique et Electronique (AE).
            Pour ma dernière année, j'ai décidé de suivre la spécialité <span className="purple">Innovative Smart System</span> qui regroupe des étudiants de plusieurs filières (Génie Physique/ Informatique et Réseaux), afin d'avoir un bagage technique pluridisciplinaire.
            <br />
            <br />
            <br />
            Sinon, en dehors de mes études, voici mes passes-temps favoris :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Faire du sport
            </li>
            <li className="about-activity">
              <ImPointRight /> Apprendre de nouveaux langage de programmation
            </li>
            <li className="about-activity">
              <ImPointRight /> Voyager
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
