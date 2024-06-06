import Video from "./Video"
import CommentsDisplay from "./Commentslayout"
import Suggestvideos from "./Suggest_videos"
import { UseContext } from "../../Contextapi"

function Videolayout() {
    const {Sidebar}=UseContext();
    
    return (
        <div className={`videos-layout ${Sidebar?'active':'de_active'}`}>
            <div className="suggest-videos">
                <Suggestvideos/>
            </div>
            <div className="comments">
                <Video/>
                <CommentsDisplay/>
            </div>
        </div>
    )
}

export default Videolayout
