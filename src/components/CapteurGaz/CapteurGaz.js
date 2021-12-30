import React from "react";
import CapteurGazCard from "./CapteurGazCard";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";


function CapteurGaz() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>


      <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={12}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
            }}
          >

        <h1 style={{ fontSize: "2.8em", paddingBottom: "20px" }}>
        <strong className="purple"> Smart Device with Gaz Sensor </strong>
            </h1>  
          </Col>

        </Row>

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={12}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
            }}
          >

            <CapteurGazCard /> 
          </Col>

        </Row>
      
       

      </Container>
      </Container>
          );
          }

export default CapteurGaz;
