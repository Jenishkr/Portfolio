import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

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
              I’m a Software Engineer who loves transforming ideas into
              reliable, scalable products. Over time, I’ve explored several
              technologies and found my passion in building high-performance
              systems and intuitive user experiences.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, Bootstrap, React.js, Node.js, Express,js, MongoDB, SQL, JAVA, Spring Boot and Hibernate{" "}
                </b>
              </i>
              — and I enjoy working across both backend and frontend stacks.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Enterprise-grade applications, Distributed systems,{" "}
                </b>
              </i>
              and exploring innovative ways to integrate on-chain and off-chain technologies.
              <br />
              <br />
              Whenever possible, I  enjoy building robust solutions using
              <b className="purple"> Java </b> along with modern frameworks and tools such as{" "}
              <i>
                <b className="purple">Spring Boot, Hibernate,</b> and{" "}
                <b className="purple">Microservices architectures.</b> I am also passionate about applying Java-based technologies in Web, Cloud, and Blockchain-related projects.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
