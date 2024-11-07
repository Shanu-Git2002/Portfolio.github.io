import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/T.png";
import chatify from "../../Assets/Projects/n.png";
import bitsOfCode from "../../Assets/Projects/A.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Nexus"
              description="Features of a Apollo web application include functionalities and capabilities that enhance the user experience and provide utility in sales B2B connection.
              Create automated
              multi-step touchpoints for sales outreach
              including emails
              calls, and LinkedIn tasks"
              ghLink="https://github.com/Shanu-Git2002/Sovereignty-Scripters_013-"
              demoLink="https://mellow-lamington-8db076.netlify.app/"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Alogorithm Analyzer"
              description="Time-Trail is a web application designed to help users manage their time and tasks efficiently. It includes features like user authentication (login), dynamic menu interactions, and responsive design, solving the problem of effective time management and task tracking."
              ghLink="https://github.com/ashwanistudy/Logic_Long_Jump_025/"
              demoLink="https://mellifluous-macaron-2b023b.netlify.app/"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="ProductivePro"
              description="Productivity Pro is a lightweight, web-based productivity application built with HTML, CSS, and JavaScript. It helps users manage their tasks, track goals, and maintain focus using the Pomodoro Technique. Designed for simplicity and efficiency, Productivity Pro ensures you stay organized and productive throughout your day."
              ghLink="https://github.com/Shanu-Git2002/Quantum-Quests_004"
              demoLink="https://luxury-centaur-45be48.netlify.app/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
