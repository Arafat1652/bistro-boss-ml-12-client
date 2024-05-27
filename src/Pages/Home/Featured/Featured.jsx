import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featurdImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
        subHeading="Check it out"
        heading="Featured Item"
        />
        <div className="flex justify-center items-center bg-slate-500 bg-opacity-40 pb-20 pt-12 px-36">
            <div>
                <img src={featurdImg} alt=""  />
            </div>
            <div className="md:ml-10 text-lg">
                <p>May 5, 2024</p>
                <p className="uppercase">where can i get some?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus praesentium quo velit quod recusandae, enim laboriosam hic, dolorem ipsam ea eligendi repudiandae voluptatum, excepturi ab magni. Accusamus assumenda iste quis expedita sequi.</p>
                <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
            </div>
        </div>

        </div>
    );
};

export default Featured;