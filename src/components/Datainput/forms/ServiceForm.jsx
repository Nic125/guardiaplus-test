import React from 'react'
import './ServiceForm.css'

function ServiceForm(props) {
    return (
        <div className="service_form">
            <div className="service_form_content">
                <div className="service_form_title">
                    <h6><i class="bi bi-door-open"></i> Servicio</h6>
                    <h6><i>Nuevo</i></h6>
                </div>
                <hr />
                <div className="service_form__form">
                    <form>
                        <label htmlFor="name">Nombre</label>
                        <input type="text" id="name"></input>
                        <div className="service_form__form_buttons">
                            <button type="button" onClick={() => {props.setShowServForm(prev => !prev)}}>Cancelar</button>
                            <button type="submit">Aceptar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ServiceForm
