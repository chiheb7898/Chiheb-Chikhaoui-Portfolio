import javaicon from "../assets/icons/java.png";
import jsicon from "../assets/icons/js.png";
import reacticon from "../assets/icons/atom.png";
import tsicon from "../assets/icons/typescript.png";
import pythonicon from "../assets/icons/python.png";
import nodeicon from "../assets/icons/node.png";
import csharp from "../assets/icons/c-sharp.png";
import cppicon from "../assets/icons/cpp.png";
import cicon from "../assets/icons/c.png";
import kotlinicon from "../assets/icons/kotlin.png";
import swifticon from "../assets/icons/swift.png";
import qticon from "../assets/icons/qt.png";
import springicon from "../assets/icons/spring.png";
import angularicon from "../assets/icons/angular.png";
import giticon from "../assets/icons/git.png";
import fluttericon from "../assets/icons/flutter.png";
import dotneticon from "../assets/icons/dotnet.png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import Qualification from './qualifications/Qualification'
import TimeLine from './qualifications/timeline'

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>My Technical Level</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider" autoPlay >
                            <div className="item">
                                <img alt="Image" src={javaicon} className="skilliconSize"/>
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={jsicon} alt="Image" className="skilliconSize"/>
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={reacticon} alt="Image" className="skilliconSize"/>
                                <h5>React JS</h5>
                            </div>
                            <div className="item">
                                <img src={pythonicon} alt="Image" className="skilliconSize"/>
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={tsicon} alt="Image" className="skilliconSize"/>
                                <h5>typescript</h5>
                            </div>
                            <div className="item">
                                <img src={nodeicon} alt="Image" className="skilliconSize"/>
                                <h5>Node JS</h5>
                            </div>
                            <div className="item">
                                <img src={cppicon} alt="Image" className="skilliconSize"/>
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={csharp} alt="Image" className="skilliconSize"/>
                                <h5>C#</h5>
                            </div>
                            <div className="item">
                                <img src={cicon} alt="Image" className="skilliconSize"/>
                                <h5>C</h5>
                            </div>
                            <div className="item">
                                <img src={dotneticon} alt="Image" className="skilliconSize"/>
                                <h5>.NET</h5>
                            </div>
                            <div className="item">
                                <img src={angularicon} alt="Image" className="skilliconSize"/>
                                <h5>Angular</h5>
                            </div>
                            <div className="item">
                                <img src={springicon} alt="Image" className="skilliconSize"/>
                                <h5>Spring</h5>
                            </div>
                            <div className="item">
                                <img src={qticon} alt="Image" className="skilliconSize"/>
                                <h5>QT</h5>
                            </div>
                            <div className="item">
                                <img src={kotlinicon} alt="Image" className="skilliconSize"/>
                                <h5>Kotlin</h5>
                            </div>
                            <div className="item">
                                <img src={swifticon} alt="Image" className="skilliconSize"/>
                                <h5>Swift</h5>
                            </div>
                            <div className="item">
                                <img src={fluttericon} alt="Image" className="skilliconSize"/>
                                <h5>Flutter</h5>
                            </div>
                            <div className="item">
                                <img src={giticon} alt="Image" className="skilliconSize"/>
                                <h5>Git</h5>
                            </div>
                        </Carousel>
                        <br/><br/><br/>
                        <h2>Qualification</h2>
                        <p>My Journey</p>
                        <div className="skill-bx wow zoomIn">
                            <TimeLine/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
