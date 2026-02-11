import axios from "axios";
import { useEffect, useState } from "react";
const Laptops = ()=>{
    const [laptops,setLaptops] = useState([]);
    
    const get_laptops = async ()=>{
        
        const {data} = await axios.get("http://localhost:9000/api/laptops",{headers:{
            "Authorization":`Bearer ${localStorage.getItem("token")}`
        }});
        console.log(data);
        setLaptops(data);
    }
    useEffect(()=>{
        get_laptops();
    },[]);
    
    return(
        <>
            <p>{JSON.stringify(laptops)}</p>
        </>
    )
}
export default Laptops;