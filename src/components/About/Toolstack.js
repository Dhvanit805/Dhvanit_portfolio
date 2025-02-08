// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import { DiEclipse } from "react-icons/di";
// import {
//   SiVisualstudiocode,
//   SiPostman,
//   SiSlack,
//   SiVercel,
//   SiMacos,
//   SiGithub,
//   SiVisualstudio,
// } from "react-icons/si";

// function Toolstack() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiEclipse />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiVisualstudiocode />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiPostman />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiGithub />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiVisualstudio />
//       </Col>
//     </Row>
//   );
// }

// export default Toolstack;
// import React from "react";
// import { Col, Row, Tooltip, OverlayTrigger } from "react-bootstrap";
// import { DiEclipse } from "react-icons/di";
// import {
//   SiVisualstudiocode,
//   SiPostman,
//   SiGithub,
//   SiVisualstudio,
// } from "react-icons/si";

// function Toolstack() {
//   const tools = [
//     { icon: <DiEclipse />, name: "Eclipse" },
//     { icon: <SiVisualstudiocode />, name: "Visual Studio Code" },
//     { icon: <SiPostman />, name: "Postman" },
//     { icon: <SiGithub />, name: "GitHub" },
//     { icon: <SiVisualstudio />, name: "Visual Studio" },
//   ];

//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       {tools.map((tool, index) => (
//         <Col xs={4} md={2} className="tech-icons" key={index}>
//           <OverlayTrigger
//             placement="top"
//             overlay={<Tooltip>{tool.name}</Tooltip>}
//           >
//             <div>{tool.icon}</div>
//           </OverlayTrigger>
//         </Col>
//       ))}
//     </Row>
//   );
// }

// export default Toolstack;
// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import { DiEclipse } from "react-icons/di";
// import {
//   SiVisualstudiocode,
//   SiPostman,
//   SiGithub,
//   SiVisualstudio,
// } from "react-icons/si";
// import "./Toolstack.css"; // Import the custom CSS file

// function Toolstack() {
//   const tools = [
//     { icon: <DiEclipse />, name: "Eclipse" },
//     { icon: <SiVisualstudiocode />, name: "Visual Studio Code" },
//     { icon: <SiPostman />, name: "Postman" },
//     { icon: <SiGithub />, name: "GitHub" },
//     { icon: <SiVisualstudio />, name: "Visual Studio" },
//   ];

//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       {tools.map((tool, index) => (
//         <Col xs={4} md={2} className="tech-icons" key={index}>
//           <div className="tech-icon-box">
//             <div className="tech-icon">{tool.icon}</div>
//             <div className="tech-name">{tool.name}</div>
//           </div>
//         </Col>
//       ))}
//     </Row>
//   );
// }

// export default Toolstack;
import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiEclipse } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiPostman,
  SiGithub,
  SiVisualstudio,
} from "react-icons/si";
import "./Toolstack.css"; // Custom CSS for styling

function Toolstack() {
  const tools = [
    { icon: <DiEclipse />, name: "Eclipse" },
    { icon: <SiVisualstudiocode />, name: "Visual Studio Code" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiGithub />, name: "GitHub" },
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
