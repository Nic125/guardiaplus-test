import React from 'react'
import './GuardItem.css'

function GuardItem() {
    return (
        <div className="guard_item">
        <div className="guard_item_date">
            <p>10 de Octubre</p>
            <p className="guard_item_date_extra">Hospital Rogelio Cortizo</p>
            <p className="guard_item_date_extra">00:00am - 00:00am</p>
            </div>
            <div className="guard_item_details">
                <p><strong>Guardia Forense</strong></p>
                <p><i>Pasiva</i></p>
                
            </div>
        </div>
    )
}

export default GuardItem
