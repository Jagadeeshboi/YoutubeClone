import React, { useState } from 'react';
import DOMPurify from 'dompurify'; // Import DOMPurify for sanitization

function CommentPurify({ textDisplay }) {
  const [isTrue,setTrue]=useState(false);
  // Sanitize the HTML content to prevent XSS attacks
  const sanitizedContent = DOMPurify.sanitize(textDisplay);

  // Use dangerouslySetInnerHTML to render the sanitized HTML
  return<>
    <div className='text-link' dangerouslySetInnerHTML={isTrue?{__html: sanitizedContent}:{ __html: sanitizedContent.split(' ').slice(0,10).join(' ') }} />
    {sanitizedContent.split(' ').length>10&&
      <button onClick={()=>setTrue(!isTrue)}>{isTrue?'show less':'show more'}</button>
    }
  </>
}

export default CommentPurify;
