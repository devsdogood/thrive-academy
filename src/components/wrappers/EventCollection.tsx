import { Col } from "react-bootstrap";

const EventCollection: React.FC = ({ children }) => {
    return (
        <Col md="auto">
            {children}
        </Col>
    );
}

export default EventCollection;
