import React from 'react'
import './DeleteHospital.css'

function DeleteHospital(props) {
    return (
        <div className="delete_hospital">
        <div className="delete_hospital_content">
        <div>
            <h6>¿Quieres desvincularte de este establecimiento?<br />Por favor confirma:</h6>
        </div>
        <div className="delete_hospital_options">
            <button type="button" onClick={() => {props.setShowDelHospital(prev => !prev)}}><strong>No</strong>, hice click por error</button>
            <button type="button"><strong>Si</strong>, ya no estoy vinculado a<br />este establecimiento</button>
        </div>

        </div>
        </div>
    )
}

export default DeleteHospital
