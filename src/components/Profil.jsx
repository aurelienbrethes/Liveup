import axios from "axios";
import React, { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";
import "./profil.css";
import logout from "./medias/logout.png";

const Profil = ({ setShowLogin }) => {
  const [updateFirstName, setUpdateFirstName] = useState(false);
  const [updateLastName, setUpdateLastName] = useState(false);
  const [updateMail, setUpdateMail] = useState(false);
  const [updatePassword, setUpdatePassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { userLogin, setUserLogin } = useContext(UserContext);

  const handleUpdateFirstName = (param, firstname) => {
    axios
      .put(`https://wild-liveup.herokuapp.com/users/${param}`, {
        firstname,
      })
      .then((res) => {
        return res.status === 200 && res.data;
      })
      .then((data) => {
        setUserLogin(data);
        setFirstName("");
      });
    setUpdateFirstName(false);
  };
  const handleUpdateLastName = (param, lastname) => {
    axios
      .put(`https://wild-liveup.herokuapp.com/users/${param}`, {
        lastname,
      })
      .then((res) => {
        return res.status === 200 && res.data;
      })
      .then((data) => {
        setUserLogin(data);
        setLastName("");
      });
    setUpdateLastName(false);
  };
  const handleUpdateMail = (param, mail) => {
    axios
      .put(`https://wild-liveup.herokuapp.com/users/${param}`, {
        mail,
      })
      .then((res) => {
        return res.status === 200 && res.data;
      })
      .then((data) => {
        setUserLogin(data);
        setMail("");
      });
    setUpdateMail(false);
  };
  const handleUpdatePassword = (param, password) => {
    if (password === confirmPassword) {
      axios
        .put(`https://wild-liveup.herokuapp.com/users/${param}`, {
          password,
        })
        .then((res) => {
          return res.status === 200 && res.data;
        })
        .then((data) => {
          setUserLogin(data);
          setPassword("");
        });
      setUpdatePassword(false);
    } else {
      alert("erreur mot de passe!");
    }
  };

  const handleLogOut = () => {
    axios
      .delete("https://wild-liveup.herokuapp.com/logout", {
        withCredentials: true,
      })
      .then(() => {
        setShowLogin("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="profil">
      <h2 className="titleProfil">Mes informations</h2>
      <div className="informationsProfil">
        <p>{userLogin.firstname}</p>
        {updateFirstName && (
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            className="inpt"
          />
        )}
        <button
          onClick={() => {
            firstName
              ? handleUpdateFirstName(userLogin.id, firstName)
              : setUpdateFirstName(!updateFirstName);
          }}
          className="btnProfil"
        >
          Modifier
        </button>
        <p>{userLogin.lastname}</p>
        {updateLastName && (
          <input
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            className="inpt"
          />
        )}
        <button
          onClick={() => {
            lastName
              ? handleUpdateLastName(userLogin.id, lastName)
              : setUpdateLastName(!updateLastName);
          }}
          className="btnProfil"
        >
          Modifier
        </button>
        <p>{userLogin.mail}</p>
        {updateMail && (
          <input
            onChange={(e) => setMail(e.target.value)}
            type="mail"
            className="inpt"
          />
        )}
        <button
          onClick={() => {
            mail
              ? handleUpdateMail(userLogin.id, mail)
              : setUpdateMail(!updateMail);
          }}
          className="btnProfil"
        >
          Modifier
        </button>
        {updatePassword && (
          <div className="contPasswordUpdate">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="inpt"
              placeholder="Nouveau Mot de Passe"
            />
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              className="inpt"
              placeholder="Confirmez le Mot de Passe"
            />
          </div>
        )}
        <button
          onClick={() => {
            password || confirmPassword
              ? handleUpdatePassword(userLogin.id, password)
              : setUpdatePassword(!updatePassword);
          }}
          className="btnProfil"
        >
          Modifier Mot de Passe
        </button>
      </div>
      <div className="contImageLogout" onClick={handleLogOut}>
        <img src={logout} alt="logout" />
      </div>
    </div>
  );
};

export default Profil;
