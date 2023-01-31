import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import "./contact.css"

export const Newsletter = ({ status, message, onValidated }) => {

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
        <center><h3>Get in Touch</h3></center>
          <Col lg={4}>
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"> </i>
              <h3 className="contact__card-title">Email </h3>
              <span className="contact__card-data">chikhaouichiheb1@gmail.com</span>
              <a href="mailto:chikhaouichiheb1@gmail.com" className="contact__button">
                write me
                <i className="bx bx-right-arrow-alt"></i>
              </a>
            </div>
          </Col>
          <Col lg={4}>
            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data"> +216 27 777 831</span>
              <a href="https://api.whatsapp.com/send?phone=+21627777831&text=hello ,your profile seems intersting , can i get more informations! " className="contact__button">
                write me
                <i className="bx bx-right-arrow-alt"></i>
              </a>
            </div>
          </Col>
          <Col lg={4}>
            <div className="contact__card">
              <i className="bx bxl-messenger contact__card-icon"></i>
              <h3 className="contact__card-title">Messanger</h3>
              <span className="contact__card-data">Chiheb Chikhaoui</span>
              <a href="https://m.me/chihebcpt" className="contact__button">
                write me
                <i className="bx bx-right-arrow-alt"></i>
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  )
}
