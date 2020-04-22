import React from 'react';

const Cita = ({cita, deleteCita}) => {

    return ( 
        <div className="mb-2">
            <div className="row d-flex justify-content-between align-items-center cita_div p-3 mx-1 mb-1 " >
                <div className="col-lg-5">
                   <b>Nombre: </b> {cita.nombre} {cita.apellido}<br/>
                   <b>Motivo: </b>{cita.razon}
                   
                </div>
                <div className="col-lg-4">
                   <b>Fecha: </b> {cita.fecha} <br/>
                   <b>Hora: </b>{cita.hora} hrs
                   
                </div>
                <div className="col-lg-1"> ${cita.precio}</div>
                <div className="col-lg-1  ">
                    <button type="button" className="btn btn-danger btn-sm" onClick={()=> deleteCita(cita.id)}>X</button>
                </div>
            </div>
        </div>
     );
}
 
export default Cita;