import { Col, Container, Row, Nav, Tab } from 'react-bootstrap';
import ProjectCards from './ProjectCards';
import projImg1 from '../assets/images/proj1.png';
import projImg2 from '../assets/images/proj2.png'
import projImg3 from '../assets/images/proj3.png'
import backImage from '../assets/images/color-sharp2.png'
import '../styles/Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "Weather Forecast",
            description: "Design & Development",
            imgUrl: projImg1,
            projURL: "https://weather-podcast.vercel.app/"
        },
        {
            title: "Personal Portfolio",
            description: "Design & Development",
            imgUrl: projImg2,
            projURL: ""
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
            projURL: ""
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
            projURL: ""
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
            projURL: ""
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
            projURL: ""
        },
    ];
    return (
        <section className="projects" id='projects'>
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus, turpis quis egestas sodales, magna enim gravida sapien, eu porttitor elit nulla a risus. Curabitur varius nulla eu nibh blandit convallis at a erat. Duis vel imperdiet magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris nec dapibus est, in cursus ex. In id venenatis elit, quis volutpat massa. Praesent non ipsum quis ex molestie maximus malesuada sed felis. Etiam hendrerit, massa eget sodales pretium, felis erat interdum nulla, id elementum nisl ligula vel sem. Aenean quis turpis quis purus ullamcorper ultrices. Donec a nisl tempus, pharetra est ut, feugiat lectus. Suspendisse potenti. Nulla eu lectus eu tellus pellentesque gravida et vitae quam. Maecenas tristique pulvinar purus ac finibus. Nunc posuere maximus est eget pretium.</p>
                        <Tab.Container id="projects-tab" defaultActiveKey="first">
                            <Nav variant="pills" className='nav-pills mb-5 justify-content-center' id='pills-tab'>
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCards key={index} {...project} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Loreum Ipsum</Tab.Pane>
                                <Tab.Pane eventKey="third">Loreum Ipsum</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={backImage} alt="" />
        </section>
    )
}

export default Projects