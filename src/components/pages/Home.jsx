<<<<<<< HEAD
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

=======
import Carousel from "../Carousel";

const Home = () => {
    return (
        <div>
            <Carousel/>
        </div>
>>>>>>> 809579469f63a9e970f419d5801cc14a75ae9a5e
    )
}

export default Home;