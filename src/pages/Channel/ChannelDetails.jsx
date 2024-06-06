import { Outlet } from 'react-router-dom';
import  AuthorDetails from './AuthorDetails';
import styled from 'styled-components';
import { UseContext } from '../../Contextapi';

const Main=styled.div`
    height:100vh;
    overflow:scroll;
`
function ChannelLayout() {
    const {Sidebar}=UseContext();

    return (
        <Main className={`Channel-details ${Sidebar?"active":"deactive"}`}>
            <AuthorDetails/>
            <Outlet/>
        </Main> 
    )
}

export default ChannelLayout;
