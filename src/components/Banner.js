import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import profileImage from "../assets/img/profile.png";
import { ArrowDownCircle, ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import "./home.css";
import TrackVisibility from 'react-on-screen';

import DownloadButton from './DownloadButton/DownloadButton'

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(150 - Math.random() * 50);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Software Engineer", "Mobile Developer","Web Developer", "UX/UI Designer" ];
  const period = 150;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(250);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container >
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1 className="profiledesc">{`Hi! I'm Chiheb`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I am a multi-skilled Software Engineer with a passion for creating intuitive, user-centered digital experiences. With experience in both mobile and web development, I have a track record of delivering high-quality, reliable software products. My expertise in UX/UI design allows me to approach development with a user-focused mindset, ensuring that the end-product is not only functional, but also aesthetically pleasing. I am constantly seeking new challenges and opportunities to grow my skills and bring value to my clients and teams.</p>
                  <DownloadButton/>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : "center_img"}>
                  <div className="home__img"></div>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
