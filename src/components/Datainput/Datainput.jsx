import React, { useState } from 'react'
import AsideOptions from './AsideOptions'
import './Datainput.css'
import SwitchComponents from './SwitchComponents'
import Services from './Services'
import Guards from './Guards'
import Personal from './Personal'
import Departments from './Departments'
import Hospitals from './Hospitals'
import DepartmentForm from './forms/DepartmentForm'
import ConfirmDelete from './ConfirmDelete'
import ServiceForm from './forms/ServiceForm'
import GuardForm from './forms/GuardForm'
import PersonalForm from './forms/PersonalForm'

function Datainput() {
    const [activeComponent, setActiveComponent] = useState("department")
    const [showInfo, setShowInfo] = useState(false)
    const [showHospitals, setShowHospitals] = useState(false)
    const [showDepForm, setShowDepForm] = useState(false)
    const [showSerForm, setShowServForm] = useState(false)
    const [showGuardForm, setShowGuardForm] = useState(false)
    const [showPerForm, setShowPerForm] = useState(false)
    const [showConfirmDel, setShowConfirmDel] = useState(false)

    return (
        <div className="data_input">

        {showHospitals ? <Hospitals setShowHospitals={setShowHospitals} /> : null}
        {showConfirmDel ? <ConfirmDelete setShowConfirmDel={setShowConfirmDel} /> : null}
        {showDepForm ? <DepartmentForm setShowDepForm={setShowDepForm} /> : null}
        {showSerForm ? <ServiceForm setShowServForm={setShowServForm} /> : null}
        {showGuardForm ? <GuardForm setShowGuardForm={setShowGuardForm} /> : null}
        {showPerForm ? <PersonalForm setShowPerForm={setShowPerForm} /> : null}

            <div className="data_input_aside">
                <div className="data_input_title">
                    <div className="data_input_title_name">
                        <h6>Hospital Rogelio Cortizo</h6>
                        <p>Ingeniero Jacobacci</p>
                        <p>Río Negro</p>
                    </div>
                    <div className="data_input_title_button">
                        <button type="button" onClick={() => {setShowHospitals(prev => !prev)}}><i class="bi bi-arrow-left-right"></i> Cambiar</button>
                    </div>
                    <hr />
                </div>
                <AsideOptions setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
            </div>
            <div className="data_input__content">
                <SwitchComponents active={activeComponent}>
                    <Departments name={'department'} setShowDepForm={setShowDepForm} setShowConfirmDel={setShowConfirmDel} />
                    <Services name={'service'} setShowServForm={setShowServForm} setShowConfirmDel={setShowConfirmDel}  />
                    <Guards name={'guard'} setShowGuardForm={setShowGuardForm} setShowConfirmDel={setShowConfirmDel}  />
                    <Personal name={'personal'} setShowPerForm={setShowPerForm} setShowConfirmDel={setShowConfirmDel}  />
                </SwitchComponents>
            </div>

        </div>
    )
}

export default Datainput
