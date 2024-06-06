import VideoInfo from "../Channelid/VideoInfo"
import styled from "styled-components"
import Trendfetch from "./apiTrend"
import { Link } from "react-router-dom"

const StyledContainer=styled.div `
    max-width:100%;
    display:flex;
    gap:1.6rem;
    margin-top:1.2rem;

`
const Img=styled.img `
    width:24rem;
    border-radius:12px;
`
const VideoDetails=styled.div `
        text-align:left;
        color:#000;
`
const Textheading=styled.h1 `
    font-size:2rem;
    font-weight:500;
    width:64rem;
`

const Linkto=styled(Link)`
    text-decoration:none;
`

function MusicTrend() {
    const videos=Trendfetch('10');

    return (
        <div className="Trending">
            {videos.map((video,index)=>
                <Linkto key={index} to={`/video/${video.id}`}>
                <StyledContainer >
                        <Img src={video.snippet.thumbnails.high.url} alt="img"/>
                        <VideoDetails>
                            <Textheading>{video.snippet.title.split(' ').slice(0,20).join(' ')+'..'}</Textheading>
                            <VideoInfo videoId={video.id}/>
                        </VideoDetails>
                </StyledContainer>
                </Linkto>)
            }
        </div>
    )
}

export default MusicTrend
