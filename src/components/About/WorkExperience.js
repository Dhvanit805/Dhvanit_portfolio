import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";

function WorkExperience() {
  const experience = {
    company: "DIPC Software",
    role: "Full Stack Developer",
    description: [
      "Built scalable backend systems for scheduling and task management using Spring Boot and Node.js.",
      "Implemented secure authentication with Spring Security and Express.js.",
      "Optimized workflows for health tracking and consultation management.",
      "Developed task tracking and collaboration features to boost productivity.",
      "Delivered high-performance solutions with a focus on efficiency and scalability.",
      "Integrated multimedia uploads (photos/videos) to enhance task reporting and user experience.",
    ],
    duration: "2023 - present",
  };

  return (
    <Container>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col md={8} className="tech-icons">
          <Card
            className="work-experience-card"
            style={{
              backgroundColor: "transparent",
              transition: "background-color 0.3s",
            }}
          >
            <Card.Body>
              <Card.Title style={{ fontWeight: "bold", fontSize: "1.9rem" }}>
                {experience.company}
              </Card.Title>
              <Card.Subtitle
                className="purple"
                style={{
                  fontStyle: "italic",
                  color: "##6610f2",
                  fontSize: "1.5rem",
                }}
              >
                {experience.role}
              </Card.Subtitle>
              <Card.Text style={{ fontSize: "0.95rem" }}>
                <strong>Duration:</strong> {experience.duration}
                <br />
                <div style={{textAlign:'left', marginLeft:'3px'}}>
                <strong style={{ marginTop: "10px"  , alignContent:"flex-start" }}>Description:</strong>
                </div>
                    
                <ul style={{ marginTop: "10px" }}>
                  {experience.description.map((point, index) => (
                    <li
                      key={index}
                      className="about-activity"
                      style={{
                        fontSize: "1rem",
                        marginBottom: "10px",
                        alignContent: "flex-start",
                        textAlign: "left",
                      }}
                    >
                      <ImPointRight /> {point}
                    </li>
                  ))}
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default WorkExperience;