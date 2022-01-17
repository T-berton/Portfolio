import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function CapteurGazCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ justifyContent: "left", textAlign: "justify" }}>
          <h1 style={{ fontSize: "1.4em", paddingBottom: "0px" }}>
              <strong className="purple">Contexte </strong>
            </h1>
            Ce projet a été réalisé dans le cadre de ma formation, pour l'unité de formation "Smart Device" qui comprenait . Pour réaliser ce projet, j'étais dans une équipe de trois. La matière était divisé en deux parties. Dans un premier temps, nous avons eu une semaine de stage dans un laboratoire de recherche "AIME", pour concevoir un capteur de gaz à nanoparticules. A la fin du stage, nous avons elaboré une datasheet correspondant à notre capteur. 
            <br/>
            <br/>
            Ensuite, il était question de realiser un système connecté et intelligent qui utilisait ce capteur de gaz. Nous devions donc faire le hardware et le software de cet objet. 

          </p>
          <br/>
          <p style={{ justifyContent: "left", textAlign: "justify" }}>
          <h1 style={{ fontSize: "1.4em", paddingBottom: "0px" }}>
              Ma<strong className="purple"> Contribution Personnelle </strong>
            </h1>
            Concernant la partie hardware, nous avons décidé de faire un shield Arduino, dans lequel nous pourrions brancher un microcontrolleur (l'ESP32 dans notre cas), un récepteur LoRaWAN ,un capteur de gaz arduino (de marque groove) et notre capteur de gaz crée à l'AIME. 
            Notre équipe étant formé de trois élève ingénieur en embarqué, nous étions à l'aise dans la réalisation du circuit electronique et du PCB sous KICAD. Pour rajouter un peu d'automatique dans notre projet, nous avons décider d'implémenter une commande PID pour maintenir une température de 200°C (température pour laquelle le capteur à nano-particule est le plus fonctionnelle).
            Nous avons également implémenté une interruption matérielle qui se déclenche lorsque le capteur de gaz détecte une valeur seuil (qui aura été préalablement choisit).<br/> <br/> 

           
            </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default CapteurGazCard;