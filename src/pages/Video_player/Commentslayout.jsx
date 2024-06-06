import React, { useState } from 'react';
import Comments from './Comments'; // Adjust the import path as necessary
import CommentPurify from './DomPurify';
import VideoInfo from '../Channelid/VideoInfo';
import { useParams } from 'react-router-dom';
import { HiThumbUp } from 'react-icons/hi';


function CommentsDisplay() {                 // This assumes you are using React Router and the `id` is a part of the URL
    const comments = Comments(); 
    const[commentsCount,Setcomments]=useState(null);            // Use the custom hook to get comments
    const {id}=useParams();

    if (!comments) {
        return <div>Loading comments...</div>;
    }
    const topLevelComments = comments.map(comment => comment.snippet.topLevelComment);

    // Step 2: Sort the top-level comments based on like counts
        topLevelComments.sort((a, b) => {
        return b.snippet.likeCount - a.snippet.likeCount;
        });

// Step 3: Map through the sorted top-level comments and render them


    return (
        <div className="Comment">
            <VideoInfo videoId={id} comments={Setcomments}/>
            <h3>{commentsCount<1000?commentsCount:commentsCount<1000000?(commentsCount/1000).toFixed(1)+'k':(commentsCount/1000000).toFixed(1)+'M'} Comments</h3>
            <ul>
            {topLevelComments.map((comment, index) => (
                <li key={index} className="comment-list">
                    <img src={`${comment.snippet.authorProfileImageUrl}`} alt="user-img"/>
                    <div className="name-comment">
                        <h4>{comment.snippet.authorDisplayName.slice(1)}</h4>
                        <CommentPurify textDisplay={comment.snippet.textDisplay}/>
                        {comment.snippet.likeCount !== 0&&<p><HiThumbUp/>{comment.snippet.likeCount}</p>}
                    </div>
                </li>
                ))}
            </ul>

        </div>
    )
}

export default CommentsDisplay;
