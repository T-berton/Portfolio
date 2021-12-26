import React from "react";
import HackathonCard from "./HackathonCard";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";



function Hackathon() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "0px" }}>
          <Col
            md={30}
            style={{
              justifyContent: "center",
              paddingTop: "0px",
              paddingBottom: "0px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "0px" }}>
              <strong className="purple">Hackathon</strong>
            </h1>

            <HackathonCard />

          </Col>


          </Row>
          </Container>
          </Container>
  );
}

export default Hackathon;
