import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/images/logo.svg";
import navIcon1 from "../assets/images/nav-icon1.svg";
import navIcon2 from "../assets/images/nav-icon2.svg";
import navIcon3 from "../assets/images/nav-icon3.svg";
import MailChimpForm from "./MailChimpForm";
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={3}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col size={12} sm={9} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href='https://linkedin.com/in/shubham-gurav-2a454a143'><img src={navIcon1} alt="Icon" /></a>
                            <a href="#"><img src={navIcon2} alt="Icon" /></a>
                            <a href="#"><img src={navIcon3} alt="Icon" /></a>
                        </div>
                        <p>Copyright 2022. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer