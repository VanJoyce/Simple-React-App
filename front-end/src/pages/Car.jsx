import React from "react";
import { Table, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { findByID, findByUUID } from "../util";
import { carList, prodManList } from "../testData";
import car_image from "../assets/car.jpg";

function Car() {
    const { uuid } = useParams();

    // fetch should be here but since my test data is hard coded,
    // I will just loop to find in my carList
    const car = findByUUID(carList, uuid);
    const {
        id,
        brand,
        build,
        year,
        mode,
        dayPrice,
        ownerID,
        latitude,
        longitude,
        featured,
    } = car;
    const owner = findByID(prodManList, ownerID);

    return (
        <>
            <h1>
                {brand} {build}
            </h1>

            <div className="container-space container-flex-row">
                <Image src={car_image} width={300} />
                <div className="container-car-info">
                    <Table>
                        <tbody>
                            <tr>
                                <td>Car ID:</td>
                                <td>{id}</td>
                            </tr>
                            <tr>
                                <td>Year:</td>
                                <td>{year}</td>
                            </tr>
                            <tr>
                                <td>Mode:</td>
                                <td>{mode}</td>
                            </tr>
                            <tr>
                                <td>Day Price:</td>
                                <td> RM {dayPrice}</td>
                            </tr>
                            <tr>
                                <td>Owner ID:</td>
                                <td>
                                    <a
                                        href={`/users/product-manager/${owner.uuid}`}
                                    >
                                        {ownerID}
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>Geolocation:</td>
                                <td>
                                    ({latitude}, {longitude})
                                </td>
                            </tr>
                            <tr>
                                <td>Featured:</td>
                                <td>{featured ? "Yes" : "No"}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    );
}

export default Car;
