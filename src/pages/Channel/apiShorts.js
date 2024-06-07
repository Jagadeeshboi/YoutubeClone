//https://yt.lemnoslife.com/channels?part=shorts&id=UCBR8-60-B28hp2BmDPdntcQ

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export function Shorts()
{
    const [shorts,setShorts]=useState([]);
    const {ch_id}=useParams();
    const [isLoading,Setloading]=useState(false);

    useEffect(()=>
    {
        async function getData()
        {

            try{
                Setloading(true)
                const res=await axios.get(`https://yt.lemnoslife.com/channels?part=shorts&id=${ch_id}`);
                setShorts(res.data.items[0].shorts)
            }
            catch(Error)
            {
                console.log(Error);
            }
            finally
            {
                Setloading(false);
            }
        }
        getData();
    },[ch_id])
    return {shorts,isLoading};
}