import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { addInmueble } from '../../api/Rule_auth';

function AddInmueble() {

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await addInmueble(data)
      .then(() => {
        navigate("home");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div className="container">
    <form onSubmit={handleSubmit(onSubmit)} className="containerInput form">
      <label htmlFor="name">Ingrese nombre del Inmueble</label>
      <input
        className="input"
        type="text"
        {...register("nombre", {
          required: true,
        })}
      />
      <br />
      {errors.nombre?.type === "required" && <span>El nombre es requerido</span>}

      <label htmlFor="metros">Cantidad de metros cuadrados</label>
      <input
      
        className="input"
        type="number"
        {...register("metros_cuadrados", {
          required: true,
        })}
      />
      <br />
      {errors.metros_cuadrados?.type === "required" && <span>La cantidad de metros es requerida</span>}

      <label htmlFor="precio">Ingrese una contrasenia</label>
      <input
        className="input"
        type="number"
        {...register("precio_venta", { required: true, minLength: 8 })}
      />
      <br />
      {errors.precio_venta?.type === "required" && <span>El precio es requerido</span>}

      
      <input type="submit" className="btnRegister"  />
    </form>
  </div>
  )
}

export default AddInmueble