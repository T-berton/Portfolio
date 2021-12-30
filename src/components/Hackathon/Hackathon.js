import React from "react";
import HackathonCard from "./HackathonCard";
import SolutionCard from "./SolutionCard";
import ContributionCard from "./ContributionCard";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Architecture_hack from "../../Assets/Projects/Architecture_hack-removebg-preview.png";
import Hardware_hack from "../../Assets/Projects/Hardware_hack-removebg-preview.png"


function Hackathon() {
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
        <strong className="purple"> Hackathon </strong>
            </h1>  
          </Col>

        </Row>

        <Row style={{ justifyContent: "center", padding: "0px" }}>
          <Col
            md={6}
            style={{
              justifyContent: "center",
              paddingTop: "0px",
              paddingBottom: "0px",
            }}
          >

            <HackathonCard />
            </Col>

            <Col
            md={6}
            style={{ paddingTop: "150px", paddingBottom: "10px" }}
            className="about-img"
          >
            <img src={Architecture_hack} alt="about" className="img-fluid" />
            <br />
            <br />

            <img src={Hardware_hack} alt="about" className="img-fluid" />
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

        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
        Notre  <strong className="purple"> Solution </strong>
            </h1>  
            <SolutionCard /> 
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

      <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
      Ma <strong className="purple">Contribution Personnelle </strong> 
      </h1>  
      <ContributionCard /> 
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

      <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
      Notre <strong className="purple"> Résultat </strong> 
      </h1>  
      Mettre la vidéo 
      </Col>

      </Row>

      </Container>
      </Container>
          );
          }

export default Hackathon;
