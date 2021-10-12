import React from 'react'
import './Personal.css'

function Personal() {
    return (
        <div className="personal">
            <div className="personal__filter">
                <p>Selecciona el establecimiento y el área para ver el personal asignado</p>
                <hr />
                <select>
                    <option hidden>Selecciona un establecimiento</option>
                    <option>Hospital Rogelio Cortizo</option>
                    <option>Dr. Ramón Carrillo Hospital Zonal</option>
                    <option>Hospital Dr. Pedro Moguillansky</option>
                    <option>Hospital Junín de los Andes</option>
                    <option>Todos</option>
                </select>
                <select>
                    <option hidden>Selecciona un departamento</option>
                    <option>DAM</option>
                    <option>Enfermería</option>
                    <option>Todos</option>
                </select>
                <select>
                    <option hidden>Selecciona un servicio</option>
                    <option>Medicina gral.</option>
                    <option>Cirugía</option>
                    <option>Pediatría</option>
                    <option>Todos</option>
                </select>
            </div>
            <div className="personal__table">
                <table class="table">
                    <tbody>
                        <tr>
                            <td>Nicolas Rizzi</td>
                            <td>Médico generalista</td>
                            <td><i>Admin</i></td>
                            <td className="personal__table__edit"><button type="button"><i class="bi bi-pencil-square"></i></button></td>
                        </tr>
                        <tr>
                            <td>Guadalupe Iglesias</td>
                            <td>Médico generalista</td>
                            <td></td>
                            <td className="personal__table__edit"><button type="button"><i class="bi bi-pencil-square"></i></button></td>
                        </tr>
                        <tr>
                            <td>Sergio Sol</td>
                            <td>Médico generalista</td>
                            <td></td>
                            <td className="personal__table__edit"><button type="button"><i class="bi bi-pencil-square"></i></button></td>
                        </tr>
                        <tr>
                            <td>Paola Aguilar</td>
                            <td>Cirujana</td>
                            <td><i>Admin</i></td>
                            <td className="personal__table__edit"><button type="button"><i class="bi bi-pencil-square"></i></button></td>
                        </tr>
                        <tr>
                            <td>Andrés Digiovanna</td>
                            <td>Pediatra</td>
                            <td></td>
                            <td className="personal__table__edit"><button type="button"><i class="bi bi-pencil-square"></i></button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Personal
