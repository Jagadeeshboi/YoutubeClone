import { Link } from "react-router-dom";
import { UseContext } from "../../Contextapi";
import { Shorts } from "./apiShorts";

function ChannelShorts() {
    const{Sidebar}=UseContext();
    const shortsDetails=Shorts()

    return (
        <ul className={`Channel-videos ${Sidebar?'de_activate':'activation'}`}>
        {shortsDetails.map(video=>
        <>
        <li key={video.videoId} className="video-card shorts">
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
    )
}

export default ChannelShorts
