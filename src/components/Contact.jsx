import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap";
import contactImg from '../assets/images/contactImg.svg';
import '../styles/Contact.css';

const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({})

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails, [category]: value
        })
    }

    const onSubmitBtn = async (e) => {
        e.preventDefault();
        setButtonText('Sending...');
        let res = await fetch('http://localhost:3000/contact', {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails)
        });
        setButtonText("Send");
        let result = res.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
            setStatus({ success: true, message: 'Message sent successfully.!' })
        } else {
            setStatus({ success: false, message: 'Something went wrong, please try again later.!' })
        }
    }

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="contact us" />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form action="" onSubmit={onSubmitBtn}>
                            <Row>
                                <Col sm={6} className='px-1'>
                                    <input type="text" value={formInitialDetails.firstName} placeholder='Enter First Name' onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type="text" value={formInitialDetails.lastName} placeholder='Enter Last Name' onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type="email" value={formInitialDetails.email} placeholder='Enter e-Mail Address' onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type="tel" value={formInitialDetails.phone} placeholder='Enter Phone Number' onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                </Col>
                                <Col sm={12} className='px-1'>
                                    <textarea name="" rows="6" value={formDetails.message} placeholder="Type Your Message" onChange={(e) => onFormUpdate('message', e.target.value)} />
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col lg={12} className='mt-3'>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact