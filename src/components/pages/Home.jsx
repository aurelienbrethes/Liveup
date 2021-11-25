import EventCard from "../EventCard";
import './home.css';

const Home = () => {
    return (
        <div className="home">

            <EventCard />
            
            <div className="mapDiv">
            <iframe src="https://www.google.com/maps/d/embed?mid=1PZ20cNpFYQgxdScopsIzGguV4Vo1oayL" width="640" height="480"></iframe>
            </div>


        </div>

    )
}

export default Home;