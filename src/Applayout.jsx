import { Outlet } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Sidebar from "./pages/Sidebar/Sidebar";
function Applayout() {
    return (
        <div>
            <Navbar/>
            <Sidebar/>
            <Outlet/>
        </div>
    )
}

export default Applayout
