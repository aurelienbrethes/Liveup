import React, { useContext, useState } from "react";
import logo from "./medias/Live_up_1.gif";
import "./header.css";
import { Link } from "react-router-dom";
import Profil from "./Profil";
import Login from "./Login";
import UserContext from "../contexts/UserContext";
import SignUp from "./sign-up/SignUp";

const Header = () => {
  const [showLogin, setShowLogin] = useState("");
  const { userLogin } = useContext(UserContext);

  return (
    <div className="header">
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
        {showLogin === "profil" && <Profil />}
        {showLogin === "signup" && <SignUp setShowLogin={setShowLogin} />}
      </ul>
    </div>
  );
};

export default Header;
