
import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiAws, DiEclipse } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiPostman,
  SiGithub,
  SiVisualstudio,
  SiDocker,
  SiSpring,
  SiSwagger,
} from "react-icons/si";
import "./Toolstack.css"; 

function Toolstack() {
  const tools = [
    { icon: <DiEclipse />, name: "Eclipse" },
    { icon: <SiVisualstudiocode />, name: "Visual Studio Code" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <SiSpring />, name: "Spring Tool Suite" },
    { icon: <SiSwagger />, name: "Swagger" },
    { icon: <SiVisualstudio />, name: "Visual Studio" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <div className="tech-icon-box">
            <div className="tech-icon">{tool.icon}</div>
            <div className="tech-name">{tool.name}</div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
