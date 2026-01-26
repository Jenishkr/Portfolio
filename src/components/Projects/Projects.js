import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Code from "../../Assets/Projects/Code.jpg";
import Chat from "../../Assets/Projects/Chat.png";
import Music from "../../Assets/Projects/Music.png";
import Coin from "../../Assets/Projects/Coin.png";
import Pet from "../../Assets/Projects/Pet.png";

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
              imgPath={Code}
              isBlog={false}
              title="Email Sending Service REST API"
              description="A robust, scalable REST API service for sending emails asynchronously using Spring Boot, RabbitMQ, and PostgreSQL. This service supports JWT authentication, email templates via Thymeleaf, and secure SMTP configuration, making it suitable for enterprise-level email operations."
              ghLink="https://github.com/Jenishkr/Email-Sending-Service-REST-API"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Code}
              isBlog={false}
              title="MedCareHub"
              description="Hospital Management System A full-fledged Hospital Management System developed using the MERN Stack (MongoDB, Express, React, and Node.js). This application aims to streamline hospital operations, including patient management, appointments, bed availability, doctor scheduling, and staff and inventory management."
              ghLink="https://github.com/Jenishkr/MedCareHub.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Chat}
              isBlog={false}
              title="Basic Chat Application"
              description="This application allows users to simulate a chat environment where they can type and send messages through a clean and intuitive user interface. The focus of the project is to understand how text inputs, message rendering, and basic UI flows work in real-time interactions on the client side."
              ghLink="https://github.com/Jenishkr/Basic_chat_application"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Music}
              isBlog={false}
              title="Responsive Music Player"
              description=" This application allows users to play, pause, and navigate through a list of songs within an attractive and responsive interface. It is designed to work seamlessly across devices, offering a smooth and engaging music-listening experience directly in the browser."
              ghLink="https://github.com/Jenishkr/Responsive_Music_Player"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Pet}
              isBlog={false}
              title="Pet Adoption"
              description="This application provides users with an easy-to-use interface where they can browse through different pets and choose one to adopt. It focuses on creating an engaging UI, smooth interactions, and a clean layout suitable for a pet adoption theme."
              ghLink="https://github.com/Jenishkr/Pet_Adoption"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Code}
              isBlog={false}
              title="Exam Proctoring Tool"
              description="The AI-Based Online Exam Proctoring System is an advanced, real-time monitoring solution designed to ensure secure and fair online examinations. Built with cutting-edge computer vision, machine learning, and multi-layered monitoring techniques, this system offers a complete end-to-end proctoring experience for both students and invigilators."
              ghLink="https://github.com/Jenishkr/Exam_Proctoring_Tool"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Coin}
              isBlog={false}
              title="Coin Flip Game Using MetaMask"
              description="The Coin-Flip Game is a decentralized web application where users can bet ETH on a coin toss using the Ethereum Sepolia testnet. Players connect their MetaMask wallet, choose a side (Heads/Tails), place a wager in test ETH, and instantly see whether they win or lose. If the coin lands on their chosen side, they receive double their wager; otherwise, they lose their bet."
              ghLink="https://github.com/Jenishkr/Coin_Flip"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
