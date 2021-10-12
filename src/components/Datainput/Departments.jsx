import React from 'react'
import './Departments.css'

function Departments(props) {
    return (
        <div className="departments">
            <div className="departments_title">
                <h6>Departamentos</h6>
                <button type="button" onClick={() => { props.setShowDepForm(prev => !prev) }}><i class="bi bi-plus"></i> Nuevo</button>
            </div>
            <hr />
            <div className="departments_table">
                <table class="table">
                    <tbody>
                        <tr>
                            <td>DAM</td>
                            <td className="department_edit">
                                <button type="button"  onClick={() => { props.setShowDepForm(prev => !prev) }}><i class="bi bi-pencil-square"></i></button>
                                <button type="button"  onClick={() => { props.setShowConfirmDel(prev => !prev) }}><i class="bi bi-trash"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>Enfermería</td>
                            <td className="department_edit">
                                <button type="button" onClick={() => { props.setShowDepForm(prev => !prev) }}><i class="bi bi-pencil-square"></i></button>
                                <button type="button" onClick={() => { props.setShowConfirmDel(prev => !prev) }}><i class="bi bi-trash"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>Choferes</td>
                            <td className="department_edit">
                                <button type="button" onClick={() => { props.setShowDepForm(prev => !prev) }}><i class="bi bi-pencil-square"></i></button>
                                <button type="button" onClick={() => { props.setShowConfirmDel(prev => !prev) }}><i class="bi bi-trash"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Departments
