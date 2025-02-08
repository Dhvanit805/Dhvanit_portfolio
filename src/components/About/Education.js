import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Education() {
  const educationData = [
    {
      institution: "Silver Oak University",
      degree: "Bachelor in Information Technology",
      duration: "2021 - 2025",
      score: "9.21 CGPA",
    },
    {
      institution: "Vijay Nagar Higher Secondary School",
      degree: "Higher Secondary Certificate (HSC)",
      duration: "2021",
      score: "59.38%",
    },
  ];

  return (
    <Container>
      <h1 className="project-heading">
      Education <strong className="purple"> Background</strong>
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }} >
        {educationData.map((edu, index) => (
          <Col     className="tech-icons" key={index}>
            <Card
              className="education-card"
              style={{
                
                backgroundColor: "transparent",
                transition: "background-color 0.3s", // Smooth transition effect
              }}
            //   onMouseEnter={(e) =>
            //     (e.currentTarget.style.backgroundColor = "transparent")
            //   }
            //   onMouseLeave={(e) =>
            //     (e.currentTarget.style.backgroundColor = "transparent")
            //   }
            >
              <Card.Body>
                <Card.Title style={{ fontWeight: "bold", fontSize: "1.6rem" }}>
                  {edu.institution}
                </Card.Title>
                <Card.Subtitle
                  className="mb-2"
                  style={{ fontStyle: "italic" }}
                >
                  {edu.degree}
                </Card.Subtitle>
                <Card.Text style={{ fontSize: "0.95rem" }}>
                  <strong>Duration:</strong> {edu.duration}
                  <br />
                  <strong>Score:</strong> {edu.score}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Education;
