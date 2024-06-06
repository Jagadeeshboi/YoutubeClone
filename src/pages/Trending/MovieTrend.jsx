import styled from "styled-components"
import { Link } from "react-router-dom"
import VideoInfo from "../Channelid/VideoInfo"
import Trendfetch from "./apiTrend"

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


function MovieTrend() {
    const videos=Trendfetch(22);


    return (
        <div className="Trending">
            {videos.map((video,index)=>
                <Linkto key={index} to={`/video/${video.id}`}>
                <StyledContainer className="last">
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

export default MovieTrend
