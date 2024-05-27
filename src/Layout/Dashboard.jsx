import { FaAd, FaHamburger, FaHome} from "react-icons/fa";
import { FaBook, FaCalendar, FaCartPlus, FaEnvelope, FaList, FaUsers, FaUtensils} from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";


const Dashboard = () => {
    const [cart]= useCart()
    //ToDo: get is Admin value from the database
    const [isAdmin] = useAdmin()

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4 ">
                    {
                        isAdmin? <>
                        <li><NavLink to='/dashboard/adminHome'>
                       <FaHome></FaHome>Admin Home</NavLink>
                       </li>
                    <li><NavLink to='/dashboard/addItems'>
                       <FaUtensils></FaUtensils> Add Items</NavLink>
                       </li>
                    <li><NavLink to='/dashboard/manageItems'>
                        <FaList></FaList> Manage Items</NavLink>
                       </li>
                    <li><NavLink to='/dashboard/bookings'>
                       <FaBook></FaBook> Manage Bookings</NavLink>
                       </li>
                    <li><NavLink to='/dashboard/users'>
                       <FaUsers></FaUsers> All Users</NavLink>
                       </li>
                        
                        </>: <>
                        <li><NavLink to='/dashboard/userHome'>
                       <FaHome></FaHome> User Home</NavLink>
                       </li>
                    <li><NavLink to='/dashboard/history'>
                       <FaCalendar></FaCalendar> History</NavLink>
                       </li>
                    <li><NavLink to='/dashboard/cart'>
                       <FaCartPlus></FaCartPlus> My Cart ({cart.length})</NavLink>
                       </li>
                    <li><NavLink to='/dashboard/review'>
                       <FaAd></FaAd> Add a Review</NavLink>
                       </li>
                    <li><NavLink to='/dashboard/paymentHistory'>
                       <FaList></FaList>Payment History</NavLink>
                       </li>
                        </>
                    }
                       {/* shared or common navlink */}
                        <div className="divider"></div>
                        <li><NavLink to='/'>
                       <FaHome></FaHome> Home</NavLink>
                       </li>
                        <li><NavLink to='/order/salad'>
                       <FaHamburger></FaHamburger> Menu</NavLink>
                       </li>
                        <li><NavLink to='/order/contact'>
                        <FaEnvelope></FaEnvelope> Contact</NavLink>
                       </li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Dashboard;