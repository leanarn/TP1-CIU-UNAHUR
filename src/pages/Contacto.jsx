import { useState } from "react";
import Navbar from "../componentes/Navbar";

export default function Contacto(){
    const [formulario, setFormulario] = useState({
        nombreApellido: "",
        email: "",
        telefono: "",
        mensaje: ""
    })
    const manejarCambios = (e) =>{
        const{name, value} = e.target;
        setFormulario({
            ...formulario, 
            [name]: value
        })
    }
    const manejarEnvio = (e) =>{
<<<<<<< HEAD
        e.preventDefault();
        console.log(formulario)
=======
>>>>>>> 54639645848096cfda3153fa02c747dec78dbde4
        alert("Gracias por tu mensaje!")
    }
    return(
        <div>
            <Navbar desactivado={true}/>
            <div className="container"> 
                <div className="row"> 
                    <div className="col-sm p-4"> 
                        <h2 style={{color:"#381f18"}}>Podes contactarnos llamando al 011-2066-1958, nos interesa tu opinion!</h2>
                        <h3 style={{fontSize:"1.3rem", color:"#C88141"}}>Comuniquese tambien con nosotros completando el siguiente formulario:</h3>
                    </div>
                    <form className="col-sm p-4" onSubmit={manejarEnvio}> 
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">Nombre y Apellido</label>
                            <input name="nombreApellido" value={formulario.nombreApellido} onChange={manejarCambios} type="text" className="form-control" id="formGroupExampleInput" required/>
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="formGroupExampleInput2">Telefono</label>
                            <input name="telefono" value={formulario.telefono} onChange={manejarCambios} type="number" className="form-control" id="formGroupExampleInput2"/>
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="formGroupExampleInput">E-Mail</label>
                            <input name="email" value={formulario.email} onChange={manejarCambios} type="email" className="form-control" id="formGroupExampleInput"/>
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="formGroupExampleInput">Mensaje</label>
                            <textarea name="mensaje" value={formulario.mensaje} onChange={manejarCambios} type="text" className="form-control" id="formGroupExampleInput" required/>
                        </div>
                        <button className="btn btn-primary btn-sm mt-3" type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </div> 
    )
}