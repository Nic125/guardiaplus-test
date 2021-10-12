import React from 'react'
import './Planning.css'
import PlanningMonth from './PlanningMonth'

function Planning() {
    return (
        <div className="planning_page">
            <div className="planning_page__aside">
                <div className="planning_page__aside_content">
                    <p>Selecciona la guardia a planificar</p>
                    <select>
                        <option>Seleccione institución</option>
                    </select>
                    <select>
                        <option>Seleccione departamento</option>
                    </select>
                    <select>
                        <option>Seleccione servicio</option>
                    </select>
                    <select>
                        <option>Seleccione guardia</option>
                    </select>
                    <select>
                        <option>Seleccione mes</option>
                    </select>
                </div>
            </div>
            <div className="planning_page__content">
                <PlanningMonth />
            </div>
        </div>
    )
}

export default Planning
