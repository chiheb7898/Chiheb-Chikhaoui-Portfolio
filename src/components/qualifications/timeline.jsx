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
import emotorsIcon from '../../assets/icons/emotors.png'

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
                                    date="Aug 2023 - Feb 2024"
                                    position="left"
                                    iconStyle={{ background: 'linear-gradient(90.21deg, rgba(170, 54, 124, 1) -5.91%, rgba(74, 47, 189, 1) 111.58%)', color: '#fff' }}
                                    icon={<img className="company-logo" style={{ borderRadius: "50%" }} src={emotorsIcon} alt="Company Logo" />}
                                    iconOnClick={() => window.open('https://emotors.com')}
                                >
                                    <h3 className="vertical-timeline-element-company">Software Engineer Intern</h3>
                                    <h5 className="vertical-timeline-element-subtitle">Nidec PSA Emotors</h5>
                                    <div className="vertical-timeline-element-location dark-text">
                                        <svg className="location-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                                        </svg>
                                        Île-de-France, France
                                    </div>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ color: '#fff' }}
                                    contentArrowStyle={{ borderRight: '7px solid  rgba(74, 47, 189, 0.5)' }}
                                    date="Aug 2022 - Oct 2022"
                                    iconStyle={{ background: 'linear-gradient(90.21deg, rgba(170, 54, 124, 1) -5.91%, rgba(74, 47, 189, 1) 111.58%)', color: '#fff' }}
                                    icon={<img className="company-logo" style={{ borderRadius: "50%" }} src={weviooIcon} alt="Company Logo" />}
                                    iconOnClick={() => window.open('https://www.wevioo.com/en')}
                                >
                                    <h3 className="vertical-timeline-element-company gradiant-text">Software Engineer Intern</h3>
                                    <h5 className="vertical-timeline-element-subtitle dark-text">Wevioo</h5>
                                    <div className="vertical-timeline-element-location dark-text">
                                        <svg className="location-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                                        </svg>
                                        Ariana, Tunisia
                                    </div>
                                </VerticalTimelineElement>
                                {/* <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ background: 'linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)', color: '#fff' }}
                                    date="Sep 2021 - Aug 2022"
                                    iconStyle={{ background: 'rgba(74, 47, 189, 1)', color: '#151515' }}
                                    icon={<img className="company-logo" style={{ borderRadius: "50%" }} src={westicIcon} alt="Company Logo" />}
                                    iconOnClick={() => window.open('https://westic.tn/en/')}
                                >
                                    <h3 className="vertical-timeline-element-company">Co-Founder & Tech Lead</h3>
                                    <h5 className="vertical-timeline-element-subtitle">Westic</h5>
                                    <div className="vertical-timeline-element-location dark-text">
                                        <svg className="location-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                                        </svg>
                                        Ariana, Tunisia
                                    </div>
                                </VerticalTimelineElement> */}
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    date="Jul 2020 - Aug 2020"
                                    contentStyle={{ background: 'linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)', color: '#fff' }}
                                    iconStyle={{ background: 'rgba(74, 47, 189, 1)', color: '#151515' }}
                                    icon={<img className="company-logo" style={{ borderRadius: "50%" }} src={anfIcon} alt="Company Logo" />}
                                    iconOnClick={() => window.open('https://www.anf.tn/')}
                                >
                                    <h3 className="vertical-timeline-element-company">Software Developer Intern </h3>
                                    <h5 className="vertical-timeline-element-subtitle ">National Frequency Agency (ANF)</h5>
                                    <div className="vertical-timeline-element-location dark-text">
                                        <svg className="location-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                                        </svg>
                                        Tunis, Tunisia
                                    </div>
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
                                    date="Aug 2018 - 2023"
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