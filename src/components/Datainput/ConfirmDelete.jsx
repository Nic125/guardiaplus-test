import React from 'react'
import './ConfirmDelete.css'

function ConfirmDelete(props) {
    return (
        <div className="confirm_delete">
            <div className="confirm_delete_content">
                <h6><strong>¿Confirma eliminar el registro?</strong></h6>
                <hr />
                <div className="confirm_delete_content_buttons">
                    <button type="button" onClick={() => {props.setShowConfirmDel(prev => !prev)}}>Cancelar</button>
                    <button type="button">Aceptar</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmDelete
