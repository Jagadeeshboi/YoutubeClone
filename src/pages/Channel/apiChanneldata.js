import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function ChannelData()
{
    const [channel,Setchannel]=useState([])
    const {ch_id}=useParams();
    useEffect(()=>{
        async function getData()
        {
            const res=await fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyB40gPzJfA-YSabgmpKpBRsoUVVXcPMwRo&part=snippet&channelId=${ch_id}&type=video&maxResults=10`);
            const data=await res.json();
            Setchannel(data.items);
        }
        getData();
    },[ch_id])
    return channel;
}
