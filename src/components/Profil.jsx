import React from "react";
import "./profil.css";

const Profil = () => {
  return (
    <div className="profil">
      <h2>Mon Profil</h2>
      <div className="informationsProfil">
        <button>Prénom</button>
        <button>Nom</button>
        <button>E-mail</button>
        <button>Password</button>
      </div>
    </div>
  );
};

export default Profil;
