import { formatDistanceToNow } from 'date-fns';
import Channel from './Channel';
import { useState,useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Videoinfo=styled.ul `
        display:flex;
        gap:1.5rem;
        color:var(--color-grey-700);
        font-weight:500;
        margin-bottom:1.2rem;
        font-size:1.6rem;
`
const Videodiscription=styled.p`
    color:var(--color-grey-700);
    font-weight:500;
    width:64rem;
    font-size:1.6rem;
`

const VideoInfo = ({ videoId}) => {
    const[isTrueInfo,setTrue]=useState(false)
    const [videoDetails, setVideoDetails] = useState(null);

    useEffect(() => {
        const fetchVideoDetails = async () => {
        try {
            const response = await axios.get(
            `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet,statistics&key=AIzaSyB40gPzJfA-YSabgmpKpBRsoUVVXcPMwRo`
            );
            setVideoDetails(response.data.items[0]);
        } catch (error) {
            console.error('Error fetching video details:', error);
        }
        };

        fetchVideoDetails();
        return () => {
            document.title = "Youtube"; // Reset document title
        };
    }, [videoId]);
    

    if (!videoDetails) {
        return <div>Loading...</div>;
    }

    const { snippet, statistics} = videoDetails;
    return (
        <>
        <div className='Channel_info'>
            
            <h3>{snippet.title}</h3>
            <div className='likes_section'>
                <div className='likes_comments'>
                    <p> {statistics.viewCount<1000?statistics.viewCount.toString():statistics.viewCount<1000000?(statistics.viewCount / 1000).toFixed(1) + 'K':(statistics.viewCount / 1000000).toFixed(1) + 'M'} views</p>
                    <p>{formatDistanceToNow(new Date(snippet.publishedAt).toLocaleDateString()).replace('about','')} ago </p>
                </div>
                <div>
                    <p>{statistics.likeCount<1000?statistics.likeCount.toString():statistics.likeCount<1000000?(statistics.likeCount / 1000).toFixed(1) + 'K':(statistics.likeCount / 1000000).toFixed(1) + 'M'} Likes</p>
                    <p>Share</p>
                    <p>save</p>
                    <p>...</p>
                </div>
            </div>
            <div className='channel_sub'>
                <div>
                    <ul>
                        <li>
                            <Channel channelId={snippet.channelId}/>
                            <p>{snippet.channelTitle}</p>
                        </li>
                        <li>
                            <button>Subscribe</button>
                        </li>
                    </ul>
                </div>
                <div className='video_description'>
                    <p>{isTrueInfo? snippet.description+'...':snippet.description.split(' ').slice(0,10).join(' ')+'...'}<button onClick={()=>setTrue(!isTrueInfo)}>{isTrueInfo?'show less':'more'}</button></p>
                </div>
            </div> 
            
        </div>
        <div className='comments_likes'>
            <p>{snippet.channelTitle}</p>
            <p>{statistics.viewCount<1000?statistics.viewCount.toString():statistics.viewCount<1000000?(statistics.viewCount / 1000).toFixed(1) + 'K':(statistics.viewCount / 1000000).toFixed(1) + 'M'} views</p>
        </div>
        <div className='likes'>
            <p> 
                {statistics.viewCount<1000?statistics.viewCount.toString():statistics.viewCount<1000000?(statistics.viewCount / 1000).toFixed(1) + 'K':(statistics.viewCount / 1000000).toFixed(1) + 'M'} views
            </p>
            <p> {formatDistanceToNow(new Date(snippet.publishedAt).toLocaleDateString()).replace('about','')} ago</p>
        </div>
        <div className='Trend_list'>
            <Videoinfo>
                <p>{snippet.channelTitle}</p>
                <p>{statistics.viewCount<1000?statistics.viewCount.toString():statistics.viewCount<1000000?(statistics.viewCount / 1000).toFixed(1) + 'K':(statistics.viewCount / 1000000).toFixed(1) + 'M'} views</p>
                <p>{formatDistanceToNow(new Date(snippet.publishedAt).toLocaleDateString()).replace('about','')} ago </p>
            </Videoinfo>
            <Videodiscription>{snippet.description.split(' ').slice(0,20).join(' ')+'...'}</Videodiscription>
        </div>
        </>
    );
};

export default VideoInfo;
