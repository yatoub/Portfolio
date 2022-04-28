import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour à tous, je suis <span className="purple">Paul Collin </span>
            de <span className="purple"> Dijon, France.</span>
            <br />Je suis Intégrateur Systèmes Linux
            <br />
            <br />
            A part le développement et l'exploitation systèmes, sur mon temps libre j'ai d'autres activités
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Photographie
            </li>
            <li className="about-activity">
              <ImPointRight /> Arts Martiaux
            </li>
            <li className="about-activity">
              <ImPointRight /> Sonorisation de concert
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Paul</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
