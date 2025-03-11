import React from "react";
import { Image } from "react-bootstrap";
import drivers_license_f from "../assets/drivers_license_f.jpg";
import drivers_license_m from "../assets/drivers_license_m.jpg";
import { useParams } from "react-router-dom";
import { customerList } from "../testData";
import { findByUUID } from "../util";
import "../style.css";
import { UserInfo } from "../components";

function Customer() {
    const { uuid } = useParams();

    // fetch should be here but since my test data is hard coded,
    // I will just loop to find in my customerList
    const customer = findByUUID(customerList, uuid);

    return (
        <>
            <UserInfo user={customer} />
            <div className="container-space">
                <h4>Driver's License</h4>
                <Image
                    src={
                        customer.gender === "Female"
                            ? drivers_license_f
                            : drivers_license_m
                    }
                    width={250}
                />
            </div>
        </>
    );
}

export default Customer;
