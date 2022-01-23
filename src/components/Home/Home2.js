import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              QUI <span className="purple"> SUIS </span> JE ?
            </h1>
            <p className="home-about-body">
            Passionné par l’innovation depuis tout jeune, je souhaite contribuer à l’évolution technologique.  
              <br />
              <br />Je suis particulièrement à l’aise en programmation dans le domaine des systèmes embarquées, notamment en 
              <i>
                <b className="purple"> C, C++ et RUST. </b>
              </i> 
              Je souhaiterai à terme, travailler dans une entreprise innovante et qui developpe de nouvelles technologies. &nbsp;
              <i>
              <br />
              <br />
                <b className="purple"> La Robotique, l'Aéronautique  </b> et 
                <b className="purple"> l'Automobile
                </b> sont des domaines dans lequel j'aimerai pouvoir contribuer.

              </i>
              <br />
              <br />
              Etant avide de connaissance, j'aimerai en apprendre d'avantage en
              <b className="purple"> IA  </b> (Machine learning, Deep learning) et en
              <i>
                <b className="purple">
                  {" "}
                  développement d'application, logiciel, et web. 
                </b> (Qt, React/Angular...).
              </i>
              <br />
              <br />
              <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}><i>
            "Wisdom is not a product of schooling but of the lifelong attempt to acquire it."{" "}
              </i>
              </p>
              <footer className="blockquote-footer">Albert Einstein</footer>

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <p>
              Pour me <span className="purple">contacter </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/T-berton"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
             
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/thomas-berton-a93ba5141/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
