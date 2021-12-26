import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import logo_iss from "../../Assets/ISS_Logo.png";
import Toolstack from "./Toolstack";
import AboutMS from "./AboutMS";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              //paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Mon <strong className="purple">Parcours</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={9}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
            }}
          >

        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
        Présentation du  <strong className="purple"> Master Innovative Smart Sytem </strong>
            </h1>   
        <AboutMS/>
          </Col>
          <Col
            md={70}
            style={{ paddingTop: "80px", paddingBottom: "20px" }}
            className="about-logoiss"
          >
            <img src={logo_iss} alt="about" className="img-fluid" />
          </Col>
        </Row>
        


        <h1 className="project-heading">
          Mes  <strong className="purple"> langages de programmation </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
        Mes<strong className="purple"> outils informatiques </strong> 
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
