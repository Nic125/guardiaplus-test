import React from 'react'
import './Comments.css'
import female from './female.png'

function Comments() {
    return (
        <div className="post_comments">
            <div className="post_comments_comment">
                <div className="post_comments_comment_photo">
                    <img src={female} alt="photo" />
                </div>
                <div className="post_comments_comment_content">
                <p className="comment_autor">
                    <strong>Guadalupe Iglesias</strong> - 10 de octubre
                </p>
                    <p><i>
                    La inoculación a este nuevo grupo comenzará el próximo martes 12, en sintonía con todo el país
                    </i></p>
                </div>
            </div>
        </div>
    )
}

export default Comments
