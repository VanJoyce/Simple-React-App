import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import { List } from "../components";
import {
    customerHeadings,
    customerList,
    prodManHeadings,
    prodManList,
} from "../testData";

function UserList() {
    return (
        <>
            <h1>Users</h1>
            <p>All users in the system.</p>
            <Tabs defaultActiveKey="customers">
                <Tab eventKey="customers" title="Customers">
                    <List
                        headings={customerHeadings}
                        list={customerList}
                        user
                    />
                </Tab>
                <Tab eventKey="product-manager" title="Product Managers">
                    <List headings={prodManHeadings} list={prodManList} user />
                </Tab>
            </Tabs>
        </>
    );
}

export default UserList;
