import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import UserContext from "../contexts/UserContext";
import "./login.css";

const Login = ({ setShowLogin }) => {
  const [dataLogin, setDataLogin] = useState("");
  const [userConnected, setUserConnected] = useState([]);
  const [dataPassword, setDataPassword] = useState("");
  const [searchUser, setSearchUser] = useState(false);
  const [error, setError] = useState('');

  const { setUserLogin } = useContext(UserContext);
  useEffect(() => {
    if (searchUser) {
      axios
        .get(`https://apiliveup.herokuapp.com/users?mail=${dataLogin}`)
        .then((res) => res.data[0])
        .then((data) => {
          setUserConnected(data);
          setSearchUser(false);
        });
      if (userConnected === undefined) {
          setError(" user not found")
      } 
      if (dataLogin === userConnected.mail && dataPassword != userConnected.password){
          setError("wrong PassWord")
      }else {
        if (
          dataPassword === userConnected.password &&
          dataLogin === userConnected.mail
        ) {
          axios
            .post("https://apiliveup.herokuapp.com/login", userConnected, {
              withCredentials: true,
            })
            .then((res) => res.data)
            .then((data) => {
              setUserLogin(data);
              setShowLogin("");
            })
            .catch((err) => console.log(err));
        } else {
            if ( dataPassword === "" && dataLogin === userConnected.mail) {
                setError( "You forget your Password !! ")
            }
            if ( dataLogin === "" && dataPassword === userConnected.password ) {
                setError(" You forget your Email ")
            }
            if ( dataLogin === "" && dataPassword === ""){
               setError("You missed yours mail and password")
            }
        }
      }
    }
  }, [
    dataLogin,
    searchUser,
    dataPassword,
    userConnected,
    setUserLogin,
    setShowLogin,
  ]);

  const handleLogin = (e) => {
    e.preventDefault();
    setSearchUser(true);
  };

  return (
    <div className="login">
      <h2 className="titleProfil">Se Connecter</h2>
      <form onSubmit={handleLogin} className="loginForm">
        <label>
          <input
            className="inpt"
            onChange={(e) => setDataLogin(e.target.value)}
            type="email"
            placeholder="Entrez votre mail..."
          ></input>
        </label>
        <label>
          <input
            className="inpt"
            onChange={(e) => setDataPassword(e.target.value)}
            type="password"
            placeholder="Entrez votre mot de passe..."
          ></input>
        </label>
        <button className="btn" type="submit">
          {" "}
          Se connecter !{" "}
        </button>
        <button
          onClick={() => setShowLogin("signup")}
          className="newAccount"
          type="button"
        >
          Créer un compte
        </button>
      </form>
    </div>
  );
};

export default Login;
