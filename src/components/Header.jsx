import React, { useContext, useState } from "react";
import logo from "./medias/Live_up_1.jpg";
import "./header.css";
import { Link } from "react-router-dom";
import Profil from "./Profil";
import Login from "./Login";
import UserContext from "../contexts/UserContext";
import SignUp from "./sign-up/SignUp";

const Header = ({ wheel, setWheel }) => {
  const [showLogin, setShowLogin] = useState("");
  const { userLogin } = useContext(UserContext);

  return (
    <div className={`header ${wheel && "activeBarWheel"}`}>
      {(showLogin === "login" ||
        showLogin === "signup" ||
        showLogin === "profil") && (
        <div onClick={() => setShowLogin("")} className="screenBlack"></div>
      )}
      <Link activeclassname="active" to="/">
        <div id="logo">
          <img src={logo} />
        </div>
      </Link>
      <div className="containerNavMenu">
      <ul className="navMenu">
        <Link activeclassname="active" to="/event">
          <li>Les Evènements</li>
        </Link>
        <Link activeclassname="active" to="/addEvent">
          <li>Ajouter un évènement</li>
        </Link>
        <li>
          <button
            onClick={() => {
              setShowLogin(userLogin.mail !== undefined ? "profil" : "login");
            }}
            className="btnAccount"
          >
            {userLogin.mail !== undefined ? "Mon Profil" : "Mon compte"}
          </button>
        </li>

        {showLogin === "login" && <Login setShowLogin={setShowLogin} />}
        {showLogin === "profil" && <Profil setShowLogin={setShowLogin} />}
        {showLogin === "signup" && <SignUp setShowLogin={setShowLogin} />}
      </ul>
    </div>
    </div>
  );
};

export default Header;
