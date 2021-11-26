import React from 'react';
import './eventCard.css';
import eventImg from './medias/music-event-background.jpg';

const EventCard = () => {
    
    return (
        <div className="eventCard">
            <img src={eventImg} alt="Live event" />
            <h3>Voir l'évènement</h3>
        </div>
    );
};

export default EventCard;