import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
  const {user} = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const axiosSecure = useAxiosSecure()
  const [,refetch]= useCart()
  const { name, image, price, recipe, _id } = item;
  
  const handleAddToCart=()=>{

    if(user && user?.email){
      // post cart item in db
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price
      }
      axiosSecure.post('/carts', cartItem)
      .then(res=> {
        console.log(res.data);
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to the cart`,
            showConfirmButton: false,
            timer: 1500
          });
        }
        // refetch means abar ui data gulake render koro instant
        refetch()
      })
    }


    else{
      Swal.fire({
        title: "You are not Logged In?",
        text: "Please login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state:{from: location}})
        }
      });
    }
  }

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
        <p className="bg-slate-900 right-0 absolute text-white px-4 mr-2 mt-2">{price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button onClick={handleAddToCart} className="btn btn-outline border-0 border-b-4 mt-4 border-orange-400">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
