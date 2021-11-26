import React, { useEffect, useState } from 'react';
import EventCard from '../EventCard';
import './event.css';
import axios from 'axios';
import Modal from '../Modal';
import autres from '../medias/autres.png';
import blues from '../medias/blues.jpg';
import country from '../medias/country.jpg';
import electro from '../medias/electro.jpg';
import folk from '../medias/folk.jpg';
import hip_hop from '../medias/hip_hop.png';
import house from '../medias/house.jpg';
import jazz from '../medias/jazz.png';
import metal from '../medias/metal.jpg';
import pop from '../medias/pop.jpg';
import punk from '../medias/punk.png';
import rap from '../medias/rap.jpg';
import reggae from '../medias/reggae.jpg';
import rnb from '../medias/rnb.jpg';
import rock from '../medias/rock.jpg';
import soul from '../medias/soul.jpg';
import funk from '../medias/funk.jpg';

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
    }, []);

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
  
  // sélection de l'image des cards

    let image_style;
    const selectImages = (element) => {

        switch (element) {
            case 5:
                image_style = rock;
            break;
            case 15:
                image_style = pop;
            break;
            case 25:
                image_style = jazz;
            break;
            case 35:
                image_style = soul;
            break;
            case 45:
                image_style = rap;
            break;
            case 55:
                image_style = folk;    
            break;
            case 65:
                image_style = punk; 
            break;
            case 75:
                image_style = metal; 
            break;
            case 85:
                image_style = hip_hop;
            break;
            case 95:
                image_style = rnb;
            break;
            case 105:
                image_style = blues;
            break;
            case 115:
                image_style = country;
            break;
            case 125:
                image_style = funk;
            break;
            case 135:
                image_style = reggae;
            break;
            case 145:
                image_style = electro;
            break;
            case 155:
                image_style = house;
            break;
            default:
                image_style = autres;
            break;
        }
    }

    // sélection du style dans la modale

    let event_style;

    const selectStyle = (element) => {

        switch (element) {
            case 5:
                event_style = 'rock';
            break;
            case 15:
                event_style = 'pop';
            break;
            case 25:
                event_style = 'jazz';
            break;
            case 35:
                event_style = 'soul';
            break;
            case 45:
                event_style = 'rap';
            break;
            case 55:
                event_style = 'folk';    
            break;
            case 65:
                event_style = 'punk'; 
            break;
            case 75:
                event_style = 'metal'; 
            break;
            case 85:
                event_style = 'hip_hop';
            break;
            case 95:
                event_style = 'rnb';
            break;
            case 105:
                event_style = 'blues';
            break;
            case 115:
                event_style = 'country';
            break;
            case 125:
                event_style = 'funk';
            break;
            case 135:
                event_style = 'reggae';
            break;
            case 145:
                event_style = 'electro';
            break;
            case 155:
                event_style = 'house';
            break;
            default:
                event_style = 'autres';
            break;
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
                <div className="eventcard_container" onClick={() =>
                    showModal(info.id)
                }>
                {selectImages(info.style)}
                {selectStyle(info.style)}
                <EventCard image={image_style} location={info.city} artist={info.artist_name}/>
                </div>
                {info.id === openModal && (
                    <Modal
                        openModal={openModal}
                        hideModal={hideModal}
                    >
                        <div className='modalGrid'>
                            <aside className="left">
                                <img width="400px" className="imageModale" src={image_style} alt="modale" />
                            </aside>
                            <aside className="right">
                                <div className="modalHeader">
                                    <h3>Votre évènement !</h3>
                                </div>
                                <div className="modalFullInfo">
                                    <p>{info.artist_name}</p>
                                    <p>{event_style}</p>
                                    <p>{info.date}</p>
                                    <p>{info.time}</p>
                                    <p>{info.name_place}</p>
                                    <p>{info.location ? info.location : "Inconnue"}</p>
                                    <p>{info.postal_code} {info.city}</p>                       
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
                    <div className="eventcard_container" onClick={() =>
                        showModal(info.id)
                    }>
                    {selectImages(info.style)}
                    {selectStyle(info.style)}
                    <EventCard image={image_style} location={info.city} artist={info.artist_name}/>
                    </div>
                    {info.id === openModal && (
                        <Modal
                          openModal={openModal}
                          hideModal={hideModal}
                        >
                            <div className='modalGrid'>
                                <aside className="left">
                                    <img width="400px" className="imageModale" src={image_style} alt="modale" />
                                </aside>
                                <aside className="right">
                                    <div className="modalHeader">
                                        <h3>Votre évènement !</h3>
                                    </div>
                                    <div className="modalFullInfo">
                                        <p>{info.artist_name}</p>
                                        <p>{event_style}</p>
                                        <p>{info.date}</p>
                                        <p>{info.time}</p>
                                        <p>{info.name_place}</p>
                                        <p>{info.location ? info.location : "Inconnue"}</p>
                                        <p>{info.postal_code} {info.city}</p>                       
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