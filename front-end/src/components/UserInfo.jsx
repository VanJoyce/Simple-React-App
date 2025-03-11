import React from "react";
import { Table, Image, } from "react-bootstrap";
import user_profile_f from "../assets/user_profile_f.png";
import user_profile_m from "../assets/user_profile_m.png";
import "../style.css";

function UserInfo(props) {
    const { user } = props;
    const { id, userType, firstName, lastName, gender, dob, email, phone } =
        user;

    return (
        <>
            <Image
                src={gender === "Female" ? user_profile_f : user_profile_m}
                width={250}
                roundedCircle
            />

            <div className="container-space">
                <h1>
                    {firstName} {lastName}
                </h1>
                <h5>{userType}</h5>
            </div>

            <Table>
                <tbody>
                    <tr>
                        <td>User ID:</td>
                        <td>{id}</td>
                    </tr>
                    <tr>
                        <td>Gender:</td>
                        <td>{gender}</td>
                    </tr>
                    <tr>
                        <td>Date of birth:</td>
                        <td>
                            {dob.toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>{email}</td>
                    </tr>
                    <tr>
                        <td>Mobile Number:</td>
                        <td>{phone}</td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
}

export default UserInfo;
