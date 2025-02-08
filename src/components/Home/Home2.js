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
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m Dhvanit Patel, a passionate Full Stack Developer with a strong foundation in
              <i>
                <b className="purple"> Java, Spring Boot, and Node.js.</b>
              </i>
              <br />
              <br />
              Currently, I specialize in building scalable backend systems, secure authentication, and task management solutions using modern frameworks like 
              <b className="purple"> Spring Boot</b> and 
              <b className="purple"> Express.js.</b>
              <br />
              <br />
              My recent work involves creating efficient APIs, integrating multimedia features, and delivering high-performance solutions to enhance user experiences.
              <br />
              <br />
              I also enjoy exploring 
              <b className="purple"> MongoDB</b>, 
              <b className="purple"> RESTful APIs</b>, and designing seamless 
              <b className="purple"> frontend interfaces</b> with tools like HTML, CSS, and Bootstrap.
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
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Dhvanit137"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/your-username"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/dhvanitpatel0805?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/dhwanit805?igsh=MXA1bWVkZjQ2dm1kYg=="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
