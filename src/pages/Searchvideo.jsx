import { UseContext } from "../Contextapi"
import Channel from "./Channelid/Channel";
import Loading from "./Loading";
import { Link } from "react-router-dom";

function Searchvideo() {
    const {searchResult,searchLoading}=UseContext();
    const videoData=searchResult.items
    return (
        <div>
          {searchLoading ? <Loading/> 
          :
          <ul className="search_videos">
            {videoData.map((result) => ( 
              <li key={result.id.videoId}>
                    <Link to={`video/${result.id.videoId}`} target="_parent" rel="noopener noreferrer" className="video_search">
                            <img src={result.snippet.thumbnails.high.url} alt={result.snippet.title} />
                            <div className="Search">   
                                <p className="title">{result.snippet.title}</p>
                                <div className="image">
                                  <Channel key={result.snippet.channelId} channelId={result.snippet.channelId} />
                                  <p className="channel_name">{result.snippet.channelTitle}</p>
                                </div>
                                <p className="description">{result.snippet.description}</p>
                            </div>
                    </Link>
              </li>
            ))}
          </ul>
          }
        </div>
      );
}

export default Searchvideo
