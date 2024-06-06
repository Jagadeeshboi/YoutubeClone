import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const key="AIzaSyB40gPzJfA-YSabgmpKpBRsoUVVXcPMwRo";
const ApiContext=createContext()
function Contextapi({children}) {
    const [searchTerm ,setSearchterm]= useState('');
    const [searchResult,Setresult]=useState('');
    const[searchLoading,Setsearchloading]=useState(false);
    const[Sidebar,setSidebar]=useState(false);
    const [videos, setVideos] = useState([]);
    
    
    useEffect(function SerachResult()
    {
        async function fetchResult()
        {
            try 
            {
                console.log(searchTerm)
                Setsearchloading(true);
                const res=await fetch(`https://www.googleapis.com/youtube/v3/search?key=${key}&type=video&part=snippet&q=${searchTerm}`);
                const data=await res.json();
                Setresult(data);
            }
            catch(err)
            {
                alert(err)
            }
            finally
            {
                Setsearchloading(false);
            }
        }
        fetchResult();
    },[searchTerm])



    useEffect(() => {
        async function fetchvideos()
        {// Fetch most popular videos from YouTube Data API
        try{
            const res=await axios.get("https://www.googleapis.com/youtube/v3/videos", {
            params: {
            part: 'snippet',
            chart: 'mostPopular',
            regionCode: 'IN',
            maxResults: 120,
            key: key
            }
        })
        setVideos(res.data.items);
        }
        catch(error)
        {
        console.log(error)
        }
    }
    fetchvideos();
    }, []); 
    

    //For suggest videos from api


    return <ApiContext.Provider
        value={{
            searchResult,
            setSidebar,
            Sidebar,
            searchTerm,
            videos,
            searchLoading,
            setSearchterm,
        }}
        >
        {children}
    </ApiContext.Provider>
}
export function UseContext()
{
    const useCont=useContext(ApiContext);
    return useCont;
}

export default Contextapi
