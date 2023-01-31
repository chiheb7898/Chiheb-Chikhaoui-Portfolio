import { useState } from "react";
import React, { useRef } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HeartHalf } from "react-bootstrap-icons";
import ReCAPTCHA from "react-google-recaptcha";



export const Contact = () => {

  const form = useRef();
  const [status, setStatus] = useState({});

  const showToastMessageSucess = () => {
    toast.success('Message Successfully Sent!', {
      position: toast.POSITION.BOTTOM_RIGHT
    })
      ;

  };
  const showToastMessageFail = () => {
    toast.error('Message Failed, Try Later!', {
      position: toast.POSITION.BOTTOM_RIGHT
    });
  };

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm('service_p43kz04', 'template_nzzqeuq', form.current, 'rk76pL1yMe0Oq7V1H')
      .then((result) => {
        showToastMessageSucess();
      }, (error) => {
        showToastMessageFail();
      });
    e.target.reset();
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="first_name" placeholder="First Name" pattern="[A-Za-z]+" required title="Only Letters Accepted!"/>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="last_name" placeholder="Last Name" pattern="[A-Za-z]+" required title="Only Letters Accepted!"/>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" placeholder="Email Address" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required title="Put a Valid email!"/>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" placeholder="Phone No." name="phone" pattern="[0-9]+" required title="Only Digits Accepted!"/>
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" placeholder="Message" name="message" required></textarea>
                        <button type="submit"><span>Send</span></button>
                      </Col>
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
