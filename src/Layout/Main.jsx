import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Home/Shared/Footer/Footer";
import NavBar from "../Pages/Home/Shared/NavBar/NavBar";

const Main = () => {
    const location = useLocation()
    // console.log(location);
    const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes("/signUp")
    return (
        <div>
            {noHeaderFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;