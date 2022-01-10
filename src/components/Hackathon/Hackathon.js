import React from "react";
import HackathonCard from "./HackathonCard";
import SolutionCard from "./SolutionCard";
import ContributionCard from "./ContributionCard";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Architecture_hack from "../../Assets/Projects/hackathon.PNG";
import Hardware_hack from "../../Assets/Projects/hackathon2.PNG"
import { Button, ButtonGroup, DropdownButton, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import { ReactVideo } from "reactjs-media";
import video from "../../Assets/Projects/hackathon_final.mp4";


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
            md={12}
            style={{
              justifyContent: "center",
              paddingTop: "0px",
              paddingBottom: "0px",
            }}
          >

            <HackathonCard />
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


       
        <Col
            md={6}
            style={{ paddingTop: "10px", paddingBottom: "10px" }}
            className="about-img"
          >
            <img src={Architecture_hack} alt="about" className="img-fluid rounded" />

            </Col>
            <Col
            md={6}
            style={{ paddingTop: "10px", paddingBottom: "10px" }}
            className="about-img"
          >
            <img src={Hardware_hack} alt="about" className="img-fluid rounded" />
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
      <video  id='video'>
        <source src={video} width="750" height="500" controls type='video/mp4'/>
      </video>
      </Container>

      </Container>
          );
          }

export default Hackathon;
