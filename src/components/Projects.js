import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projanf from "../assets/img/project-anf.png";
import wildreamweb from "../assets/img/project-wildreamweb.png";
import almazayaweb from "../assets/img/project-almazaya.png";
import westicmobile from "../assets/img/project-westicmobile.png";
import westicwebapp from "../assets/img/project-westicWebApp.png";
import onstageios from "../assets/img/project-onstageIOS.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const webprojects = [
    {
      title: "Westic",
      description: "Design & Development",
      imgUrl: projImg1,
      technologies:"React Js, Node.JS",
      link:"https://westic.tn/en/",
      linkText: "View Website"
    },
    {
      title: "Adamo Solutions",
      description: "Design & Development",
      imgUrl: projImg2,
      technologies:"Wordpress",
      link:"https://adamo-solutions.com/",
      linkText: "View Website"
    },
    {
      title: "Social Media Website (Wildream)",
      description: "Design & Development",
      imgUrl: wildreamweb,
      technologies:"Symfony",
      link:"https://github.com/chiheb7898/WilDream-Symfony-",
      linkText: "View Project on Github"
    },
    {
      title: "Restaurant Website",
      description: "Design & Development",
      imgUrl: almazayaweb,
      technologies:"HTML, CSS, PHP, JS",
      link:"https://github.com/chiheb7898/AlMazayaCarthage-PHP-HTML-CSS-",
      linkText: "View Project on Github"
    },
  ];
  const mobileProjects = [
    {
      title: "Android Project (OnStage)",
      description: "Design & Development",
      imgUrl: projImg3,
      technologies:"Kotlin, Node.JS",
      link:"https://github.com/chiheb7898/OnStage-Android-Kotlin-",
      linkText: "View Project on Github"
    },
    {
      title: "AR Game (BiChef)",
      description: "Design & Development",
      imgUrl: projImg4,
      technologies:"Unity, C#",
      link:"https://github.com/chiheb7898/BiChef-Unity",
      linkText: "View Project on Github"
    },
    {
      title: "IOS Project (OnStage)",
      description: "Design & Development",
      imgUrl: onstageios,
      technologies:"Swift, Node.JS",
      link:"/Project/OnStageIOS",
      linkText: "View Project on Github"
    },

  ];
  const desktopProjects = [
    {
      title: "E-Health AI Project (InterX)",
      description: "Design & Development",
      imgUrl: projImg5,
      technologies: "Python, Node.JS, React.JS, Flutter",
      link: '/Project/InterX',
      linkText: "View Project Video On Youtube"
    },
    {
      title: "Social Media App (Wildream) ",
      description: "Design & Development",
      imgUrl: projImg6,
      technologies: "JavaFX, MySql, FXML",
      link: 'https://github.com/chiheb7898/WilDream-JavaFX-',
      linkText: "View Project On GitHub"
    },
    {
      title: "AVD Converter",
      description: "Design & Development",
      imgUrl: projanf,
      technologies: "C++, QT",
      link: 'https://github.com/chiheb7898/AVD_Converter-CPP-QT-',
      linkText: "View Project On GitHub"
    },

  ];
  const UXUIProjects = [
    {
      title: "Westic Mobile App",
      description: "UX/UI Design",
      imgUrl: westicmobile,
      technologies: "Adobe XD",
      link: 'https://xd.adobe.com/view/a5a26232-8df5-4fc9-9895-0cabaaad8ca6-f0f1/?fullscreen&hints=off',
      linkText: "View In Adobe XD Demo"
    },
    {
      title: "Westic WebApp",
      description: "UX/UI Design",
      imgUrl: westicwebapp,
      technologies: "Adobe XD",
      link: 'https://xd.adobe.com/view/9cbdabc3-765f-49b2-8759-7c9ea7ec6d80-c9ee/?fullscreen&hints=off',
      linkText: "View In Adobe XD Demo"
      
    },
    {
      title: "Westic WebSite",
      description: "UX/UI Design",
      imgUrl: projImg1,
      technologies: "Adobe XD",
      link: 'https://xd.adobe.com/view/f8374f26-f121-4697-b3e6-5f6ba919f1db-ad64/?fullscreen&hints=off',
      linkText: "View In Adobe XD Demo"
      
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Most Recent Works</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Mobile</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Software</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fourth">UX/UI</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            webprojects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            mobileProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            desktopProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth">
                        <Row>
                          {
                            UXUIProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
