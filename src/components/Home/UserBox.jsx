import React from 'react'
import './UserBox.css'
import female from './female.png';
import male from './male.png';
import { Link } from 'react-router-dom'

function UserBox(props) {
    return (
        <div className="home__user_box">
            <div className="user_box__photo">
                <div className="user_box__image">
                    <img src={male} alt="male" />
                </div>
            </div>
            <hr />
            <div className="home__user_box_info">
                <p><strong>Nicolas Rizzi</strong></p>
                <p className="home__user_box_info__prof">Médico Generalista</p>
            </div>
            <div className="home__user_box_options">
                <button type="button" onClick={() => {props.setShowMonthlyGuards(prev => !prev)}}>Guardias mensuales</button>
                <Link to="/profile">
                <button type="button">Modifica tu perfil</button>
                </Link>
            </div>
            <div className="home__user__next_guard">
                <h6>Nicolas, tu próxima guardia es el día 16/10 - <strong>Guardia de derivación</strong></h6>
            </div>
            
        </div>
    )
}

export default UserBox
