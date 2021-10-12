import React, { useState } from 'react'
import './GroupsContent.css'
import Hospitals from './Hospitals';
import TodayGuard from './TodayGuard'
import GuardDetails from './GuardDetails';
import MonthlyGuards from './MonthlyGuards';

function GroupsContent(props) {
    const [showHospitals, setShowHospitals] = useState(false)
    const [showDetails, setShowDetails] = useState(false)
    const [showMonthlyGuards, setShowMonthlyGuards] = useState(false)

    return (
        <div className="groups__content">
            {showHospitals ? <Hospitals setShowHospitals={setShowHospitals} /> : null}
            {showDetails ? <GuardDetails setShowDetails={setShowDetails} /> : null}
            {showMonthlyGuards ? <MonthlyGuards setShowMonthlyGuards={setShowMonthlyGuards} /> : null}

            <div className="groups__content_aside">
                <div className="groups__content_aside__content">
                    <h6>Instituciones</h6>
                    <hr />
                    <div className="linked_groups">
                        <button type="button">Hospital Rogelio Cortizo</button>
                        <button type="button">Dr. Ramón Carrillo Hospital Zonal</button>
                        <button type="button">Hospital Dr. Pedro Moguillansky</button>
                    </div>
                    <hr />
                    <div className="group_monthly_guards">
                        <button type="button">Planificación mensual</button>
                        <button type="button" onClick={() => {setShowMonthlyGuards(prev => !prev)}}>Tus guardias</button>
                    </div>
                </div>
            </div>

            <div className="groups_content_current_guards">
                <div className="groups__content__title">
                    <h6>Hospital Rogelio Cortizo - <strong>Guardias miércoles 16 de octubre</strong></h6>
                    
                </div>
                <hr />
                <div className="groups__content_today_guards">
                    <TodayGuard setShowDetails={setShowDetails} />
                    <TodayGuard setShowDetails={setShowDetails} />
                    <TodayGuard setShowDetails={setShowDetails} />
                    <TodayGuard setShowDetails={setShowDetails} />
                    <TodayGuard setShowDetails={setShowDetails} />
                    <TodayGuard setShowDetails={setShowDetails} />
                    <TodayGuard setShowDetails={setShowDetails} />
                    <TodayGuard setShowDetails={setShowDetails} />
                    <TodayGuard setShowDetails={setShowDetails} />
                    <TodayGuard setShowDetails={setShowDetails} />
                </div>
            </div>
        </div>
    )
}

export default GroupsContent
