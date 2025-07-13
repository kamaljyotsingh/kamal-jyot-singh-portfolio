import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
  <blockquote className="blockquote mb-0">
    <p style={{ textAlign: "justify" }}>
      Hi Everyone, I am <span className="purple">Kamal Jyot Singh ⚡🎧🧠 </span>
      from <span className="purple">Jaipur, Rajasthan, India</span>.
      <br />
      I’m currently pursuing a B.Tech in Electronics and Communication Engineering at Indian Institute of Information Technology, Kota.
      <br />
      I’m passionate about problem solving, especially through
      <i><b className="purple"> Data Structures & Algorithms</b></i>, and I love diving deep into
      <i><b className="purple"> Data Analytics</b></i>, <i><b className="purple">Data Science</b></i>, and the world of
      <i><b className="purple"> AI/ML</b></i>.
      <br />
      I’m also exploring the power of <b className="purple">Generative AI</b> — building smart tools, intelligent websites,
      and experimenting with how AI can make tech more human.
      <br />
      <br />
      Apart from coding, here are a few things that keep my vibe alive:
    </p>
    <ul>
      <li className="about-activity">
        <ImPointRight /> Singing & Songwriting 🎤
      </li>
      <li className="about-activity">
        <ImPointRight /> Exploring AI tools and trends 🤖
      </li>
      <li className="about-activity">
        <ImPointRight /> Watching tech & music content 🎧
      </li>
    </ul>

    <p style={{ color: "rgb(155 126 172)" }}>
      "I don't just code — I vibe with it. Let's build something cool!" ⚡
    </p>
    <footer className="blockquote-footer">Kamal</footer>
  </blockquote>
</Card.Body>
    </Card>
  );
}

export default AboutCard;
