import React, {useState} from 'react'
import '../index.css'
const {v4 : uuidv4} =  require ('uuid');


const Form = ({arrayCitas, setArrayCitas}) => {
    const [objCita, setObjCita] = useState(
        {
          nombre: '',
          apellido: '',
          fecha: '',
          hora: '',
          precio: '',
          razon: ''
        });

    const [error, setError] = useState(false);
        
    
    const actualizarForm = (e)=>{
        setObjCita(
            {
                ...objCita,
                [e.target.name]: e.target.value
            }
        )
    }

    const {nombre, apellido, fecha, hora, precio, razon} = objCita;

    const submitCita = (e) => {
       
       e.preventDefault();
       //validar

       if(nombre.trim() === '' || apellido.trim() === '' || fecha.trim() === '' 
       || hora.trim() === '' || precio.trim() === '' || razon.trim() === '')
       {
           setError(true);
           return;
       }

       

       //Asignar id
       objCita.id = uuidv4();
       console.log(objCita)
       

       //Crear cita
       addCita();
       setError(false);

       //Reiniciar formulario

       setObjCita({
            nombre: '', apellido: '', fecha: '', hora: '', precio: '',razon: ''
        })
    }

    const addCita = () =>{
        setArrayCitas([
            ...arrayCitas,
            objCita
        ]);
        localStorage.setItem("citas", JSON.stringify(arrayCitas) )
    }

    return ( 
        <div className="col-lg-4 content_form">
            <h3 className="text-center">Formulario</h3>
            { error 
                ? <p className="error text-center bg-danger">TODOS LOS CAMPOS SON NECESARIOS</p>
                : null
            }
            <form
                onSubmit={submitCita}
            >
              <div className="form-group">
                <label>Nombre: </label>
                <input name="nombre" type="text" className="form-control " placeholder="Ingrese nombre" 
                onChange={actualizarForm} value={nombre}></input>

                <label>Apellidos: </label>
                <input name="apellido" type="text" className="form-control " placeholder="Ingrese apellidos"
                 onChange={actualizarForm} value={apellido}></input>

                <label>Fecha: </label>
                <input name="fecha" type="date" className="form-control "
                 onChange={actualizarForm} value={fecha}></input>

                <label>Hora: </label>
                <input name="hora" type="time" className="form-control "
                 onChange={actualizarForm} value={hora} ></input>

                <label>Precio: </label>
                <input name="precio" type="number" className="form-control " placeholder="$$$"
                 onChange={actualizarForm} value={precio}></input>

                <label>Razón de consulta: </label>
                <textarea name="razon" className="form-control "
                 onChange={actualizarForm} value={razon}></textarea>
              </div>
              <button type="submit" className="btn btn-info form-control mb-2">Agendar</button>
            </form>
        </div> 
     );
}
 
export default Form;