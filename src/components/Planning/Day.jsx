import React from 'react'
import './Day.css'
import PersonalItem from './PersonalItem'

function Day(props) {
    return (
        <div className="planning_month__day">
                <div className="planning_month__date">
                    <h3>{props.day}</h3>
                    <h6>{props.name}</h6>
                </div>
                <div className="planning_month__date__selected">
                    <PersonalItem name={'Nicolas Rizzi'} />
                    <PersonalItem name={'Guadalupe Iglesias'} />
                    <PersonalItem name={'Sergio Sol'} />
                    <PersonalItem name={'Sergio Sol'} />
                    <PersonalItem name={'Sergio Sol'} />
                    <PersonalItem name={'Sergio Sol'} />
                    <PersonalItem name={'Sergio Sol'} />
                    <PersonalItem name={'Sergio Sol'} />
                </div>
                <div className="planning_month__date__add">
                    <button type="button"><i class="bi bi-plus-lg"></i></button>
                </div>
            </div>
    )
}

export default Day
