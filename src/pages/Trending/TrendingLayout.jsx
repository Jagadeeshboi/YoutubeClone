import { Outlet } from "react-router-dom"
import TrendNav from "./TrendNav"
import { UseContext } from "../../Contextapi"

function Trending() {
    const {Sidebar}=UseContext()
    return (
        <div className={`Trend ${Sidebar?'active':'deactive'}`}>
            <TrendNav/>
            <Outlet/>
        </div>
    )
}

export default Trending
