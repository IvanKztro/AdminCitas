import React, {Fragment, useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

//componentes
import Form from './components/Form'
import ListaCitas from './components/ListaCitas'

function App() {

  let citasIniciales = JSON.parse(localStorage.getItem('citas'));

  if(!citasIniciales)
  citasIniciales = []

  const [arrayCitas, setArrayCitas] = useState(citasIniciales);

  useEffect( () => {
    if(citasIniciales)
      localStorage.setItem("citas", JSON.stringify(arrayCitas));
    else
    localStorage.setItem("citas", JSON.stringify([]));
    //localStorage.setItem("citas", JSON.stringify(arrayCitas));
    // let arrayCitasLS = JSON.parse(localStorage.getItem('citas'));
    // console.log("arrayCitasLS");
    // console.log(arrayCitasLS);
    // setArrayCitas(arrayCitasLS);
    // console.log("arrayCitas");
    // console.log(arrayCitas);
    console.log("cambiiooo");
  },[arrayCitas, citasIniciales]);

  return (
    <Fragment>
      <div className="nav"><center><img alt="Vue logo" src={logo} style={{height: "4.5rem"}}></img></center></div>
      <div className="container body">
        

        <div className=" row col-lg-12  py-3 px-3 ">

          <Form 
            arrayCitas = {arrayCitas}
            setArrayCitas = {setArrayCitas}
          />
          <ListaCitas
            arrayCitas = {arrayCitas}
            setArrayCitas = {setArrayCitas}
          />
         

        </div>

      </div>
        
        
    </Fragment>
  );
}

export default App;
