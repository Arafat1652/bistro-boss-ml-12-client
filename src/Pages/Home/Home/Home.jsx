import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularCategory from "../PopularCategory/PopularCategory";
import Testimonials from "../Testimonials/Testimonials";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner/>
            <Category/>
            <PopularCategory/>
            <Featured/>
            <Testimonials/>
        </div>
    );
};

export default Home;