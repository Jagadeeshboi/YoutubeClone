import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import VideoInfo from '../Channelid/VideoInfo';

const SuggestedVideos = () => {
    const [videos, setVideos] = useState([]);
    const {id:videoId}=useParams();
    const api_key=import.meta.env.VITE_api_key;

    useEffect(() => {
        const fetchVideos = async () => {
        try {
            const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${api_key}&part=snippet&type=videos&caption_id=${videoId}&maxResults=30`);
            setVideos(response.data.items);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
        };
        fetchVideos();
        }, [videoId]);

    return (
        <div>
        <ul>
            {videos.map(video => (
            <li key={video.id.videoId} className='suggest_video'>
                <Link to={`/video/${video.id.videoId}`}> 
                    <div className='suggest_flex'>
                        <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
                        <div className='suggest_video_info'>   
                            <p className='video_title'>{video.snippet.title.split(" ").splice(0,10).join(" ")+'...'}</p>
                            <VideoInfo videoId={video.id.videoId}/>
                        </div>
                    </div>
                </Link>
            </li>
            ))}
        </ul>
        </div>
    );
};

export default SuggestedVideos;
