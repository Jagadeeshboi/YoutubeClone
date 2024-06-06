import { UseContext } from "../Contextapi"
import Searchvideo from "./Searchvideo"
import Videos from "./Videos";

function Home() {
    const {searchTerm,Sidebar}=UseContext();

    document.title="Youtube"
    return (
        <div className={`home ${Sidebar?'activation':'de_activation'}`}>
            {searchTerm ?<Searchvideo/>:<Videos/>}
        </div>
    )
}

export default Home
