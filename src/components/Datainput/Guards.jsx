import React from 'react'
import './Guards.css'

function Guards(props) {
    return (
        <div className="guards">
            <div className="guards_title">
                <h6>Guardias - Turnos</h6>
                <button type="button" onClick={() => { props.setShowGuardForm(prev => !prev) }}><i class="bi bi-plus"></i> Nuevo</button>
            </div>
            <hr />
            <div className="guards_table">
                <table class="table">
                    <tbody>
                        <tr>
                            <td>Guardia 24hs</td>
                            <td className="guards_edit">
                                <button type="button"  onClick={() => { props.setShowGuardForm(prev => !prev) }}><i class="bi bi-pencil-square"></i></button>
                                <button type="button"  onClick={() => { props.setShowConfirmDel(prev => !prev) }}><i class="bi bi-trash"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>Constatación óbito</td>
                            <td className="guards_edit">
                                <button type="button"  onClick={() => { props.setShowGuardForm(prev => !prev) }}><i class="bi bi-pencil-square"></i></button>
                                <button type="button"  onClick={() => { props.setShowConfirmDel(prev => !prev) }}><i class="bi bi-trash"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>Derivación</td>
                            <td className="guards_edit">
                                <button type="button"  onClick={() => { props.setShowGuardForm(prev => !prev) }}><i class="bi bi-pencil-square"></i></button>
                                <button type="button"  onClick={() => { props.setShowConfirmDel(prev => !prev) }}><i class="bi bi-trash"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Guards
