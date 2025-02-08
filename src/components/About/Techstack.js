import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJava, DiMysql, DiNodejs, DiMongodb, DiGit } from "react-icons/di";
import {
  SiSpringboot,
  SiHibernate,
  SiSpringsecurity,
  SiExpress,
  SiJavascript,
  SiFirebase,
  SiReact,
  SiJson,
} from "react-icons/si";
import "./Toolstack.css"; 

function Techstack() {
  const technologies = [
    { icon: <DiJava />, name: "Java" },
    { icon: <SiSpringboot />, name: "Spring Boot" },
    { icon: <SiHibernate />, name: "Hibernate" },
    { icon: <SiSpringsecurity />, name: "Spring Security" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <DiMysql />, name: "MySQL" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <DiGit />, name: "Git" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiReact />, name: "React" },
    { icon: <SiJson />, name: "JSON" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {technologies.map((tech, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <div className="tech-icon-box">
            <div className="tech-icon">{tech.icon}</div>
            <div className="tech-name">{tech.name}</div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
