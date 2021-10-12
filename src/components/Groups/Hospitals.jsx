import React from 'react'
import './Hospitals.css'

function Hospitals(props) {
    return (
        <div className="hospitals">
            <div className="hospitals_content">
                <div className="hospitals__title">
                    <div className="hospitals__title__data">
                        <p><strong>Hospitales</strong></p>
                        <p className="hospitals__title__info"><i>Cambia a otro de los hospitales a <br />los que estes vinculado</i></p>
                    </div>
                    <button type="button" onClick={() => { props.setShowHospitals(prev => !prev) }}>Cerrar</button>
                </div>
                <hr />
                <div className="hospitals__options">
                    <button type="button">Hospital Rogelio Cortizo</button>
                    <button type="button">Dr. Ramón Carrillo Hospital Zonal</button>
                    <button type="button">Hospital Dr. Pedro Moguillansky</button>
                    <button type="button">Hospital Junín de los Andes</button>
                </div>
            </div>
        </div>
    )
}

export default Hospitals
