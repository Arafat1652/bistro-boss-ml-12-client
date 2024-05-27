import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../Hooks/useAxiosPublic";


export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const[loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic()

    // register
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login
    const signIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const googleSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    
    // logout 
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    // update profile 
    const updateUserProfile=(name, photo)=>{
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentuser=>{
            setUser(currentuser)
            if(currentuser){
                // get token and store client
                const userInfo = {email: currentuser.email}
                axiosPublic.post('/jwt', userInfo)
                .then(res =>{
                    setLoading(false)
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                    }
                })
            }
            else{
                // ToDo: remove token (if token stored in the client side Local storage, caching , in memory)
                localStorage.removeItem('access-token')
                setLoading(false)
            }
            
        });
        return () =>{
            return unsubscribe()
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;