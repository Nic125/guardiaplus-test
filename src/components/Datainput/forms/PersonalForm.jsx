import React, { useState } from 'react'
import './PersonalForm.css'
import male from './male.png'
import female from './female.png'

function PersonalForm(props) {
    const [sex, setSex] = useState('none')
    return (
        <div className="personal_form">
            <div className="personal_form_content">
                <div className="personal_form_title">
                    <h6><i class="bi bi-person"></i> Personal</h6>
                    <h6><i>Nuevo</i></h6>
                </div>
                <hr />
                <div className="personal_form_gender">
                    <div className="personal_form_picture">
                        {sex === 'male' ? <img src={male} alt="photo" /> : <img src={female} alt="photo" />}
                    </div>
                    <select onChange={(e) => {setSex(e.target.value)}}>
                        <option value="female">Mujer</option>
                        <option value="male">Hombre</option>
                    </select>
                </div>

                <div className="personal_form__form">
                    <form>
                        <label htmlFor="name">Nombre</label>
                        <input type="text" id="name"></input>
                        <label htmlFor="last_name">Apellido</label>
                        <input type="text" id="last_name"></input>
                        <label htmlFor="profession">Profesión</label>
                        <input type="text" id="profession"></input>
                        <div className="personal_form__form_buttons">
                            <button type="button" onClick={() => { props.setShowPerForm(prev => !prev) }}>Cancelar</button>
                            <button type="submit">Aceptar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PersonalForm
