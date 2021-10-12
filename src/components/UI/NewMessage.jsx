import React from 'react'
import './NewMessage.css'

function NewMessage(props) {
    return (
        <div className="new_message">
            <div className="new_message__content">
                <div className="new_message__title">
                    <h6>Nuevo mensaje</h6>
                    <button><i class="bi bi-info-circle"></i> Todos</button>
                </div>
                <hr />
                <form className="new_message__form">
                    <textarea></textarea>
                    <label for="file-upload" class="new_message-file-upload">
                        <i class="bi bi-card-image"></i>
                    </label>
                    <input id="file-upload" type="file" style={{ display: 'none' }} accept="image/*" />
                    <hr />
                    <div className="new_message__buttons">
                        <button type="button" onClick={() => { props.setShow(prev => !prev) }}>Cancelar</button>
                        <button type="submit">Publicar</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default NewMessage
