import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mon <strong className="purple">travail récent </strong>
        </h1>
        <p style={{ color: "white" }}>
          Certains projets sur lesquels j'ai travaillé récemment
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Dicecord"
              description="Bot discord pour gestion multinodale de salon de jeu de rôle avec prise en charge et archivage des différents lancés de dés"
              link="https://github.com/yatoub/dicecord"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="DiviaParser"
              description="Utilitaire en ligne de commande pour savoir a quelle heure passe le prochain bus à un arret donné"
              link="https://github.com/yatoub/diviaParser"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Loki"
              description="Utilitaire de chiffrement de données local en AES-256"
              link="https://github.com/yatoub/loki"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
