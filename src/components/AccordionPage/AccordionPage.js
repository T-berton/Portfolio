import * as React from "react";
import { render } from "react-dom";
import { FullpageAccordion, Panel } from "react-fullpage-accordion";
import "react-fullpage-accordion/dist/react-fullpage-accordion.css";
import { Container, Row, Col } from "react-bootstrap";

import Smart_device from "../../Assets/Smart.jpg";
import Middleware_Services from "../../Assets/Middleware_Services.jpg";
import Communication from "../../Assets/connection.jpg";
import Big_data from "../../Assets/Big_data.jpg";
import Innovative_project from "../../Assets/Innovative_project.webp";
import Particle from "../Particle";

import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import { Link } from "react-router-dom";

function AccordionPage() {
  return (
    <div className="App">

    <Container fluid className="about-section">
    <Row style={{paddingTop: "30px" }}>
      <FullpageAccordion height="850px">
      
        <Panel
          itemId="0"
          background={Smart_device}
        >
            <Particle/>
        <h1 style={{ fontSize: "2.8em", paddingBottom: "20px" }}>
        <a className="purple"> Smart Device  </a>
            </h1>

        <Link to="/Smartdevice">
          <Button variant="primary">
          <a>En savoir plus...</a>
          </Button>
        </Link>
  

        </Panel>
        <Panel
          itemId="1"
          background={Middleware_Services}
        >
          <Particle/>
     <h1 style={{ fontSize: "2.8em", paddingBottom: "20px" }}>
        <a className="purple"> Middleware  </a>
            </h1>  

            <Link to="/Middleware">
          <Button variant="primary">
          <a>En savoir plus...</a>
          </Button>
        </Link>
  
        </Panel>
        <Panel
          itemId="2"
          background={Communication}
        >
          <Particle/>
              <h1 style={{ fontSize: "2.8em", paddingBottom: "20px" }}>
        <a className="purple"> Protocole de Communication </a>
            </h1>  

            <Link to="/Protocole_de_Communication">
          <Button variant="primary">
          <a>En savoir plus...</a>
          </Button>

        </Link>
  
  
        </Panel>

        <Panel
          itemId="3"
          background={Big_data}
        >
          <Particle/>
                 <h1 style={{ fontSize: "2.8em", paddingBottom: "20px" }}>
        <a className="purple"> Big Data </a>
            </h1>  

            <Link to="/BigData">
          <Button variant="primary">
          <a>En savoir plus...</a>
          </Button>
        </Link>
  

        </Panel>
        <Panel
          itemId="4"
          background={Innovative_project}
        >
          <Particle/>
               <h1 style={{ fontSize: "2.8em", paddingBottom: "20px" }}>
        <a className="purple"> Projet Innovant</a>
            </h1>  
            <Link to="/Projetinnovant">
          <Button variant="primary">
          <a>En savoir plus...</a>
          </Button>
        </Link>
  

        </Panel>
        
      </FullpageAccordion>
      </Row>

      </Container>
 

    </div>
  );
}
export default AccordionPage;

