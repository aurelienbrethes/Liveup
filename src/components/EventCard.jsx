import React from 'react';
import './eventCard.css';
import eventImg from './medias/music-event-background.jpg';

const EventCard = () => {
    
    return (
        <div className="eventCard">
            <img src={eventImg} alt="Live event" />
            <div className="eventTitle">Voir l'évènement</div>
        </div>
    );
};

export default EventCard;