import React from 'react'
import './AsideOptions.css'

function AsideOptions(props) {
    return (
        <div className="aside_options">
            <button type="button" style={props.activeComponent === 'department' ? {background: '#c3f1d6'} : null} onClick={() => { props.setActiveComponent('department') }}><i class="bi bi-building"></i> Departamentos</button>
            <button type="button" style={props.activeComponent === 'service' ? {background: '#c3f1d6'} : null} onClick={() => { props.setActiveComponent('service') }}><i class="bi bi-door-open"></i> Servicios</button>
            {props.activeComponent === 'service' ?
                <div className="aside_options_select" >
                    <select>
                        <option>Selecciona un departamento</option>
                    </select>
                </div>
                : null}
            <button type="button" style={props.activeComponent === 'guard' ? {background: '#c3f1d6'} : null} onClick={() => { props.setActiveComponent('guard') }}><i class="bi bi-shield-plus"></i> Guardias / Turnos</button>
            {props.activeComponent === 'guard' ?
                <div className="aside_options_select" >
                    <select>
                        <option>Selecciona un departamento</option>
                    </select>
                    <select>
                        <option>Selecciona un servicio</option>
                    </select>
                </div>
                : null}
            <button type="button" style={props.activeComponent === 'personal' ? {background: '#c3f1d6'} : null} onClick={() => { props.setActiveComponent('personal') }}><i class="bi bi-person"></i> Personal</button>
            {props.activeComponent === 'personal' ?
                <div className="aside_options_select" >
                    <select>
                        <option>Selecciona un departamento</option>
                    </select>
                    <select>
                        <option>Selecciona un servicio</option>
                    </select>
                </div>
                : null}
        </div>
    )
}

export default AsideOptions
