import React from 'react'
import './Groups.css'
import { Link } from 'react-router-dom'

function Groups() {
    return (
        <div className="home__groups">
            <div className="home__groups_title">
                <h6>Instituciones</h6>
                <Link to="/home">
                    <button type="button"><i class="bi bi-folder-symlink"></i></button>
                </Link>
            </div>
            <hr />
            <p className="home__groups_title_last"><i>Últimas creadas</i></p>
            <div className="home_groups_message">
            <button type="button"><i class="bi bi-arrow-right-circle"></i></button>
                <div>
                    <p><strong>Nicolas Rizzi - 06/10/21</strong></p>
                    <p>Hospital Rogelio Cortizo</p>
                </div>
            </div>
            <div className="home_groups_message">
            <button type="button"><i class="bi bi-arrow-right-circle"></i></button>
                <div>
                    <p><strong>Nicolas Rizzi - 05/10/21</strong></p>
                    <p>Dr. Ramón Carrillo Hospital Zonal</p>
                </div>
            </div>
            <div className="home_groups_message">
            <button type="button"><i class="bi bi-arrow-right-circle"></i></button>
                <div>
                    <p><strong>Sergio Sol - 04/10/21</strong></p>
                    <p>Hospital Dr. Pedro Moguillansky</p>
                </div>
            </div>
        </div>
    )
}

export default Groups
