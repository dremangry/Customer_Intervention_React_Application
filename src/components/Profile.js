
// This page gets current User from Local Storage by calling AuthService.getCurrentUser() method and show user information (with token).

import React from "react";
import AuthService from "../services/auth.service";
const Profile = () => {
    const currentUser = AuthService.getCurrentUser();
    return (
        <div className="container">
            <header className="jumbotron">
                {/* <h3>
                    <strong>{currentUser.email}</strong> Profile
                </h3> */}
                <h3>
                    Your Profile
                </h3>
            </header>

            <p>
                <strong>Token:</strong> {currentUser.access_token}
                {/* substring(0, 20)} ...{" "}
                {currentUser.access_token.substr(currentUser.access_token.length - 20 */}
            </p>
            <p>
                <strong>Id:</strong> {currentUser.id}
            </p>
            <p>
                <strong>buildingId:</strong> {currentUser.buildingId}
            </p>
            <p>
                <strong>batteryId:</strong> {currentUser.batteryId}
            </p>
            <p>
                <strong>columnId:</strong> {currentUser.columnId}
            </p>
            <p>
                <strong>elevatorId:</strong> {currentUser.elevatorId}
            </p>
            <p>
                <strong>results:</strong> {currentUser.results}
            </p>
            <p>
                <strong>report:</strong> {currentUser.report}
            </p>
            <p>
                <strong>status:</strong> {currentUser.status}
            </p>
            <p>
                <strong>authorId:</strong> {currentUser.authorId}
            </p>
            <p>
                <strong>employeeId:</strong> {currentUser.employeeId}
            </p>
            <p>
                <strong>customerId:</strong> {currentUser.customerId}
            </p>
            <p>
                <strong>createdAt:</strong> {currentUser.createdAt}
            </p>
            <p>
                <strong>updatedAt:</strong> {currentUser.updatedAt}
            </p>
            {/* <strong>Authorities:</strong> */}
            <ul>
                {currentUser.roles &&
                    currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
            </ul>
        </div>
    );
};
export default Profile;
