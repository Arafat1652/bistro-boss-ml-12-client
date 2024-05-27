import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const useMenu = () => {
    const axiosPublic = useAxiosPublic()
    // const [menu, setMenu] = useState([])
    // const [loading, setLoading] = useState(true)
    // useEffect(()=>{
    //     fetch('https://bistro-boss-ml-12-server.vercel.app/menu')
    //     .then(res=> res.json())
    //     .then(data=> {
    //         setMenu(data)
    //         setLoading(false)
    //     })
    // },[])
    const {data:menu=[], isPending:loading, refetch}=useQuery({
        queryKey:['menu'],
        queryFn:async()=>{
            const res = await axiosPublic.get('/menu')
            // console.log(res.data);
            return res.data
        }
    })
    return [menu, loading, refetch]
};

export default useMenu;