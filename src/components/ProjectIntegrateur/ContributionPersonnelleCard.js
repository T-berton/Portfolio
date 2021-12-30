import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function ContributionPersonnelleCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ justifyContent: "left", textAlign: "justify" }}>
            Pour la réalisation de ce projet, je me suis occupé de mettre en place les capteurs Lidar et de créer un serveur BLE sur notre ESP32.
            Nous avons commandé deux lidar, que nous avons placé à l'avant et à l'arrière du vélo. Pour mettre en place notre système, j'ai d'abord crée une bibliothèque pour pouvoir utiliser et initialiser les LIDAR afin qu'il mesure la distance de tout objet passant devant le LIDAR.
            On remarque que ce genre de capteur est très performant et précis notamment par la taille angulaire du cône de transmission du laser qui est de deux degré favorisant ainsi une détection très précise.
           <br/> 
           Lorsqu'un capteur détecte un objet il va enregistrer sa distance, un certain "timestamp" et activer un flag. Lorsque le deuxième objet détecte la même présence à la même distance un deuxième flag est activé. Lorsque ses deux flags sont activés on peut relevé la distance et le temps mesuré par les deux capteurs et ainsi en déduire la vitesse.
           <br/> 
           <br/> 
           Lorsque nous avons récupérer les différentes données liés au capteur, il faut l'envoyer au téléphone. Pour cela, nous avons décidér d'utiliser le BLE qui est un protocole de communication avec une faible consommation et fonctionnant à une faible portée, ce qui est idéal pour notre cas d'utilisation. 
           Le format de données que nous avons opté est le format JSON. Je me suis occupé de la création de la bibliothèque pour initialiser un serveur BLE sur un ESP32. Un téléphone portable peut donc se connecter à l'ESP32, et celui-ci reçoit en format JSON les données des capteurs.
           
            
          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default ContributionPersonnelleCard;