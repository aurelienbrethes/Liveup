import Carousel from "../Carousel";
import '../pages/home.css'
import home_video from '../../media/home_video.mp4'
import { useEffect, useState } from 'react'
import axios from 'axios';
import EventCard from "../EventCard";

const Home = () => {
  
    const [searchCity, setSearchCity] = useState("");
    const [allCities, setAllCities] = useState([]);

    useEffect(() => { 
        axios
        .get(`https://geo.api.gouv.fr/communes?codePostal=${searchCity}`)
        .then((res) => res.data)
        .then((data) => {
            setAllCities(data)
        })
        .catch((err) => console.log(err));
    },[searchCity]);
  
    return (
        <div className="home">
            <div className="video">
                <video className='background_video' autoPlay loop muted>
                    <source src={home_video} type='video/mp4' />
                </video>
                <input
                    className="searchCity"
                    type="text"
                    list="city"
                    placeholder="Entrez votre code postal"
                    value={searchCity}
                    onChange={(e) => setSearchCity(e.target.value)} />
                {searchCity.length < 5 ? "" :
                    <select name="city" id="selectCity">
                        {allCities.map((city, index) => {
                            return (
                                <option key={index} value={city.nom}>{city.nom}</option>
                            );
                        })}
                    </select>}
            </div>
            <Carousel />
            <EventCard />
            <div className="mapDiv">
                <iframe src="https://www.google.com/maps/d/embed?mid=1PZ20cNpFYQgxdScopsIzGguV4Vo1oayL" width="640" height="480"></iframe>
            </div>
        </div>
    )
}

export default Home;