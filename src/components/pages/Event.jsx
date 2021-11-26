import React, { useEffect, useState } from 'react';
import EventCard from '../EventCard';
import './event.css';
import axios from 'axios';
import Modal from '../Modal';

const Event = () => {
    const [event, setEvent] = useState([]);
    const [style, setStyle] = useState([]);
    const [openModal, setOpenModal] = useState('');



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

      /* Modal */
  const showModal = (id) => {
    setOpenModal(id);
  };
  const hideModal = () => {
    setOpenModal('');
  };

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
                {event.map((info) => { 
                    return (
                <div key={info.id} onClick={() => showModal(info.id)}
                aria-hidden="true">
                    <EventCard />
                    {info.id === openModal && (
                        <Modal
                          openModal={openModal}
                          showModal={showModal}
                          hideModal={hideModal}
                        >
                          <div className="modalHeader">
                              Coucou toi
                          </div>
                          <div className="modalFullInfo">
                            <p>Artiste : {info.artist_name}</p>
                            <p>Style : {info.style}</p>
                            <p>Date : {info.date}</p>
                            <p>Code Postal : {info.postal_code}</p>
                            <p>Ville : {info.city}</p>
                            <p>Adresse : {info.location ? info.location : "Inconnue"}</p>
                            <p>Lieu : {info.name_place}</p>
                            <p>Heure : {info.time}</p>
                          </div>
                          <div className="modalFooter">
                          <button
                            type="button"
                            className="modalBtn"
                            onClick={hideModal}
                          >
                            Close
                          </button>
                          </div>
                        </Modal>
                    )}
                </div>
                )})}
            </div>
        </div>
    );
};

export default Event;