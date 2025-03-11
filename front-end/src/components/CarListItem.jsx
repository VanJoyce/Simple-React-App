import { ListGroup, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CarListItem(props) {
    const { car } = props;
    const navigate = useNavigate();

    return (
        <ListGroup.Item
            key={car.id}
            action
            onClick={() => navigate(`/cars/${car.uuid}`)}
        >
            <Row>
                <Col>{car.id}</Col>
                <Col>{car.brand}</Col>
                <Col>{car.build}</Col>
                <Col>{car.year}</Col>
            </Row>
        </ListGroup.Item>
    );
}

export default CarListItem;
