import React from "react";
import { List } from "../components";
import { carHeadings, carList } from "../testData";

function CarList() {
    return (
        <>
            <h1>Cars</h1>
            <p>All cars in the system.</p>
            <List headings={carHeadings} list={carList} />
        </>
    );
}

export default CarList;
