import Navbar from "../componentes/Navbar";

export default function Contacto(){
    const manejarEnvio = (e) =>{
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
                        <div class="form-group">
                            <label for="formGroupExampleInput">Nombre y Apellido</label>
                            <input type="text" class="form-control" id="formGroupExampleInput" required/>
                        </div>
                        <div class="form-group mt-3">
                            <label for="formGroupExampleInput2">Telefono</label>
                            <input type="number" class="form-control" id="formGroupExampleInput2"/>
                        </div>
                        <div class="form-group mt-3">
                            <label for="formGroupExampleInput">E-Mail</label>
                            <input type="email" class="form-control" id="formGroupExampleInput"/>
                        </div>
                        <div class="form-group mt-3">
                            <label for="formGroupExampleInput">Mensaje</label>
                            <textarea type="text" class="form-control" id="formGroupExampleInput" required/>
                        </div>
                        <button className="btn btn-primary btn-sm mt-3" type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </div> 
    )
}