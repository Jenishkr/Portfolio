import React from "react";
import { Col, Row } from "react-bootstrap";
import Eclipse from "../../Assets/TechIcons/Eclipse.svg";
import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";
import postman from "../../Assets/TechIcons/Postman.svg";
import git from "../../Assets/TechIcons/Git.svg";
import docker from "../../Assets/TechIcons/Docker.svg";
import aws from "../../Assets/TechIcons/AWS.svg";
import MySQL from "../../Assets/TechIcons/Mysql.svg";
import Maven from "../../Assets/TechIcons/Maven.svg";
import Windows from "../../Assets/TechIcons/Windows.svg";
import Linux from "../../Assets/TechIcons/Linux.svg";
import GitHub from "../../Assets/TechIcons/GitHub.svg";
import Figma from "../../Assets/TechIcons/Figma.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Eclipse} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Eclipse</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">EditPlus</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={MySQL} alt="MySQL" className="tech-icon-images" />
        <div className="tech-icons-text">MySQL Workbench</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={intelliJ} alt="intelliJ" className="tech-icon-images" />
        <div className="tech-icons-text">IntelliJ IDEA</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Maven} alt="Maven" className="tech-icon-images" />
        <div className="tech-icons-text">Maven</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={postman} alt="postman" className="tech-icon-images" />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Windows} alt="Windows" className="tech-icon-images" />
        <div className="tech-icons-text">Windows</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Linux} alt="Linux" className="tech-icon-images" />
        <div className="tech-icons-text">Linux</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={macOs} alt="macOs" className="tech-icon-images" />
        <div className="tech-icons-text">macOS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={git} alt="git" className="tech-icon-images" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={GitHub} alt="github" className="tech-icon-images" />
        <div className="tech-icons-text">GitHub</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={docker} alt="docker" className="tech-icon-images" />
        <div className="tech-icons-text">Docker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={aws} alt="aws" className="tech-icon-images" />
        <div className="tech-icons-text">AWS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Figma} alt="Figma" className="tech-icon-images" />
        <div className="tech-icons-text">Figma</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
