import axios from "axios";
import { useEffect,useState } from "react";
import {useParams} from "react-router-dom";


const Api_url='https://www.googleapis.com/youtube/v3/commentThreads';
const Api_key="AIzaSyB40gPzJfA-YSabgmpKpBRsoUVVXcPMwRo";
function Comments() {
    
    const [comments,Setcomments]=useState();
    const {id}=useParams();

        useEffect(function()
    {
        async function fetchComments()
        {
            try{const response =await axios.get(Api_url,{
                params:{
                    maxResults:100,
                    part:"snippet",
                    videoId:id,
                    key:Api_key
                }
                })
                Setcomments(response.data.items)
            }
            catch(error)
            {
                console.log(error)
            }
        }
            fetchComments();
            
        },[id])
    return comments;

}

export default Comments;