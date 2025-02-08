// import React from "react";
// import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

// function AboutCard() {
//   return (
//     <Card className="quote-card-view" style={{ border: "2px solid #000" }}>
//       <Card.Body>
//         <blockquote className="blockquote mb-0">
//           <p style={{ textAlign: "justify" }}>
//             Hi Everyone, I am <span className="purple">Dhvanit Patel</span> 
//             from <span className="purple">Ahmedabad, Gujarat</span>.
//             <br />
//             I am a passionate and dedicated <span className="purple">Full Stack Developer</span> with expertise in modern web and software technologies.
//             <br />
//             My focus lies in creating efficient, scalable, and user-friendly solutions to solve real-world problems.
//             <br />
//             <br />
//             Apart from coding, some other activities that I love to do:
//           </p>
//           <ul>
//             <li className="about-activity">
//               <ImPointRight /> Exploring New Technologies
//             </li>
//             <li className="about-activity">
//               <ImPointRight /> Reading Tech Blogs
//             </li>
//             <li className="about-activity">
//               <ImPointRight /> Traveling and Discovering Cultures
//             </li>
//           </ul>

//           <p style={{ color: "rgb(155 126 172)" }}>
//             "Passion for learning and building drives my creativity!"{" "}
//           </p>
//           <footer className="blockquote-footer">Dhvanit Patel</footer>
//         </blockquote>
//       </Card.Body>
//     </Card>
//   );
// }

// export default AboutCard;
import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view" style={{ border: "2px solid #000" }}>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dhvanit Patel</span> 
            from <span className="purple">Ahmedabad, Gujarat</span>.
            <br />
            I am a passionate and dedicated <span className="purple">Full Stack Developer</span> with expertise in modern web and software technologies.
            <br />
            My focus lies in creating efficient, scalable, and user-friendly solutions to solve real-world problems.
            <br />
            <br />
            Apart from coding, some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Discovering Cultures
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Passion for learning and building drives my creativity!"{" "}
          </p>
          <footer className="blockquote-footer">Dhvanit Patel</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
