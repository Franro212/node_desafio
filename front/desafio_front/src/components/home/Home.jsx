import React, { useState } from 'react'

import Button from 'react-bootstrap/esm/Button';
import { Link,} from 'react-router-dom';



import AddInmueble from '../addInmueble/AddInmueble';
import './home.css'

function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  


  
  
  return (
    <div className='containerFlex'>
           <AddInmueble handleClose={handleClose} show={show}/>
         <div className='containerHome'>
           <Button className='btn' onClick={handleShow}>Nuevo ingreso</Button>
            <Link to={"/catalogo"}><Button className='btn'>Catalogo de inmuebles</Button></Link> 
            <Button className='btn'>click</Button>
            <Button className='btn'>click</Button>
         </div>
    </div>
  )
}

export default Home