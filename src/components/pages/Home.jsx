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
          <>
            <select name="city" id="selectCity">
              {allCities.map((city, index) => {
                return (
                  <option key={index} value={city.nom}>
                    {city.nom}
                  </option>
                );
              })}
            </select>
            <a id="linkCity" href="/event">
              Les évènements dans ma ville
            </a>
          </>
        )}
      </div>
      <div className="h2_container">
        <h2>C'est ici que tout commence!</h2>
        <p>
          Pour vous, artistes internationaux, artistes locaux, chargés de
          communication, gérants de bar, discothèques.. <br />
          Vous qui connaissez les difficultés de programmer un évènement sur
          tous les supports disponibles en ligne pour attirer la clientèle, ne
          cherchez plus : <br />
          <strong>Live Up est là !</strong> <br />
          Une seule et unique plateforme, pour tous, qui permet de tenir au
          courant vos fans les plus fidèles de vos évènements. <br />
          <strong>Simple, gratuit, efficace, Live Up !</strong>
        </p>
        <h2 id="titleCaroussel">Nos événements à venir</h2>
        <button className="btnPresentation btn">
          <a href="/event">Voir tous les événements</a>
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
            Nadau ou Los de Nadau est un groupe de musique gascon-béarnais créé
            en 1973 célébrant la culture gasconne et plus largement occitane.
            <br />
            Nadau dépasse largement les frontières de sa base béarnaise et
            gasconne, afin de devenir le symbole même de la musique occitane et
            l'un des groupes emblématiques d'Occitanie. <br />
            Les chansons De cap tà l'immortèla et L'encantada sont deux des
            chansons les plus célèbres de leur répertoire, <br />
            qui ne comporte qu'une seule chanson en français: Mon Dieu que j'en
            suis à mon aise.
            <br />
            Cette dernière chanson est également chantée en basque.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
