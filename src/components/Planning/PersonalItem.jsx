import React from 'react'
import './PersonalItem.css'

function PersonalItem(props) {
    return (
        <div className="personal__item">
            <p><strong>{props.name}</strong></p>
            <p className="personal__item__profesion">Médico Generalista</p>
        </div>
    )
}

export default PersonalItem
