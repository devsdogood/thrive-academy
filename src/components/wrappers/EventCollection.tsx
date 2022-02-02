import { Container, Row } from "react-bootstrap";

const EventCollection: React.FC = ({ children }) => {
    return (
        <Container>
            <Row>
                {children}
            </Row>
        </Container>
    );
}

export default EventCollection;
