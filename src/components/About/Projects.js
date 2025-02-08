import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

// Import project images
import facultyPortalImg from "../../Assets/Projects/faculty-portal.png";
import pizzaOrderImg from "../../Assets/Projects/hometown-pizza.png"
import portfolioImg from "../../Assets/Projects/DP-removebg-preview.png";

function Projects() {
  const projectData = [
    {
      title: "Faculty Portal",
      subtitle: "College and Faculty Management System",
      description:
        "Developed a secure portal for faculty to manage personal details, lecture schedules, attendance, and subject notes using Spring Boot. Integrated Zoom for online lectures, automated student notifications for leaves, and enabled seamless communication with the HOD.",
      image: facultyPortalImg,
    },
    {
      title: "HomeTown Pizza",
      subtitle: "Hotel Menu-Order Online Webpage",
      description:
        "Created a web page where users can view pizza details and place orders. Developed using updated HTML, CSS, JavaScript, and Bootstrap for the frontend, with Spring Boot for the backend.",
      image: pizzaOrderImg,
    },
    {
      title: "Portfolio",
      subtitle: "Personal Project",
      description:
        "Designed and built a personal portfolio website to showcase projects and skills. Leveraged Bootstrap for responsive design, JavaScript for interactive elements, and HTML/CSS for structure and styling.",
      image: portfolioImg,
    },
  ];

  return (
    <Container>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {projectData.map((project, index) => (
          <Col className="tech-icons" key={index} style={{ marginBottom: "20px" }}>
            <Card
              className="project-card"
              style={{
                backgroundColor: "transparent",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
              }}
            >
              {/* Project Image */}
              <Card.Img
                variant="top"
                src={project.image}
                alt={project.title}
                style={{
                  height: "250px", // Adjust height as needed
                  width: "100%", // Ensures full width of card
                  objectFit: "cover",
                  borderRadius: "10px 10px 0 0",
                }}
              />
              <Card.Body>
                <Card.Title style={{ fontWeight: "bold", fontSize: "1.6rem", marginBottom: "10px" }}>
                  {project.title}
                </Card.Title>
                <Card.Subtitle
                  className="mb-2"
                  style={{ fontStyle: "italic", color: "#a29bfe", marginBottom: "10px" }}
                >
                  {project.subtitle}
                </Card.Subtitle>
                <Card.Text style={{ fontSize: "1rem", textAlign: "justify", lineHeight: "1.6", marginTop: "10px" }}>
                  {project.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
