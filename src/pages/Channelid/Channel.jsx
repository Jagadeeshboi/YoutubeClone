import { useEffect,useState } from "react"
import axios from "axios";

function Channel({channelId}) {
    const[imgUrl,setImageUrl]=useState('');

        useEffect(function gettingChannel()
        {
            const fetchChannelImage = async () => {
                    try {
                    const response = await axios.get(
                        `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=AIzaSyB40gPzJfA-YSabgmpKpBRsoUVVXcPMwRo`
                    );
                    const channelData = response.data.items[0];
                    const image = channelData.snippet.thumbnails.default.url;
                    setImageUrl(image);
                    } catch (error) {
                    console.error('Error fetching channel image:', error);
                    }
                };
        fetchChannelImage();
        },[channelId])
    return (
        <div>
        {imgUrl && (
            <img
            src={imgUrl}
            alt={`Channel_${channelId}_image`}
            className="channel_img"
            />
            )}
        </div>
    )
}

export default Channel
