import React from 'react'
import PropTypes from 'prop-types';

const Cita = ({cita, eliminarCita}) => (
        <div className='cita'>
        <p>Estudiante: <span>{cita.estudiante}</span> </p>
        <p>Encargado: <span>{cita.Encargado}</span> </p>
        <p>Fecha: <span>{cita.fecha}</span> </p>
        <p>Hora: <span>{cita.hora}</span> </p>
        <p>Sintomas: <span>{cita.sintomas}</span> </p>
        <button onClick={() => eliminarCita(cita.id)} className={'button eliminar u-full-width'} >
            Eliminar &times;
        </button>
        </div>  
    );

 
Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}

export default Cita;