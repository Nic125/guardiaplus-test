import React from 'react'
import './Personal.css'

function Personal(props) {
    return (
        <div className="personal_input">
            <div className="personal_input_title">
                <h6>Personal</h6>
                <button type="button" onClick={() => { props.setShowPerForm(prev => !prev) }}><i class="bi bi-plus"></i> Nuevo</button>
            </div>
            <hr />
            <div className="personal_input_table">
                <table class="table">
                    <tbody>
                        <tr>
                            <td>Nicolás Rizzi</td>
                            <td className="personal_input_edit">
                                <button type="button"  onClick={() => { props.setShowPerForm(prev => !prev) }}><i class="bi bi-pencil-square"></i></button>
                                <button type="button"  onClick={() => { props.setShowConfirmDel(prev => !prev) }}><i class="bi bi-trash"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>Guadalupe Iglesias</td>
                            <td className="personal_input_edit">
                                <button type="button"  onClick={() => { props.setShowPerForm(prev => !prev) }}><i class="bi bi-pencil-square"></i></button>
                                <button type="button"  onClick={() => { props.setShowConfirmDel(prev => !prev) }}><i class="bi bi-trash"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>Sergio Sol</td>
                            <td className="personal_input_edit">
                                <button type="button"  onClick={() => { props.setShowPerForm(prev => !prev) }}><i class="bi bi-pencil-square"></i></button>
                                <button type="button"  onClick={() => { props.setShowConfirmDel(prev => !prev) }}><i class="bi bi-trash"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Personal
