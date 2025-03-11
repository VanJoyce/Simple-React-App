import { ListGroup, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function UserListItem(props) {
    const { user } = props;
    const userType =
        user.userType === "CUSTOMER" ? "customer" : "product-manager";
    const navigate = useNavigate();

    return (
        <ListGroup.Item
            key={user.id}
            action
            onClick={() => navigate(`/users/${userType}/${user.uuid}`)}
        >
            <Row>
                <Col>{user.id}</Col>
                <Col>{user.firstName}</Col>
                <Col>{user.lastName}</Col>
            </Row>
        </ListGroup.Item>
    );
}

export default UserListItem;
