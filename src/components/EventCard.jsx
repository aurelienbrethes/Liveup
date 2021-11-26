import React from "react";
import "./eventCard.css";

const EventCard = ({image, location, artist}) => {
  return (
    <div className="eventCard">
      <img src={image} alt="Live event" className="imageCard" />
      <div className="eventTitle">{`${artist} à ${location}`}</div>
    </div>
  );
};

export default EventCard;
