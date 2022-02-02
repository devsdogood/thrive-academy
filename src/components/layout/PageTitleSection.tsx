import React from "react";
import { Col, Container, Row } from "react-bootstrap";

type Props = {
    title: string;
    backgroundImage: string;
};

const PageTitleSection: React.FC<Props> = ({ title, backgroundImage }) => {
    return (
        <section
            className="page-title-section overlay"
            data-background={backgroundImage}
            style={{ "backgroundImage": `url(${backgroundImage})` }}
        >
            <Container>
                <Row>
                    <Col md={8}>
                        <h2 className="text-primary">{title}</h2>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default PageTitleSection;



