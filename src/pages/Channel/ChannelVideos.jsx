import { Link } from "react-router-dom";
import { UseContext } from "../../Contextapi";
import ChannelData from "./apiChanneldata";
import VideoInfo from "../Channelid/VideoInfo";


function ChannelVideos() {
    const ChannelDetails=ChannelData();
    const{Sidebar}=UseContext();

    return (
        <ul className={`Channel-videos ${Sidebar?'de_activate':'activation'}`}>
        {ChannelDetails.map(video=><li key={video.id} className="video-card">
            <Link to={`/video/${video.id.videoId}`} target="_parent" rel="noopener noreferrer">
                <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
            <p className="title">{video.snippet.title.split(' ').slice(0,6).join(' ')+'..'}</p>
            <div className="images">
            </div>
                {/* <p className="channel_title">{video.snippet.channelTitle}</p> */}
                <div className="views_likes">
                <VideoInfo  key={video.id.videoId} videoId={video.id.videoId}/>
            </div>
        </Link>
        </li>)}
    </ul>
    )
}

export default ChannelVideos
