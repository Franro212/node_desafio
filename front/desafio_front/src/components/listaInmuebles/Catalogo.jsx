import React, { useEffect, useState } from 'react'

import { listaInmuebles } from '../../api/Rule_auth';
import './lista.css'

function Catalogo() {
    const [inmuebles, setInmuebles] = useState([]);

    const buscarLista = async ()=>{
      await listaInmuebles()
      .then((response)=>{
        setInmuebles(response)
      })
      .catch((error)=>{
        alert(error)
      })
    }
    useEffect (()=>{
        buscarLista()
    }, [])
  
  return (
    <div className='contCatalogo'>
        <h1 className='titulo'>Catalogo de Inmuebles</h1>
        <div className='contenedorCard'>

    {
        inmuebles.map((inmuebles)=>{
            
            return(
                <div className='card'>
                 <p className='titulos'>Nombre de la propiedad</p>
                <p className='datos'>{inmuebles.nombre}</p>
                <p className='titulos'>Metros cuadrados</p>
                <p className='datos'>{inmuebles.metros_cuadrados}</p>
                <p className='titulos'>Ciudad</p>
                <p className='datos'>{inmuebles.ciudad}</p>
                <p className='titulos'>Direccion</p>
                <p className='datos'>{inmuebles.direccion}</p>
                <p className='titulos'>Precio de venta</p>
                <p className='datos'>${inmuebles.precio_venta}</p>




            </div>
        )
    })}



    </div>

    </div>
  )
}

export default Catalogo