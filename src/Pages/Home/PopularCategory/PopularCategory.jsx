
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../../components/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";


const PopularCategory = () => {
    const [menu] = useMenu()
    const populer = menu.filter(item => item.category === 'popular')


    // const [menu, setMenu] = useState([])

    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=> res.json())
    //     .then(data=> {
    //         const populerItems=data.filter(item=> item.category === "popular")
    //         setMenu(populerItems)
    //     })
    // },[])
    
    return (
        <div className="mb-12">
        <SectionTitle
        subHeading="Check it out"
        heading="From our Menu"
        >
        </SectionTitle>
            <div className="grid md:grid-cols-2 gap-10 ">
                {
                    populer.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default PopularCategory;