import "./style.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components";
import {
    Dashboard,
    Users,
    Customer,
    ProductManager,
    Cars,
    Car,
    Availability,
} from "./pages";

function App() {
    return (
        <div className="container-flex-row">
            <Navigation />
            <div className="page">
                <Routes>
                    <Route exact path="/" element={<Dashboard />} />
                    <Route path="/users" element={<Users />} />
                    <Route
                        path="/users/customer/:uuid"
                        element={<Customer />}
                    />
                    <Route
                        path="/users/product-manager/:uuid"
                        element={<ProductManager />}
                    />
                    <Route path="/cars" element={<Cars />} />
                    <Route path="/cars/:uuid" element={<Car />} />
                    <Route path="/availability" element={<Availability />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
