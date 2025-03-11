import React from "react";
import { useParams } from "react-router-dom";
import { List, UserInfo } from "../components";
import { carHeadings, carList, prodManList } from "../testData";
import { findByID, findByUUID } from "../util";

function ProductManager(props) {
    const { uuid } = useParams();

    // fetch should be here but since my test data is hard coded,
    // I will just loop to find in my customerList
    const prodMan = findByUUID(prodManList, uuid);
    const cars = prodMan.carID.map((id) => findByID(carList, id));

    return (
        <>
            <UserInfo user={prodMan} />
            <div className="container-space">
                <h4>Cars</h4>
                <List headings={carHeadings} list={cars} />
            </div>
        </>
    );
}

export default ProductManager;
