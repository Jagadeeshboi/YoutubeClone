import styled from "styled-components";
import { UseContext } from "../Contextapi"
import SearchBar from "./Search-bar"
import { NavLink } from "react-router-dom";
import {HiHome} from "react-icons/hi2"
import { FaFire } from "react-icons/fa6";

const StyledNavLink=styled(NavLink)`
    &:link,
    &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-red-700);
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
}
`

function Navbar() {
    const {setSidebar,Sidebar}=UseContext();
    return (
        <nav className={`${Sidebar?"activation":""}`}>
            <ul className="left-list">
                <li onClick={()=>setSidebar(!Sidebar)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                        </svg>
                </li>
                <li >
                    <StyledNavLink to="/">
                        <HiHome/>
                    </StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to="/trending">
                        <FaFire/>
                    </StyledNavLink>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-play-btn" viewBox="0 0 16 16">
                        <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
                    </svg>
                </li>
            </ul>
            <SearchBar/>
            <ul className="right-list">
            </ul>
        </nav>
    )
}

export default Navbar
