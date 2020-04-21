import React from 'react';

const Cita = ({cita, deleteCita}) => {

    return ( 
        <div className="mb-3">
            <div className="row d-flex justify-content-between align-items-center cita_div p-3 mx-1 mb-1 " >
                <div>{cita.nombre} {cita.apellido}</div>
                <div>{cita.fecha} {cita.hora}</div>
                <div>{cita.razon} ${cita.precio}</div>
                <div>
                    <button type="button" className="btn btn-danger btn-sm" onClick={()=> deleteCita(cita.id)}>X</button>
                </div>
            </div>
        </div>
     );
}
 
export default Cita;