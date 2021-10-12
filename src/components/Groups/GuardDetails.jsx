import React from 'react'
import './GuardDetails.css'
import female from './female.png';
import male from './male.png';

function GuardDetails(props) {
    return (
        <div className="guard_details">
            <div className="guard_details__content">
                <div className="guard_details__title">
                    <div className="guard_details__title__data">
                        <p>Miercoles 16 de Octubre</p>
                        <h5>Medicina General 24hs</h5>
                        <p>de 8:00am a 8:00am</p>
                    </div>
                    <button type="button" onClick={() =>{props.setShowDetails(prev => !prev)}}>Cerrar</button>
                </div>

                <div>
                    <div className="guard_details__current">
                        <div className="user_box__image">
                            <img src={male} alt="male" />
                        </div>
                        <div className="guard_details__current_data">
                            <p><strong>Nicolás Rizzi</strong></p>
                            <p>Médico Generalista</p>
                            <p>Teléfono: 0259-45125463</p>
                            <p>nicolasrizzi@gmail.com</p>
                        </div>
                    </div>
                    <hr />
                    <div className="guard_details__prev_next">
                        <div className="guard_details__prev">
                        <i class="bi bi-arrow-left-square guard_details_icon"></i>
                            <p>Guardia anterior <i>15 de Octubre</i></p>
                            <p><strong>Guadalupe Iglesias</strong></p>
                            <p>Médica Generalista</p>
                            <p>Teléfono: 0259 -45328764</p>
                        </div>
                        <div className="guard_details__next">
                        <i class="bi bi-arrow-right-square guard_details_icon"></i>
                            <p>Próxima guardia <i>17 de Octubre</i></p>
                            <p><strong>Sergio Sol</strong></p>
                            <p>Médico Generalista</p>
                            <p>Teléfono: 0259 -45874164</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default GuardDetails
