import React, { useEffect, useState } from "react";
import axios from "axios";
import "./addevent.css";

const AddEvent = () => {
  const [artistName, setArtistName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventPostalCode, setEventPostalCode] = useState();
  const [eventCity, setEventCity] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventNamePlace, setEventNamePlace] = useState("");
  const [eventStyle, setEventStyle] = useState();
  const [stylesList, setStylesList] = useState([]);

  useEffect(() => {
    axios
      .get("https://apiliveup.herokuapp.com/styles")
      .then((res) => res.data)
      .then((data) => setStylesList(data));
  }, []);

  const handleAddEvents = () => {
    axios.post("https://apiliveup.herokuapp.com/events", {
      artist_name: artistName,
      date: eventDate,
      time: eventTime,
      postal_code: eventPostalCode,
      city: eventCity,
      location: eventLocation,
      name_place: eventNamePlace,
      style: eventStyle,
    });
  };

  const resetData = () => {
    setArtistName("");
    setEventDate("");
    setEventTime("");
    setEventPostalCode();
    setEventCity("");
    setEventLocation("");
    setEventNamePlace("");
    setEventStyle("");
  };

  return (
    <div>
      <div className="addEventTitle">Ajoutez votre évènement !</div>
      <div className="addEventInput">
        <input
          type="text"
          placeholder="Nom d'artiste"
          onChange={(e) => setArtistName(e.target.value)}
          value={artistName}
          className="inpt"
          required
        />
        <input
          type="date"
          onChange={(e) => setEventDate(e.target.value)}
          className="inpt moove-left-date"
          required
        />
        <input
          type="time"
          onChange={(e) => setEventTime(e.target.value)}
          className="inpt moove-left-time"
          placeholder="hh:mm"
          required
        />
        <input
          type="text"
          placeholder="Etablissement / salle de concert"
          onChange={(e) => setEventNamePlace(e.target.value)}
          value={eventNamePlace}
          className="inpt"
          required
        />
        <input
          type="text"
          placeholder="Adresse postale"
          onChange={(e) => setEventLocation(e.target.value)}
          value={eventLocation}
          className="inpt"
        />
        <input
          type="number"
          name="postal-code"
          placeholder="Code postal"
          onChange={(e) => setEventPostalCode(e.target.value)}
          min="00000"
          max="99999"
          className="inpt"
          required
        />
        <input
          type="text"
          placeholder="Ville"
          onChange={(e) => setEventCity(e.target.value)}
          value={eventCity}
          className="inpt"
          required
        />
        <select
          name="music-styles"
          id="music-styles"
          onChange={(e) => setEventStyle(e.target.value)}
          value={eventStyle}
          className="dropdown-list"
          required
        >
          <option value="">Sélectionez votre style de musique</option>
          {stylesList.map((style) => (
            <option key={style.id} value={style.id}>
              {style.name_style}
            </option>
          ))}
        </select>
        <button
          type="reset"
          onClick={() => {
            handleAddEvents();
            resetData();
          }}
          className="btn"
        >
          Ajouter
        </button>
      </div>
    </div>
  );
};

export default AddEvent;
