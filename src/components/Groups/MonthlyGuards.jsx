import React from 'react'
import GuardItem from './GuardItem'
import './MonthlyGuards.css'

function MonthlyGuards(props) {
    return (
        <div className="monthly_guards">
            <div className="monthly_guards_content">
                <div className="monthly_guards_title">
                    <div className="monthly_guards_title_data">
                        <p><strong>Nicolas Rizzi</strong></p>
                        <p>Octubre de 2021</p>
                    </div>
                    <button type="button" onClick={() => {props.setShowMonthlyGuards(prev => !prev)}}>Cerrar</button>
                </div>
                <div className="monthly_guards__guards_list">
                    <GuardItem />
                    <GuardItem />
                    <GuardItem />
                    <GuardItem />
                    <GuardItem />
                    <GuardItem />
                </div>
            </div>
        </div>
    )
}

export default MonthlyGuards
