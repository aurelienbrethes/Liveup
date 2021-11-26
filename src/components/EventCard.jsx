import React from 'react';
import './eventCard.css';
import eventImg from './medias/music-event-background.jpg';

const EventCard = (props) => {
    return (
        <div className="eventCard">
            <img src={eventImg} alt="Live event" />
            <p>Artiste : {props.artiste}</p>
            <p>Style : {props.style}</p>
            <p>Date : {props.date}</p>
            <p>Code Postal : {props.code}</p>
            <p>Ville : {props.city}</p>
            <p>Adresse : {props.location ? props.location : "Inconnue"}</p>
            <p>Lieu : {props.place}</p>
            <p>Heure : {props.time}</p>
            <h3>Voir l'évènement</h3>
        </div>
    );
};

export default EventCard;