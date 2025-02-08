
// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
// import Github from "./Github";
// import Techstack from "./Techstack";
// import laptopImg from "../../Assets/about.png";
// import Toolstack from "./Toolstack";
// import Education from "./Education";
// import WorkExperience from "./WorkExperience";
// import AboutCard from "./AboutCard";


// function About() {
//   return (
//     <Container fluid className="about-section">
//       <Particle />
//       <Container>
//         <Row style={{ justifyContent: "center", padding: "10px" }}>
//           <Col  
//             md={7}
//             style={{
//               justifyContent: "center",
//               paddingTop: "30px",
//               paddingBottom: "50px",
//             }}
//           >
//             <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
//               Know Who <strong className="purple">I'M</strong>
//             </h1>
//             <AboutCard />
//           </Col>
//           <Col
//             md={5}
//             style={{ paddingTop: "120px", paddingBottom: "50px" }}
//             className="about-img"
//           >
//             <img src={laptopImg} alt="about" className="img-fluid" />
//           </Col>
//         </Row>
//         <Education />
//         <h1 className="project-heading">
//           Work Experience <strong className="purple">Highlights</strong>
//         </h1>
//         <WorkExperience />
//         <h1 className="project-heading">
//           Professional <strong className="purple">Skillset </strong>
//         </h1>
//         <Techstack />
//         <h1 className="project-heading">
//           <strong className="purple">Tools</strong> I use
//         </h1>
//         <Toolstack />
//         <Github />
//       </Container>
//     </Container>
//   );
// }

// export default About;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import AboutCard from "./AboutCard";
import Projects from "./Projects"; // Import the new Projects component

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <AboutCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <Education />
        <h1 className="project-heading">
          Work Experience <strong className="purple">Highlights</strong>
        </h1>
        <WorkExperience />
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
        <h1 className="project-heading">
          Featured <strong className="purple">Projects</strong>
        </h1>
        <Projects /> {/* Add the Projects section */}
        <Github />
      </Container>
    </Container>
  );
}

export default About;