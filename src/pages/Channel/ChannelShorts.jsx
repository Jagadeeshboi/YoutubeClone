import { Link } from "react-router-dom";
import { UseContext } from "../../Contextapi";
import { Shorts } from "./apiShorts";
import Spinner from "../Spinner";

function ChannelShorts() {
    const{Sidebar}=UseContext();
    const {shorts ,isLoading}=Shorts()

    return (
        <>
        {isLoading&&<Spinner/>}
        <ul className={`Channel-videos ${Sidebar?'de_activate':'activation'}`}>
        {shorts.map(video=>
        <>
        <li key={video.title} className="video-card shorts">
            <Link to={`/shorts/${video.videoId}`} target="_parent" rel="noopener noreferrer">
                <img src={video.thumbnails[0].url} alt={video.title} className="image"/>
            {/*  */}
        </Link>
        <p>{video.title.split(' ').slice(0,6).join(' ')+'..'}</p>
        <p>{video.viewCount} views</p>
        </li>
        </>
    )}
    </ul>
    </>
    )
}

export default ChannelShorts
