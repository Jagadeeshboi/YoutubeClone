import { UseContext } from "../../Contextapi"
import {  HiBookOpen, HiFire, HiHome, HiNewspaper, HiOutlineSignal, HiShoppingBag, HiUserCircle } from 'react-icons/hi2'
import {  LuGamepad2, LuHistory, LuPodcast } from "react-icons/lu";
import { SiYoutubeshorts } from "react-icons/si";
import { PiVideoFill } from "react-icons/pi";
import { BiSolidMovie, BiSolidVideos } from "react-icons/bi";
import { HiMusicNote } from "react-icons/hi";
import { GiDress, GiTrophyCup } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledLinks=styled(NavLink)   `
    &:link,
    &:visited {
        display: flex;
        align-items: center;
        gap: 1.2rem;
        text-decoration:none;

        color: var(--color-grey-700);
        font-size: 1.6rem;
        font-weight: 500;
        transition: all 0.3s;
    }


    &:hover,
    &:active,
    &.active:link,
    &.active:visited {
        color: var(--color-red-700);
        background-color:(--color-red-300);
    }

    & svg {
        width: 2.4rem;
        height: 2.4rem;
        color: var(--color-grey-400);
        transition: all 0.3s;
    }

    &:hover svg,
    &:active svg,
    &.active:link svg,
    &.active:visited svg {
        color: red;
        fill: red;
`

function Sidebar() {
    const{Sidebar}=UseContext();
    return (
        <aside className= {`${!Sidebar?'hide_bar':''}`}>
            <div className="heading">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="red" className="bi bi-youtube" viewBox="0 0 16 16">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                </svg>
                <h1>YouTube</h1>
            </div>
            <div className="first-section">
                <ul>
                    <li>
                        <StyledLinks to="/">
                            <HiHome/>
                            <span>Home</span>
                        </StyledLinks>
                    </li>
                    <li>
                            <SiYoutubeshorts/>
                            <span>Shorts</span>
                    </li>
                    <li>
                        <PiVideoFill/>
                        <span>Subscription</span>
                    </li>
                </ul>
            </div>
            <div className="second-section">
                <ul>
                    <li>
                        <BiSolidVideos/>
                        <span>You</span>
                    </li>
                    <li>
                        <LuHistory/>
                        <span>History</span>
                    </li>
                </ul>
            </div>
            <div className="third-section">
                <ul>
                    <li>
                        <p>Sign in to like videos, comment, and subscribe.</p>
                    </li>
                    <li>
                        <button>
                            <HiUserCircle/>
                            <span>Sign in</span>
                        </button>
                    </li> 
                </ul>
            </div>
            <div className="fourth-section">
                <ul>
                <h3>Explore</h3>
                    <li>
                        <StyledLinks to="/trending">
                            <HiFire/>
                            <span>Trending</span>
                        </StyledLinks>
                    </li>
                    <li>
                        <HiShoppingBag/>
                        <span>Shopping</span>
                    </li>
                    <li>
                        <HiMusicNote/>
                        <span>Music</span>
                    </li>
                    <li>
                        <BiSolidMovie/>
                        <span>Movie</span>
                    </li>
                    <li>
                        <HiOutlineSignal/>
                        <span>Live</span>
                    </li>
                    <li>
                        <LuGamepad2/>
                        <span>Gamming</span>
                    </li>
                    <li>
                        <HiNewspaper/>
                        <span>News</span>
                    </li>
                    <li>
                        <GiTrophyCup/>
                        <span>Sport</span>
                    </li>
                    <li>
                        <HiBookOpen/>
                        <span>Courses</span>
                    </li>
                    <li>
                        <GiDress/>
                        <span>Fashion & Beauty</span>
                    </li>
                    <li>
                        <LuPodcast/>
                        <span>Podcast</span>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar
