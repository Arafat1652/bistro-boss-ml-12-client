import { Helmet } from "react-helmet-async";
import Cover from "../../Home/Shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import useMenu from "../../../Hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../../components/MenuItem/MenuItem";

const Menu = () => {
    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizzas = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const offered = menu.filter(item => item.category === 'offered')
    const soup = menu.filter(item => item.category === 'soup')


    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="our menu"></Cover>
            {/* main cover */}
            <SectionTitle subHeading="Don't miss" heading="Today's Offer"></SectionTitle>
                {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory items={desserts} title="dessert" img={dessertImg}></MenuCategory>
            {/* pizza menu items */}
            <MenuCategory items={pizzas} title="pizza" img={pizzaImg}></MenuCategory>
            {/* salad menu items */}
            <MenuCategory items={salad} title="salad" img={saladImg}></MenuCategory>
            {/*soup menu items */}
            <MenuCategory items={soup} title="soup" img={soupImg}></MenuCategory>

        </div>
    );
};

export default Menu;
