import React from 'react';
import Cita from './Cita'

const Citas = ({arrayCitas, setArrayCitas}) => {

    const deleteCita = (id)=>{
        const newArray = arrayCitas.filter(cita => cita.id !== id);
        setArrayCitas(newArray)

    }


    return ( 
        <div className="col-lg-8 content_citas">
            <h3 className="text-center" >Citas agendadas</h3>
            
            {
            arrayCitas.length === 0
            ?
            <div className="col-12  py-1"><h3 className="text-center">No hay citas</h3></div>
            :
            arrayCitas.map( (cita,index) => 
                <Cita
                arrayCitas = {arrayCitas}
                setArrayCitas = {setArrayCitas}
                deleteCita = {deleteCita}
                cita = {cita}
                key = {cita.id}
                />
            )
            }

        </div>
     );
}
 
export default Citas;