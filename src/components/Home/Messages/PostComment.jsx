import React from 'react'
import './PostComment.css'
import female from './female.png'

function PostComment(props) {
    return (
        <div className="post_comment">
                <div className="post_comment_photo">
                    <img src={female} alt="photo" />
                </div>
            <textarea></textarea>
            <button type="button" onClick={() => {props.setShowPostComment(prev => !prev)}}><i class="bi bi-check2"></i></button>
        </div>
    )
}

export default PostComment
