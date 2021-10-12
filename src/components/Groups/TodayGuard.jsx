import React from 'react'
import './TodayGuard.css'
import female from './female.png';
import male from './male.png';

function TodayGuard(props) {
    return (
        <div className="today_guard">
            <div className="today_guard__title">
                <h6>Medicina general 24hs</h6>
                <button type="button" onClick={() => {props.setShowDetails(prev => !prev)}}><i class="bi bi-info-lg"></i></button>
            </div>

            <hr />
            <div className="today_guard__personal">
                <div className="today_guard__photo">
                    <img src={male} alt="foto" />
                </div>
                <div className="today_guard__data">
                    <p><strong>Nicolas Rizzi</strong></p>
                    <p>Médico generalista</p>
                    <p>Teléfono: 0259-45125463</p>
                </div>
            </div>
        </div>
    )
}

export default TodayGuard
