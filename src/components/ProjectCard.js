import { Col } from "react-bootstrap";
import './projectCard.css';

export const ProjectCard = ({ title, description, imgUrl, technologies, link , linkText}) => {

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <h5>{description}</h5>
          <span className="span-technologies">{technologies}</span><br/><br/>
          <a href={link} className="seemore__button" > {linkText}
            <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>
        </div>
      </div>
    </Col>
  )
}
