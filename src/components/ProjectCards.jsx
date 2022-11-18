import { Col } from 'react-bootstrap'

const ProjectCards = ({ title, description, imgUrl, projURL }) => {

    const openProjectURL = (pUrl) => {
        window.open(pUrl, '_blank', 'noopener,noreferrer');
    }

    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx" onClick={() => openProjectURL(projURL)}>
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}

export default ProjectCards