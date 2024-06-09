import { NavLink, useParams } from "react-router-dom"
import styled from "styled-components"
import ApiChannelAuthor from "./apiChannelAuthor"
import Spinner from "../Spinner"

const Maindiv=styled.div`
    display:flex;
    gap:15px;
    align-items:center;
    margin:5rem 10rem;
`

const Styledimg=styled.img`
    width:160px;
    height:160px;
    border-radius:50%;
    padding:15px;
`
const Btnblock=styled.div `
    display:flex;
    gap:12px;
`
const StyledHeading=styled.h1`
    font-size:3rem;

`

const SubBtn=styled.button`
    color:white;
    background-color:red;
    border-radius:20px;
    border:none;
    font-size:1.6rem;
    font-weight:400;
    margin-top:12px;
    padding:12px 25px;
    cursor:pointer;
`
const StylesLinks=styled.div`
    display:flex;
    gap:15px;
    align-items:center;
    margin:0rem 10rem;
    border-bottom:1px solid grey;
`
const Styledul=styled.ul`
    font-size:23rem;
    color:var(--color-grey-500);
    display:flex;
    gap:15px;
    text-decoration:dotted;
    margin: 8px 0;
`


const Styledlink=styled(NavLink)`
    &:link,
    &:visited
    {text-decoration:none;
    color:#000;
    font-size:1.6rem;
    font-weight:400;
    padding:5px;}

    &:hover,
    &:active,
    &.active:link,
    &.active:visited
    {
        text-decoration:underline;
        color:red;
    }
`
const Discription=styled.p`
    font-size:1.2rem;
    color:var(--color-grey-500);
`

function AuthorDetails() {
    const{ch_id}=useParams()

    const {snippet,statistics,loading}=ApiChannelAuthor();
    return (
        <>
            {loading&&<Spinner/>}
            <Maindiv>
                <Styledimg src={snippet.thumbnails.medium.url} alt="author_image"/> 
                <div>
                    <StyledHeading>{snippet.title}</StyledHeading>
                    <Styledul>
                        <li><p>{snippet.customUrl}</p></li>
                        <li><p>{statistics.subscriberCount<1000?statistics.subscriberCount:statistics.subscriberCount<1000000?(statistics.subscriberCount/1000)+'K':(statistics.subscriberCount/1000000)+'M'} subscribers</p></li>
                        <li><p>{statistics.videoCount<1000?statistics.videoCount:statistics.videoCount<1000000?(statistics.videoCount/1000).toFixed(1)+'K ':(statistics.videoCount/1000000).toFixed(2)+'M'}Videos</p></li>
                    </Styledul>
                    <Discription>{snippet.description}</Discription>
                    <Btnblock>
                        <SubBtn>Subscribe</SubBtn>
                    </Btnblock>
                </div>
            </Maindiv>
            <StylesLinks>
                <Styledlink to={`/channel/${ch_id}/videos`}>Videos</Styledlink>
                <Styledlink to={`/channel/${ch_id}/shorts`}>Shorts</Styledlink>
                <Styledlink to={"/channel/playlist"}>Playlist</Styledlink>
                <Styledlink to={"/channel/community"}>Community</Styledlink>
            </StylesLinks>
        </>
        
    )
}

export default AuthorDetails
