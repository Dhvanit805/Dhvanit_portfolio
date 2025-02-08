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
      </Container>
    </Container>
  );
}


export default Home2;
