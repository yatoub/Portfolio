import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LAISSEZ MOI <span className="purple"> ME </span> PRESENTER
            </h1>
            <p className="home-about-body">
              Je suis tombé amoureux de linux et j'ai au moins appris
              quelque chose, je pense… 🤷‍♂️
              <br />
              <br />Je sais parler les classiques
              <i>
                <b className="purple"> Bash, Javascript et Python. </b>
              </i>
              <br />
              <br />
              Mon but principal est de construire de nouveaux &nbsp;
              <i>
                <b className="purple">produits et applications Web </b>
                dans différents domaines comme les{" "}
                <b className="purple">
                  services aux utilisateurs et organisations.
                </b>
              </i>
              <br />
              <br />
              Dès que possible, j'applique ma passion pour développer des projets
              avec le  <b className="purple">DevOps</b> et les
              <i>
                <b className="purple">
                  {" "}
                  outils modernes de développement et gestion de projet
                </b>
              </i>
              &nbsp; comme
              <i>
                <b className="purple"> Ansible et Docker</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>GARDONS LE CONTACT</h1>
            <p>
              Vous êtes libres de vous <span className="purple">connecter </span>avec moi
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/yatoub"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/paul-collin-b8bb57b5/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
