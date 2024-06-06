import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
function Video() {
    const {id}=useParams();
    const opts = {
        height: '500px',
        width: '100%',
    }
        function _onReady(event) 
        {
            // Access to player in all event handlers via event.target
            event.target.playVideo();
        } 
    // document.title=
    return (
        <YouTube 
                videoId={id} // Pass the video ID as props
                opts={opts}
                style={{borderRadius:"15px"}}
                onReady={_onReady}
            />

    )
}

export default Video
