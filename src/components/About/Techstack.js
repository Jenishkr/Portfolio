import React from "react";
import { Col, Row } from "react-bootstrap";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import C from "../../Assets/TechIcons/C++.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import JavaIcon from "../../Assets/TechIcons/Java.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import HTML from "../../Assets/TechIcons/HTML5.svg";
import CSS from "../../Assets/TechIcons/CSS3.svg";
import Bootstrap from "../../Assets/TechIcons/Bootstrap.svg";
import Express from "../../Assets/TechIcons/Express.svg";
import SpringBoot from "../../Assets/TechIcons/Spring.svg";
import SpringMVC from "../../Assets/TechIcons/Spring.svg";
import Hibernate from "../../Assets/TechIcons/Hibernate.svg";
import RestAPI from "../../Assets/TechIcons/FastAPI.svg";
import TensorFlow from "../../Assets/TechIcons/TensorFlow.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <img src={HTML} alt="HTML" />
        <div className="tech-icons-text">HTML</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={CSS} alt="CSS" />
        <div className="tech-icons-text">CSS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Bootstrap} alt="Bootstrap" />
        <div className="tech-icons-text">Bootstrap</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="Tailwind CSS" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="JavaScript" />
        <div className="tech-icons-text">JavaScript</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Typescript} alt="TypeScript" />
        <div className="tech-icons-text">TypeScript</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={C} alt="C" />
        <div className="tech-icons-text">C</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" />
        <div className="tech-icons-text">SQL</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="React JS" />
        <div className="tech-icons-text">React JS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="Node JS" />
        <div className="tech-icons-text">Node JS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Express} alt="Express JS" />
        <div className="tech-icons-text">Express JS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Mongo} alt="MongoDB" />
        <div className="tech-icons-text">MongoDB</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={JavaIcon} alt="Java" />
        <div className="tech-icons-text">Java</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={SpringBoot} alt="Spring Boot" />
        <div className="tech-icons-text">Spring Boot</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={SpringMVC} alt="Spring MVC" />
        <div className="tech-icons-text">Spring MVC</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Hibernate} alt="Hibernate" />
        <div className="tech-icons-text">Hibernate</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={RestAPI} alt="REST API" />
        <div className="tech-icons-text">REST API</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={TensorFlow} alt="TensorFlow" />
        <div className="tech-icons-text">TensorFlow</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Firebase} alt="Firebase" />
        <div className="tech-icons-text">Firebase</div>
      </Col>

    </Row>
  );
}

export default Techstack;
