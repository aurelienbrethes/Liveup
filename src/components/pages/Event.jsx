import React from 'react';
import EventCard from '../EventCard';
import './event.css';

const Event = () => {
    return (
        <div className="event">

            <div className="eventFilters">
                <input></input>
                <input></input>
                <input></input>
            </div>

            <div className="eventList">
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            </div>
        </div>
    );
};

export default Event;