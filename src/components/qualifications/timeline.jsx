import React from 'react'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './timeline.css'
import 'animate.css';
import educationicon from '../../assets/icons/education.png'
import anfIcon from '../../assets/icons/anf.png'
import westicIcon from '../../assets/icons/westiclogo.png'
import weviooIcon from '../../assets/icons/wevioologo.png'

const TimeLine = () => {

    return (
        <section className="qualification" id="qualification">
            <Tab.Container id="projects-tabs" defaultActiveKey="experience">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                        <Nav.Link eventKey="experience">Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="education">Education</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp">
                    <Tab.Pane eventKey="experience">
                        <div className='timeline.new'>
                            <VerticalTimeline className='timeline.new'>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ background: 'linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)', color: '#fff' }}
                                    contentArrowStyle={{ borderRight: '7px solid  rgba(74, 47, 189, 0.5)' }}
                                    date="Aug 2022 - Oct 2022"
                                    iconStyle={{ background: 'linear-gradient(90.21deg, rgba(170, 54, 124, 1) -5.91%, rgba(74, 47, 189, 1) 111.58%)', color: '#fff' }}
                                    icon={<img className="company-logo" style={{ borderRadius: "50%" }} src={weviooIcon} alt="Company Logo" />}
                                    iconOnClick={() => window.open('https://www.wevioo.com/en')}
                                >
                                    <h3 className="vertical-timeline-element-company">Software Engineer Intern</h3>
                                    <h5 className="vertical-timeline-element-subtitle">Wevioo</h5>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ color: '#fff' }}
                                    date="Sep 2021 - Aug 2022"
                                    iconStyle={{ background: 'rgba(74, 47, 189, 1)', color: '#151515' }}
                                    icon={<img className="company-logo" style={{ borderRadius: "50%" }} src={westicIcon} alt="Company Logo" />}
                                    iconOnClick={() => window.open('https://westic.tn/en/')}
                                >
                                    <h3 className="vertical-timeline-element-company gradiant-text">Co-Founder & Tech Lead</h3>
                                    <h5 className="vertical-timeline-element-subtitle dark-text">Westic</h5>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    date="Jul 2020 - Aug 2020"
                                    iconStyle={{ background: 'rgba(74, 47, 189, 1)', color: '#151515' }}
                                    icon={<img className="company-logo" style={{ borderRadius: "50%" }} src={anfIcon} alt="Company Logo" />}
                                    iconOnClick={() => window.open('https://www.anf.tn/')}
                                >
                                    <h3 className="vertical-timeline-element-company gradiant-text">Software Developer Intern </h3>
                                    <h5 className="vertical-timeline-element-subtitle dark-text">National Frequency Agency (ANF)</h5>
                                </VerticalTimelineElement>
                            </VerticalTimeline>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="education">
                        <div className='timeline.new'>
                            <VerticalTimeline className='timeline.new'>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ background: 'linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)', color: '#fff' }}
                                    contentArrowStyle={{ borderRight: '7px solid  rgba(74, 47, 189, 0.5)' }}
                                    date="Aug 2018 - Present"
                                    iconStyle={{ background: 'linear-gradient(90.21deg, rgba(170, 54, 124, 1) -5.91%, rgba(74, 47, 189, 1) 111.58%)', color: '#151515' }}
                                    icon={<img className="company-logo" style={{ borderRadius: "50%" }} src={educationicon} alt="Company Logo" />}
                                    iconOnClick={() => window.open('https://esprit.tn/')}
                                >
                                    <h3 className="vertical-timeline-element-company">M.Sc. in Software Engineering</h3>
                                    <h5 className="vertical-timeline-element-subtitle">Esprit School of Engineering</h5>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    date="Jun 2017"
                                    iconStyle={{ background: 'rgba(74, 47, 189, 1)', color: '#151515' }}
                                    icon={<img className="company-logo" style={{ borderRadius: "50%" }} src={educationicon} alt="Company Logo" />}
                                >
                                    <h3 className="vertical-timeline-element-company gradiant-text">High School diploma in Computer Science</h3>
                                    <h5 className="vertical-timeline-element-subtitle dark-text">Jerissa High School</h5>
                                </VerticalTimelineElement>
                            </VerticalTimeline>
                        </div>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </section>
    )
}
export default TimeLine

{/* */ }