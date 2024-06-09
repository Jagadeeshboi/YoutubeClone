import { Link } from "react-router-dom";
import { UseContext } from "../Contextapi";
import Channel from "./Channelid/Channel";
import VideoInfo from "./Channelid/VideoInfo";


function Videos() {
    const{Sidebar,videos}=UseContext()

    
    return (
        <ul className={`videos ${Sidebar?'de_activate':'activation'}`}>
            {videos.map((video,index)=><li key={index} className="video-card">
              <Link to={`video/${video.id}`} target="_parent" rel="noopener noreferrer">
                <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
              <p className="title">{video.snippet.title.split(' ').slice(0,6).join(' ')+'..'}</p>
              <div className="images">
              <Link to={`channel/${video.snippet.channelId}`}>
              <Channel key={video.snippet.channelId} channelId={video.snippet.channelId} /></Link>
              </div>
                <p className="channel_title">{video.snippet.channelTitle}</p>
                <div className="views_likes">
                  <VideoInfo  key={video.id} videoId={video.id}/>
                </div>
            </Link>
            </li>)}
        </ul>
    )
}

export default Videos;
