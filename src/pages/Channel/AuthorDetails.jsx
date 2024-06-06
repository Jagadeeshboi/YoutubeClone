import { NavLink, useParams } from "react-router-dom"
import styled from "styled-components"

const Maindiv=styled.div`
    display:flex;
    gap:15px;
    align-items:center;
    margin:5rem 10rem;
`

const Styledimg=styled.img`
    width:32px;
    height:32px;
    border-radius:15px;
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

function AuthorDetails() {
    const{ch_id}=useParams()
    return (
        <>
            <Maindiv>
                <Styledimg src="" alt="author_image"/> 
                <div>
                    <StyledHeading>Mr.Beast</StyledHeading>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
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
