import React, { useEffect, useState } from 'react';
import EventCard from '../EventCard';
import './event.css';
import axios from 'axios';
import Modal from '../Modal';

const Event = () => {
    const [event, setEvent] = useState([]);
    const [style, setStyle] = useState([]);
    const [artistFilter, setArtistFilter] = useState('');
    const [cityFilter, setCityFilter] = useState('');
    const [dateFilter, setDateFilter] = useState('');
    const [styleFilter, setStyleFilter] = useState('');
    const [showCards, setShowCards] = useState(false);
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

  function handleChange(e) {
    switch (e.target.name) {
      case 'artistSelect':
        setArtistFilter(e.target.value);
        console.log(artistFilter)
        break;
      case 'citySelect':
        setCityFilter(e.target.value);
        console.log(cityFilter)
        break;
      case 'dateSelect':
        setDateFilter(e.target.value);
        console.log(dateFilter)
        break;
      case 'styleSelect':
        setStyleFilter(e.target.value);
        console.log(styleFilter)
        break;
      default:
    }
  }

    return (
        <div className="event">
            <div className="eventFilters">
                <div className="selectFilter">
                    <p>Artiste :</p>
                <select name="artistSelect" id="artistFilter" defaultValue="none" onChange={(e)=>handleChange(e)}>
                    <option value="none"> Qui ? </option>
                    {event.map((info, index) => {
                        return(
                        <option key={index} value={info.artist_name}>{info.artist_name}</option>
                    )})}
                </select>
                </div>
                <div className="selectFilter">
                    <p>Ville :</p>
                <select name="citySelect" id="cityFilter" defaultValue="none" onChange={(e)=>handleChange(e)}>
                    <option value="none"> Où ? </option>
                    {event.map((info) => { return ( info.city)})
                    .reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], [])
                    .map((info, index) => {
                        return (
                        <option key={index} value={info}>{info}</option>
                    )})}
                </select>
                </div>
                <div className="selectFilter">
                    <p>Date :</p>
                <select name="dateSelect" id="dateFilter" defaultValue="none" onChange={(e)=>handleChange(e)}>
                    <option value="none"> Quand ? </option>
                    {event.map((info) => { return ( info.date)})
                    .reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], [])
                    .map((info, index) => {
                        return (
                        <option key={index} value={info}>{info}</option>
                    )})}
                </select>
                </div>
                <div className="selectFilter">
                    <p>Style :</p>
                <select name="styleSelect" id="styleFilter" defaultValue="none" onChange={(e)=>handleChange(e)}>
                    <option value="none"> Quoi ? </option>
                    {style.map((info) => { return ( info.name_style)})
                    .reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], [])
                    .map((info, index) => {
                        return (
                        <option key={index} value={info}>{info}</option>
                    )})}
                </select>
                </div>
                <button type="button" onClick={() => setShowCards(!showCards)}>
                     {showCards ? 'Afficher tout' : "Chercher"}
                </button>
            </div>
            <div className="eventList">
                {showCards ?
                event
                .filter((el) =>
                    (el.artist_name === artistFilter) ||
                    (el.artist_name === artistFilter && el.city === cityFilter) ||
                    (el.artist_name === artistFilter && el.date === dateFilter) ||
                    (el.style === styleFilter) ||
                    (el.city === cityFilter)
                ).map((info) => {
                    return (
                <div key={info.id}
                aria-hidden="true">
                    <div className="eventcard_container" onClick={() => showModal(info.id)}>
                    <EventCard />
                    </div>
                    {info.id === openModal && (
                        <Modal
                          openModal={openModal}
                          hideModal={hideModal}
                        >
                            <div className='modalGrid'>
                                <aside className="left">
                                    <img src="" alt="" />
                                </aside>
                                <aside className="right">
                                    <div className="modalHeader">
                                        <h3>Votre évènement !</h3>
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
                                </aside>
                            </div>
                        </Modal>
                    )}
                </div>
                )}) : 
                event.map((info) => {
                    return (
                <div key={info.id}
                aria-hidden="true">
                    <div className="eventcard_container" onClick={() => showModal(info.id)}>
                    <EventCard />
                    </div>
                    {info.id === openModal && (
                        <Modal
                          openModal={openModal}
                          hideModal={hideModal}
                        >
                            <div className='modalGrid'>
                                <aside className="left">
                                    <img src="" alt="" />
                                </aside>
                                <aside className="right">
                                    <div className="modalHeader">
                                        <h3>Votre évènement !</h3>
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
                                </aside>
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