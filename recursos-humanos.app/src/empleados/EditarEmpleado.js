import React, { useEffect, useState } from 'react'
import { Footer } from '../plantilla/Footer'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

export default function EditarEmpleado() {

    const urlBase = "http://localhost:8080/rh-app/empleados";
    
    let navegacion = useNavigate();

    const {id} = useParams();

    const[empleado, setEmpleado]=useState({
        nombre:"",
        departamento:"",
        sueldo:""
    })

    const{nombre, departamento, sueldo} = empleado

    useEffect(() => {
        cargarEmpleado();
    },[])

    const cargarEmpleado = async () => {
        const resultado = await axios.get(`${urlBase}/${id}`);
        setEmpleado(resultado.data);
    }
    
    const onInputChange = (e) => {
        //spread operator ... (expandir los atributos)
        setEmpleado({...empleado, [e.target.name]: e.target.value})
    }

    const onSubmit = async (e) =>{
        e.preventDefault();
        await axios.put(`${urlBase}/${id}`, empleado);
        // redirigimos a la pantalla de inicio
        navegacion('/')
    }

  return (
    <div className='conatiner'>
        <div className='container text-center' style={{margin: "30px"}}>
            <h3>Editar empleados</h3>
        </div>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" 
                    id="nombre" name='nombre' required={true}
                    value={nombre} onChange={(e) => onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="departamento" className="form-label">Departamento</label>
                    <input type="text" className="form-control" 
                    id="departamento" name='departamento' required={true}
                    value={departamento} onChange={(e) => onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="sueldo" 
                        className="form-label">Sueldo</label>
                    <input type="number" step="any" className="form-control" 
                    id="sueldo" name='sueldo' required={true}
                    value={sueldo} onChange={(e) => onInputChange(e)}/>
                </div>
                <div className='text-center'>
                    <button type="submit" 
                        className='btn btn-outline-warning btn-sm me-3'>Guardar</button>
                    <a href='/' type="submit" className='btn btn-outlin btn-sm'style={{background: "#350a06", color: "#EDE8DF"}}>Regresar</a>
                </div>
        </form>
        <Footer />
    </div>
  )
}
