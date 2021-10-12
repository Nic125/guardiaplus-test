import React from 'react'
import Day from './Day'
import './PlanningMonth.css'

function PlanningMonth() {
    return (
        <div className="planning_month">
            <div className="planning_month_title">
                <h6>Octubre de 2021 - <strong>Constatación óbito</strong> - Hospital Rogelio Cortizo</h6>
            </div>
            <div className="planning_month__days">
                <Day day={"01"} name={"VIE"} />
                <Day day={"02"} name={"SÁB"} />
                <Day day={"03"} name={"DOM"} />
                <Day day={"04"} name={"LUN"} />
                <Day day={"05"} name={"MAR"} />
                <Day day={"06"} name={"MIE"} />
                <Day day={"07"} name={"JUE"} />
                <Day day={"08"} name={"SÁB"} />
                <Day day={"09"} name={"DOM"} />
                <Day day={"10"} name={"LUN"} />
                <Day day={"11"} name={"MAR"} />
                <Day day={"12"} name={"MIE"} />
                <Day day={"13"} name={"JUE"} />
                <Day day={"14"} name={"VIE"} />
                <Day day={"15"} name={"SÁB"} />
                <Day day={"16"} name={"DOM"} />
                <Day day={"17"} name={"LUN"} />
                <Day day={"18"} name={"MAR"} />
                <Day day={"19"} name={"MIE"} />
                <Day day={"20"} name={"JUE"} />
                <Day day={"21"} name={"VIE"} />
                <Day day={"22"} name={"SÁB"} />
                <Day day={"23"} name={"DOM"} />
                <Day day={"24"} name={"LUN"} />
                <Day day={"25"} name={"MAR"} />
                <Day day={"26"} name={"MIE"} />
                <Day day={"27"} name={"JUE"} />
                <Day day={"28"} name={"VIE"} />
                <Day day={"29"} name={"SÁB"} />
                <Day day={"30"} name={"DOM"} />
                <Day day={"31"} name={"LUN"} />
            </div>
        </div>
    )
}

export default PlanningMonth
