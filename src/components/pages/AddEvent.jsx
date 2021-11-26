<<<<<<< HEAD
import React from 'react';
import './addevent.css';
=======
import React from "react";
import "./addevent.css";
>>>>>>> 0c801218d9c678ceba0dcc6641dfdcceef220861

const AddEvent = () => {
  return (
    <div>
      <div className="addEventTitle">Ajoutez votre évènement !</div>
      <div className="addEventInput">
        <input type="text" placeholder="Nom d'artiste" />
        <input type="text" placeholder="Etablissement / salle du concert" />
        <input type="text" placeholder="Adresse" />
        <input type="number" placeholder="Code postal" />
        <input type="text" placeholder="Ville" />
      </div>
    </div>
  );
};

export default AddEvent;
