import React from 'react'
import './GuardForm.css'

function GuardForm(props) {
    return (
        <div className="guard_form">
            <div className="guard_form_content">
                <div className="guard_form_title">
                    <h6><i class="bi bi-shield-plus"></i> Guardia / Turno</h6>
                    <h6><i>Nuevo</i></h6>
                </div>
                <hr />
                <div className="guard_form__form">
                    <form>
                        <label htmlFor="name">Nombre</label>
                        <input type="text" id="name"></input>
                        <div className="guard_form__form_time">
                            <label htmlFor="name">Desde</label>
                            <input type="time" id="name"></input>
                            <label htmlFor="name">Hasta</label>
                            <input type="time" id="name"></input>
                        </div>
                        <div className="guard_form__form_type">
                            <label htmlFor="type">Tipo</label><br />
                            <select id="type">
                                <option value="active">Activa</option>
                                <option value="pasive">Pasiva</option>
                            </select>
                        </div>
                        <div className="guard_form__form_buttons">
                            <button type="button" onClick={() => { props.setShowGuardForm(prev => !prev) }}>Cancelar</button>
                            <button type="submit">Aceptar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default GuardForm
