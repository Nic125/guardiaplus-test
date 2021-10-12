import React from 'react'
import './DepartmentForm.css'

function DepartmentForm(props) {
    return (
        <div className="department_form">
            <div className="department_form_content">
                <div className="department_form_title">
                    <h6><i class="bi bi-building"></i> Departamento</h6>
                    <h6><i>Nuevo</i></h6>
                </div>
                <hr />
                <div className="department_form__form">
                    <form>
                        <label htmlFor="name">Nombre</label>
                        <input type="text" id="name"></input>
                        <div className="department_form__form_buttons">
                            <button type="button" onClick={() => {props.setShowDepForm(prev => !prev)}}>Cancelar</button>
                            <button type="submit">Aceptar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default DepartmentForm
