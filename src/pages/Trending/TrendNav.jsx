import { NavLink } from "react-router-dom"
import styled from "styled-components"

const StyledLinks=styled(NavLink)`
    &:link,
    &:visited
    {
        font-size:2rem;
        text-decoration:none;
        color:var(--color-grey-700);
    }

    &:hover,
    &:active,
    &.active:link,
    &.active:visited
    {
        color:red;
        text-decoration:underline;
        font-weight:500;
    }
`
const Navlink=styled.ul`
    display:flex;
    gap:2.6rem;
    margin:15px 0;
    padding:10px 0;
    border-bottom:1px solid var(--color-grey-400);
`

function TrendNav() {
    return (
        <div>
            <Navlink>
                <li>
                    <StyledLinks to="/trending/now">
                        <span>Now</span>
                    </StyledLinks>
                </li>
                <li>
                    <StyledLinks to="/trending/music">
                        <span>Music</span>
                    </StyledLinks>
                </li>
                <li>
                    <StyledLinks to="/trending/gamming">
                        <span>Gaming</span>
                    </StyledLinks>
                </li>
                <li>
                    <StyledLinks to="/trending/movies">
                        <span>Movies</span>
                    </StyledLinks>
                </li>
            </Navlink>
        </div>
    )
}

export default TrendNav
