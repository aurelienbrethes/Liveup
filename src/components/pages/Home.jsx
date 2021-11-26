import Carousel from "../Carousel";
import "../pages/home.css";
import home_video from "../medias/home_video.mp4";
import { useEffect, useState } from "react";
import axios from "axios";
import logo from "../medias/Live_up_1.gif";

const Home = () => {
  const [searchCity, setSearchCity] = useState("");
  const [allCities, setAllCities] = useState([]);
  const [videoCard, setVideoCard] = useState("displayNone");
  const [logo_liveup, setLogo_liveup] = useState("logo_liveup");

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoCard("videoCard");
      setLogo_liveup("displayNone");
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    axios
      .get(`https://geo.api.gouv.fr/communes?codePostal=${searchCity}`)
      .then((res) => res.data)
      .then((data) => {
        setAllCities(data);
      })
      .catch((err) => console.log(err));
  }, [searchCity]);

  return (
    <div className="home">
      <div className="logo_container">
        <img src={logo} className={logo_liveup} alt="logo Live up" />
      </div>
      <div className={videoCard}>
        <h1 className="titleHeroHeader">
          Tr<span>o</span>uvez v<span>o</span>tre événement idéal<span>!</span>
        </h1>
        <video className="background_video" autoPlay loop muted>
          <source src={home_video} type="video/mp4" />
        </video>
        <input
          className="searchCity"
          type="text"
          list="city"
          placeholder="Entrez votre code postal"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
        />
        {searchCity.length < 5 ? (
          ""
        ) : (
          <select name="city" id="selectCity">
            {allCities.map((city, index) => {
              return (
                <option key={index} value={city.nom}>
                  {city.nom}
                </option>
              );
            })}
          </select>
        )}
      </div>
      <div className="h2_container">
        <h2>C'est ici que tout commence!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          quod optio nesciunt asperiores, debitis eaque accusantium molestiae
          odio earum. Velit, ab reprehenderit? Debitis esse laborum saepe, natus
          ipsum doloremque, eius ea nulla explicabo veritatis suscipit
          obcaecati. Incidunt molestiae et iusto nulla dolorum. Officia error
          corporis praesentium voluptatem explicabo, ratione ut deserunt
          voluptatibus sunt, at corrupti.
        </p>
        <h2 id="titleCaroussel">Nos événements à venir</h2>
        <button className="btnPresentation btn">
          Voir tous les événements
        </button>
      </div>
      <Carousel />
      <div className="mapDiv">
        <h2 id="titleLocation">Trouver un lieu</h2>
        <iframe
          title="locations"
          src="https://www.google.com/maps/d/embed?mid=1PZ20cNpFYQgxdScopsIzGguV4Vo1oayL"
          width="640"
          height="480"
        ></iframe>
        <div>
          <h4>Nadau</h4>
          <p>Bayonne</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            mollitia deleniti incidunt qui aliquid autem vitae, alias suscipit
            non delectus facere voluptas deserunt, voluptatum est!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
