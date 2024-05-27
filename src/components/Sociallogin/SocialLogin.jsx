import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const {googleSignIn} = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handleGoogleLogin=()=>{
        googleSignIn()
        .then(result=>{
            console.log(result);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res=>{
                console.log(res.data);
                navigate('/')
            })
        })
    }

    return (
        <div>
            <div className="divider"></div>
        <button onClick={handleGoogleLogin} className="btn">
        <FaGoogle></FaGoogle>
        Google
        </button>
        </div>
    );
};

export default SocialLogin;