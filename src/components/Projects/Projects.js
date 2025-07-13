import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import amazonTracker from "../../Assets/Projects/amazon-tracker.png";
import iiitKota from "../../Assets/Projects/iiit-kota.png";
import grammarEngine from "../../Assets/Projects/grammar-engine.png";
import dataCleaning from "../../Assets/Projects/data-cleaning.png";
import fileSorter from "../../Assets/Projects/file-sorter.png";
import eatsmartAI from "../../Assets/Projects/eatsmart-ai.png";

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
              imgPath={eatsmartAI}
              isBlog={false}
              title="EatSmart AI - Food Image Classifier"
              description="A deep learning project that uses convolutional neural networks to identify food items from images and estimate their calorie content. Built with Python, TensorFlow/Keras, and Flask web interface. Features real-time food classification and nutritional information."
              ghLink="https://github.com/kamaljyotsingh/EatSmart-AI-Food-Image-Classifier-Calorie-Estimator"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazonTracker}
              isBlog={false}
              title="Amazon Price Tracker"
              description="A web application that tracks Amazon product prices and sends notifications when prices drop. Built with modern web technologies to help users save money on their purchases by monitoring price changes in real-time."
              ghLink="https://github.com/kamaljyotsingh/amazon-price-tracker"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iiitKota}
              isBlog={false}
              title="IIIT-KOTA-IN-OUT STATUS"
              description="A real-time biometric attendance system built with the MERN stack. Features include user authentication, real-time attendance tracking, admin dashboard, and comprehensive reporting. Designed to streamline attendance management for educational institutions."
              ghLink="https://github.com/kamaljyotsingh/IIIT-KOTA-IN-OUT"
              demoLink="https://iiit-kota-in-out.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={grammarEngine}
              isBlog={false}
              title="Grammar Scoring Engine"
              description="An AI-powered system that evaluates spoken English using speech-to-text conversion and natural language processing. Features include grammar correction, pronunciation assessment, and detailed feedback to help users improve their English speaking skills."
              ghLink="https://github.com/kamaljyotsingh/Grammer-Scoring-Engine-ML-"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dataCleaning}
              isBlog={false}
              title="Data Cleaning and EDA with SQL"
              description="A comprehensive data cleaning project using SQL queries to preprocess and transform raw datasets. Implements various data cleaning techniques including handling missing values, removing duplicates, data validation, and standardization for improved data quality."
              ghLink="https://github.com/kamaljyotsingh/Project---Data-Cleaning-using-SQL"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fileSorter}
              isBlog={false}
              title="Automated File Sorter"
              description="A Python automation tool that organizes files by type, date, and other criteria. Features include automatic file categorization, duplicate detection, and batch processing capabilities to streamline file management workflows."
              ghLink="https://github.com/kamaljyotsingh/Automated-File-Sorter-using-Python"
              demoLink=""
            />
          </Col>
          {/* More project cards will be added here */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
