import React from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
import { UserListItem, CarListItem } from ".";
import "../style.css";

function List(props) {
    const { headings, list, user } = props;

    return (
        <ListGroup className="container-space">
            <ListGroup.Item variant="info" key="heading">
                <Row>
                    {headings.map((heading) => (
                        <Col>{heading}</Col>
                    ))}
                </Row>
            </ListGroup.Item>
            {list.map((item) =>
                user ? <UserListItem user={item} /> : <CarListItem car={item} />
            )}
        </ListGroup>
    );
}

export default List;
