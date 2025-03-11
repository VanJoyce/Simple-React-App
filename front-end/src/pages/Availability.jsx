import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { List } from "../components";
import { carHeadings, carList, availabilityList } from "../testData";
import { getAvailableCars } from "../util";
import "../style.css";

function Availability() {
    const [date, setDate] = useState(new Date());
    const [cars, setCars] = useState([]);

    useEffect(() => {
        setCars(getAvailableCars(date, availabilityList, carList));
    }, [date]);

    return (
        <>
            <h1>Cars Availability</h1>
            <p>Check which cars are free on the selected date.</p>
            <div className="container-flex-row">
                <p className="date-picker-label">Cars available on:</p>
                <DatePicker
                    selected={date}
                    onChange={(newDate) => setDate(newDate)}
                    dateFormat="dd/MM/yyyy"
                    closeOnScroll
                />
            </div>

            <List headings={carHeadings} list={cars} />
        </>
    );
}

export default Availability;
