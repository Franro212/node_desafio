import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { addInmueble } from '../../api/Rule_auth';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddInmueble({handleClose, show}) {
  
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await addInmueble(data)
      .then(() => {
        alert("Su registro de realizado con exito")
        navigate("/home");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (

    <div>
    
    <Modal show={show} onHide={handleClose}>
    <Modal.Body>
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <label htmlFor="name">Ingrese nombre del Inmueble</label>
      <input
        className="input"
        type="text"
        {...register("nombre", {
          required: true})}
      />
      <br />
      {errors.nombre?.type === "required" && <span>El nombre es requerido</span>}

      <label htmlFor="metros">Cantidad de metros cuadrados</label>
      <input
      
        className="input"
        type="number"
        {...register("metros_cuadrados", {
          required: true})}
      />
      <br />
      {errors.metros_cuadrados?.type === "required" && <span>La cantidad de metros es requerida</span>}

      <label htmlFor="precio">Precio de venta</label>
      <input
        className="input"
        type="number"
        {...register("precio_venta", { required: true})}
      />
      <br />
      {errors.precio_venta?.type === "required" && <span>El precio es requerido</span>}
      <label htmlFor="ciudad">Ciudad</label>
      <input
        className="input"
        type="text"
        {...register("ciudad", { required: true})}
      />
      <br />
      {errors.ciudad?.type === "required" && <span>La ciudad es requerida</span>}
      <label htmlFor="direccion">Direccion</label>
      <input
        className="input"
        type="text"
        {...register("direccion", { required: true})}
      />
      <br />
      {errors.direccion?.type === "required" && <span>La direccion es requerida</span>}

      
      <input type="submit" value="Registrar" className="btnRegister"  />
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </form>  
    </Modal.Body>
  </Modal>
  </div>
  )
}




export default AddInmueble