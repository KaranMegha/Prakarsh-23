import React from "react";
import TeamCard from "./TeamCard";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "./Team.css";

function Team() {
  const core_team = [
    {
      imgUrl: "logo192.png",
      name: "Prakarsh",
      animation: "",
      githublink: "",
      linkdnlink: "",
      Position: "Developer",
    },
    {
      imgUrl: "logo192.png",
      name: "Prakarsh",
      animation: "",
      githublink: "",
      linkdnlink: "",
      Position: "Developer",
    },
    {
      imgUrl: "logo192.png",
      name: "Prakarsh",
      animation: "",
      githublink: "",
      linkdnlink: "",
      Position: "Developer",
    },
    {
      imgUrl: "logo192.png",
      name: "Prakarsh",
      animation: "",
      githublink: "",
      linkdnlink: "",
      Position: "Developer",
    },
  ];

  const developers = [
    {
      imgUrl: "assests/Team/parth.png",
      name: "Parth Vadhwana",
      animation: "",
      githublink: "",
      linkdnlink: "",
      Position: "Developer",
    },
    {
      imgUrl: "logo192.png",
      name: "Developers",
      animation: "",
      githublink: "",
      linkdnlink: "",
      Position: "Developer",
    },
    {
      imgUrl: "logo192.png",
      name: "Developers",
      animation: "",
      githublink: "",
      linkdnlink: "",
      Position: "Developer",
    },
    {
      imgUrl: "logo192.png",
      name: "Developers",
      animation: "",
      githublink: "",
      linkdnlink: "",
      Position: "Developer",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <div className="heading head mx-auto d-flex align-items-center justify-content-center">
          <h2
            className="abouthead "
            // data-aos="zoom-out"
            // data-aos-offset="300"
            // data-aos-easing="ease-in-out"
            // data-aos-delay="500"
          >
            &nbsp;&nbsp;Team
          </h2>
          <h2 className="front-text mx-auto">Team</h2>
        </div>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "" : ""}>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link className="team" eventKey="first">
                          Core Team
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className="team" eventKey="second">
                          Developers
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInDown "
                      className={isVisible ? "" : ""}
                    >
                      <Tab.Pane eventKey="first">
                        <Row className="align-items-center">
                          {core_team.map((project, index) => {
                            return <TeamCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {developers.map((project, index) => {
                            return <TeamCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Team;
