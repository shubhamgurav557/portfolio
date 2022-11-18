import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImage from '../assets/images/header-image.svg';
import '../styles/Banner.css';

const Banner = () => {
    return (
        <section className="banner" id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">
                            Welcome to my Portfolio
                        </span>
                        <h1>{`This is Shubhham`}<span className='wrap display-6'> Frontend Developer</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus, turpis quis egestas sodales, magna enim gravida sapien, eu porttitor elit nulla a risus. Curabitur varius nulla eu nibh blandit convallis at a erat. Duis vel imperdiet magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris nec dapibus est, in cursus ex. In id venenatis elit, quis volutpat massa. Praesent non ipsum quis ex molestie maximus malesuada sed felis. Etiam hendrerit, massa eget sodales pretium, felis erat interdum nulla, id elementum nisl ligula vel sem. Aenean quis turpis quis purus ullamcorper ultrices. Donec a nisl tempus, pharetra est ut, feugiat lectus. Suspendisse potenti. Nulla eu lectus eu tellus pellentesque gravida et vitae quam. Maecenas tristique pulvinar purus ac finibus. Nunc posuere maximus est eget pretium.</p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImage} alt="Header Image" />
                    </Col>
                    <button onClick={() => console.log('Hi')}>Lets Connect <ArrowRightCircle size={25} /></button>
                </Row>
            </Container>
        </section>
    )
}

export default Banner