
// Now we add a navigation bar in App component. This is the root container for our application.
// The navbar dynamically changes by login status and current User’s roles.

import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AuthService from "./services/auth.service";
import Login from "./components/Login";
// import Register from "./components/Register";
// import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
// import BoardModerator from "./components/BoardModerator";
// import BoardForm from "./components/BoardForm";
const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showFormBoard, setShowFormBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);
  const logOut = () => {
    AuthService.logout();
  };
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          <h1>Rocket Elevator</h1>
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            {/* <Link to={"/home"} className="nav-link">
              Home
            </Link> */}
          </li>
          {showModeratorBoard && (
            <li className="nav-item">
              {/* <Link to={"/mod"} className="nav-link">
                Moderator Board
              </Link> */}
            </li>
          )}
          {showFormBoard && (
            <li className="nav-item">
              {/* <Link to={"/form"} className="nav-link">
                Form Board
              </Link> */}
            </li>
          )}
          {currentUser && (
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                User
              </Link>
            </li>
          )}
        </div>
        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {/* {currentUser.username} */}
                {currentUser.email}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              {/* <Link to={"/register"} className="nav-link">
                Sign Up
              </Link> */}
            </li>
          </div>
        )}
      </nav>
      <div className="container mt-3">
        <Routes>
          {/* <Route path="/" element={<Home/>} /> */}
          {/* <Route path="/home" element={<Home/>} /> */}
          <Route path="/login" element={<Login/>} />
          {/* <Route path="/register" element={<Register/>} /> */}
          <Route path="/profile" element={<Profile/>} />
          <Route path="/user" element={<BoardUser/>} />
          {/* <Route path="/mod" element={<BoardModerator/>} /> */}
          {/* <Route path="/form" element={<BoardForm/>} /> */}
        </Routes>
      </div>
    </div>
  );
};
export default App;


