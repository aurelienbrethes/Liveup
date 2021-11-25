import React, { useEffect, useState } from 'react';
import EventCard from '../EventCard';
import './event.css';
import axios from 'axios';

const Event = () => {
    const [event, setEvent] = useState([]);
    const [style, setStyle] = useState([]);


    useEffect(() => {
        axios
        .get('https://apiliveup.herokuapp.com/events')
        .then((res) => res.data)
        .then((data) => {
            setEvent(data)
        })
    }, [])

    useEffect(() => {
        axios
        .get('https://apiliveup.herokuapp.com/styles')
        .then((res) => res.data)
        .then((data) => {
            setStyle(data)
        })
    }, [])

    return (
        <div className="event">

            <div className="eventFilters">
                <select name="artistSelect" id="artistFilter">
                    {event.map((info, index) => {
                        return(
                        <option key={index} value={info.artist_name}>{info.artist_name}</option>
                    )})}
                </select>
                <select name="citySelect" id="cityFilter">
                    {event.map((info) => { return ( info.city)})
                    .reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], [])
                    .map((info, index) => {
                        return (
                        <option key={index} value={info}>{info}</option>
                    )})}
                </select>
                <select name="styleSelect" id="styleFilter">
                    {style.map((info) => { return ( info.name_style)})
                    .reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], [])
                    .map((info, index) => {
                        return (
                        <option key={index} value={info}>{info}</option>
                    )})}
                </select>
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