import React, { useState } from 'react'
import './Post.css'
import male from './male.png'
import photo from './photo.jpg'
import Comments from './Comments'
import PostComment from './PostComment'

function Post() {
    const [showComment, setShowComment] = useState(false)
    const [showPostComment, setShowPostComment] = useState(false)

    return (
        <div className="post_box">
            <div className="post_box_title">
                <div className="post_box_title_foto">
                    <img src={male} alt="male" />
                </div>
                <div className="post_box_title_data">
                    <p><strong>Nicolas Rizzi</strong></p>
                    <p>Médico generalista - <i>Hospital Rogelio Cortizo</i></p>
                    <p>10 de octubre de 2021</p>
                </div>
            </div>
            <hr />
            <div className="post_box_photo">
                <img src={photo} alt="photo" />
            </div>
            <div className="post_box_message">
                <p>
                Autoridades del Ministerio de Salud se reunieron hoy con directores de hospitales y equipos de vacunación de toda la provincia para avanzar en la diagramación del inicio de vacunación a niños y niñas menores de 3 a 11 años.
                La inoculación a este nuevo grupo comenzará el próximo martes 12, en sintonía con todo el país, y las inscripciones se abrirán en los próximos días a través de la web https://vacunate.rionegro.gov.ar/
                </p>
            </div>
            <div className="post_box_comments">
            {showPostComment ? <PostComment setShowPostComment={setShowPostComment} /> : null}
            {showComment ? <Comments /> : null}
            
                <button type="button" style={{marginRight:'5px'}} onClick={() => {setShowPostComment(prev => !prev)}}>Comentar</button>
                <button type="button" onClick={() => {setShowComment(prev => !prev)}}>{showComment ? 'Ocultar comentarios' : 'Mostrar comentarios'}</button>

            </div>

        </div>
    )
}

export default Post
