import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
function Shorts() {
    const {short_id}=useParams();
    const opts = {
        width: '315px',
        height: '560px',
        playerVars: {
            controls: 0,
            modestbranding: 0, // Hide YouTube logo
            playsinline: 1,
            showinfo: 0,
            rel: 0 
        }
    }
        function _onReady(event) 
        {
            // Access to player in all event handlers via event.target
            event.target.playVideo();
        } 
    // document.title=
    return (
        <section id='short' className='Shorts-card'>
            <YouTube 
                    videoId={short_id} // Pass the video ID as props
                    opts={opts}
                    onReady={_onReady}
                    style={{borderRadius:'15rem',margin:"auto"}}
                    />
        </section>

    )
}

export default Shorts;
