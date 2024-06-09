// import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

function ApiChannelAuthor() {
    const api_key=import.meta.env.VITE_api_key;
    const [Author,Setauthor]=useState([]);
    const[loading,Setloading]=useState(false);
    const {ch_id}=useParams();
    console.log(ch_id)
    
    useEffect(()=>{
        async function getData()
        {
            const res=await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${ch_id}&key=${api_key}`);
            const data=await res.json();
            Setauthor(data.items[0]);
        }
        getData();
    },[ch_id])
        const snippet=Author.snippet
        const statistics=Author.statistics
        return {snippet,statistics,loading}
}

export default ApiChannelAuthor
