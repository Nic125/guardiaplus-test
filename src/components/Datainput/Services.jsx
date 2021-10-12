import React from 'react'
import './Services.css'

function Services(props) {
    return (
        <div className="services">
            <div className="services_title">
                <h6>Servicios</h6>
                <button type="button" onClick={() => { props.setShowServForm(prev => !prev) }}><i class="bi bi-plus"></i> Nuevo</button>
            </div>
            <hr />
            <div className="services_table">
                <table class="table">
                    <tbody>
                        <tr>
                            <td>Medicina Gral.</td>
                            <td className="services_edit">
                                <button type="button"  onClick={() => { props.setShowServForm(prev => !prev) }}><i class="bi bi-pencil-square"></i></button>
                                <button type="button"  onClick={() => { props.setShowConfirmDel(prev => !prev) }}><i class="bi bi-trash"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>Cirugía</td>
                            <td className="services_edit">
                                <button type="button"  onClick={() => { props.setShowServForm(prev => !prev) }}><i class="bi bi-pencil-square"></i></button>
                                <button type="button"  onClick={() => { props.setShowConfirmDel(prev => !prev) }}><i class="bi bi-trash"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>Pediatría</td>
                            <td className="services_edit">
                                <button type="button"  onClick={() => { props.setShowServForm(prev => !prev) }}><i class="bi bi-pencil-square"></i></button>
                                <button type="button"  onClick={() => { props.setShowConfirmDel(prev => !prev) }}><i class="bi bi-trash"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Services
