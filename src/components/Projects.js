import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Fq.png";
import projImg2 from "../assets/img/Frame 5.png";
import projImg3 from "../assets/img/Frame 1.png";
import projImg4 from "../assets/img/thum.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useHref } from "react-router-dom";
import { list } from "postcss";

export const Projects = () => {
  const projects = [
    {
      title: "FeelsQuest",
      description: "Design & Development",
      imgUrl: projImg1,
      link: "https://www.figma.com/design/9BPb4lLSQh6zWlB65eqosq/Feelsbox-Capstone-Design?m=auto&t=JU9nuFMBrRFjDgSP-1",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "E-Commerce",
      description: "Design & Development",
      imgUrl: projImg4,
      link: "https://www.figma.com/design/LiUzpCmtSFsV7PlvNwAdTB/E-commerce?node-id=0-1&t=GvfxEMwdg7avWPMh-1",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    The following works reflect my dedication and expertise in
                    creating functional and aesthetic design solutions. Every
                    project I work on is the result of intensive collaboration,
                    in-depth research, and boundless creativity. These are some
                    of the projects that are a true testament to my skills in
                    the world of digital design.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Contact</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Skills</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                link={project.link}
                              />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div>
                          <div className="d-flex justify-content-center">
                            <h3>Contact Information</h3>
                          </div>
                          <ul>
                            <li className="d-flex justify-content-center">
                              <strong>Email:</strong> rickyrohaendi1@gmail.com
                            </li>
                            <li className="d-flex justify-content-center">
                              <strong>Phone:</strong> +62 821 2921 1422
                            </li>
                            <li className="d-flex justify-content-center">
                              <strong>LinkedIn:</strong>
                              {""}
                              <a
                                href="https://www.linkedin.com/in/rickyrohaendi"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                linkedin.com/in/rickyrohaendi
                              </a>
                            </li>
                          </ul>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div className="d-flex justify-content-center">
                          <div className="skills-list">
                            <h3 className="text-primary">My Skills</h3>
                            <div>
                              <ul>
                                <li>
                                  <i className="bi bi-check-circle-fill"></i>{" "}
                                  React JS
                                </li>
                                <li>
                                  <i className="bi bi-check-circle-fill"></i>{" "}
                                  JavaScript
                                </li>
                                <li>
                                  <i className="bi bi-check-circle-fill"></i> UI
                                  Designer
                                </li>
                                <li>
                                  <i className="bi bi-check-circle-fill"></i> UX
                                  Designer
                                </li>
                                <li>
                                  <i className="bi bi-check-circle-fill"></i>{" "}
                                  HTML
                                </li>
                                <li>
                                  <i className="bi bi-check-circle-fill"></i>{" "}
                                  CSS
                                </li>
                                <li>
                                  <i className="bi bi-check-circle-fill"></i>{" "}
                                  Auto Layout
                                </li>
                                <li>
                                  <i className="bi bi-check-circle-fill"></i>{" "}
                                  Wireframing
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <div>
                          <h3>Contact Information</h3>
                          <ul>
                            <li>
                              <strong>Email:</strong> rickyrohaendi1@gmail.com
                            </li>
                            <li>
                              <strong>Phone:</strong> +62 821 2921 1422
                            </li>
                            <li>
                              <strong>LinkedIn:</strong>
                              {""}
                              <a
                                href="https://www.linkedin.com/in/rickyrohaendi"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                linkedin.com/in/rickyrohaendi
                              </a>
                            </li>
                          </ul>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
