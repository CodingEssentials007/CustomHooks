import axios from "axios";
import {  useState } from "react";

export const useApi=()=> {
    const [data,setData]=useState({});
   
    const ap=(url)=>
    {
        axios.get(url).then((res)=>(setData(res.data)))
        
    }

    return [data,ap];
}

