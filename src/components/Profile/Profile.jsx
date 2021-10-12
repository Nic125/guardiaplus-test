import React, { useState } from 'react'
import './Profile.css'
import female from '../female.png';
import male from '../male.png';
import DeleteHospital from './DeleteHospital';

function Profile() {
    const [showDelHospital, setShowDelHospital] = useState(false)


    return (
        <div className="profile">
            {showDelHospital ? <DeleteHospital setShowDelHospital={setShowDelHospital} /> : null}

            <div className="profile__content">
                <div className="profile__card">
                    <div className="profile__edit">
                        <button type="button">Editar</button>
                    </div>

                    <div className="profile__photo">
                        <div className="profile__image">
                            <img src={male} alt="male" />
                        </div>
                        <label for="file-upload" class="custom-file-upload">
                            <i class="bi bi-camera-fill"></i>
                        </label>
                        <input id="file-upload" type="file" style={{ display: 'none' }} accept="image/*" />

                        <h5>Nicolas Rizzi</h5>
                        <p>Médico generalista</p>
                        <p className="profile_location">Jacobacci, Río Negro</p>
                    </div>
                    <div className="profile__data">
                        <p><strong>Nombre:</strong> Nicolas</p>
                        <p><strong>Apellido:</strong> Rizzi</p>
                        <p><strong>Profesión:</strong> Médico Generalista</p>
                        <p><strong>Legajo:</strong> 6548</p>
                        <p><strong>Hospital:</strong> Rogelio Cortizo</p>
                        <p><strong>Teléfono:</strong> 0294 4584751</p>
                        <p><strong>Dirección:</strong> Martin Coronado 973</p>
                        <p><strong>Localidad:</strong> Jacobacci</p>
                        <p><strong>Fecha de ingreso al sistema:</strong> 05/06/21</p>
                    </div>


                </div>

                <div className="profile__hospitals">
                    <div className="profile__hospitals_table">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Establecimientos vinculados</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Hospital Rogelio Cortizo</td>
                                    <td><button type="button" onClick={() => { setShowDelHospital(prev => !prev) }}><i class="bi bi-x-circle"></i></button></td>
                                </tr>
                                <tr>
                                    <td>Dr. Ramón Carrillo Hospital Zonal</td>
                                    <td><button type="button" onClick={() => { setShowDelHospital(prev => !prev) }}><i class="bi bi-x-circle"></i></button></td>
                                </tr>
                                <tr>
                                    <td>Hospital Dr. Pedro Moguillansky</td>
                                    <td><button type="button" onClick={() => { setShowDelHospital(prev => !prev) }}><i class="bi bi-x-circle"></i></button></td>
                                </tr>
                                <tr>
                                    <td>Hospital Junín de los Andes</td>
                                    <td><button type="button" onClick={() => { setShowDelHospital(prev => !prev) }}><i class="bi bi-x-circle"></i></button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="profile__hospitals_options">
                        <button type="button">Vincular nuevo</button>
                        <button type="button">Crear nuevo establecimiento</button>
                    </div>
                </div>
            </div>
            <div className="profile__monthly_details">

            </div>
        </div>
    )
}

export default Profile
