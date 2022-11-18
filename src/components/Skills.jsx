import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/images/meter-1.svg';
import meter2 from '../assets/images/meter-2.svg';
import meter3 from '../assets/images/meter-3.svg';
import colorSharp from '../assets/images/color-sharp.png';
import '../styles/Skills.css';

const Skills = () => {
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
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus, turpis quis egestas sodales, magna enim gravida sapien, eu porttitor elit nulla a risus. Curabitur varius nulla eu nibh blandit convallis at a erat. Duis vel imperdiet magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris nec dapibus est, in cursus ex. In id venenatis elit, quis volutpat massa. Praesent non ipsum quis ex molestie maximus malesuada sed felis. Etiam hendrerit, massa eget sodales pretium, felis erat interdum nulla, id elementum nisl ligula vel sem. Aenean quis turpis quis purus ullamcorper ultrices. Donec a nisl tempus, pharetra est ut, feugiat lectus. Suspendisse potenti. Nulla eu lectus eu tellus pellentesque gravida et vitae quam. Maecenas tristique pulvinar purus ac finibus. Nunc posuere maximus est eget pretium.</p>
                            <Carousel responsive={responsive} infinite={true} className='skills-slider'>
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image" />
                                    <h5>Frontend Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>UI/UX Design</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <h5>Reacts JS Development</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="" />
        </section>
    )
}

export default Skills