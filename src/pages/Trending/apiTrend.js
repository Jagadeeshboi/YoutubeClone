import { useEffect ,useState} from "react";


const key=import.meta.env.VITE_api_key;
function Trendfetch(Id)
{
    const [videos, setVideos] = useState([]);
    useEffect(()=>
    {
        async function getDate(Id)
        {
            try
            {
                const res=await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN&videoCategoryId=${Id}&key=${key}&relevanceLanguage=en&maxResults=20`);
                const data=await res.json();
                setVideos(data.items);
            }
            catch(error)
            {
                console.log(error)
            }
        }getDate(Id);

    },[Id])

    return videos
}
export default Trendfetch;