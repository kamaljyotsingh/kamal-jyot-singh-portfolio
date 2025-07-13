import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
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
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Yo! I'm Kamal — the guy who codes with logic and vibes. ✨
                I build websites that think (thanks to GenAI), play with data like it's a puzzle,
  and crack DSA problems just for fun.
  <br />
  <br />
  I speak fluent
  <i>
    <b className="purple"> Python, C++, and JavaScript </b>
  </i>
  — and sometimes talk to APIs more than people. 😅
  <br />
  <br />
  I love mixing creativity with code:
  From&nbsp;
  <i>
    <b className="purple">GenAI-powered apps</b>
  </i>
  &nbsp;to dashboards that
  <i>
    <b className="purple"> actually make sense</b>
  </i>
              , I'm all about building stuff that's smart and slick.
  <br />
  <br />
  Currently vibing with&nbsp;
  <b className="purple">React.js, Node.js, LangChain</b>, and anything&nbsp;
  <i>
    <b className="purple">AI/ML</b>
  </i>
  .
  <br />
  <br />
  Future goals? Build something crazy enough to make people go:&nbsp;
  <i>
                <b className="purple">"Wait... AI did that?" 🚀</b>
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
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/kamaljyotsingh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kamal-jyot-singh-8900b9247/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/tarxn_04_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
