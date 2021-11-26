import Carousel from "../Carousel";
import Profil from "../Profil";
import '../pages/home.css'
import home_video from '../medias/home_video.mp4'
import { useEffect, useState } from 'react'
import axios from 'axios';

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
            <div className="videoCard">
            <video className='background_video' autoPlay loop muted>
                <source src={home_video} type='video/mp4' />
            </video>
            <input
                className="searchCity"
                type="text"
                list="city"
                placeholder="Entrez votre code postal"
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
            />
                {searchCity.length < 5 ? "" : 
                    <select name="city" id="selectCity">
                        {allCities.map((city, index) => { 
                            return (
                        <option key={index} value={city.nom}>{city.nom}</option>
                        )})}
                    </select>
                }
            </div>
            <div className="h2_container">
                <h2>Make yours nights great again</h2>
            </div>
                <Carousel/>                  
            <div className="mapDiv">
                <iframe title="locations" src="https://www.google.com/maps/d/embed?mid=1PZ20cNpFYQgxdScopsIzGguV4Vo1oayL" width="640" height="480"></iframe>
            </div>
<<<<<<< HEAD
			<Profil />
=======
            
>>>>>>> e647a0f5038c1c44ad82e1268ba42fe6f4c81b93
        </div>
    )}

export default Home;
