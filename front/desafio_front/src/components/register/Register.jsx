import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { nweUser } from "../../api/Rule_auth";
import "./register.css";

function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await nweUser(data)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} className="containerInput form">
        <label htmlFor="nombre">Ingrese su nombre y apellido</label>
        <input
          className="input"
          placeholder="Nombre completo"
          type="text"
          {...register("nombre", {
            required: true,
          })}
        />

        <label htmlFor="email">Ingrese su correo electronico</label>
        <input
          placeholder="Email"
          className="input"
          type="email"
          {...register("email", {
            required: true,
          })}
        />

        <label htmlFor="password">Ingrese una contrasenia</label>
        <input
          className="input"
          type="password"
          {...register("password", { required: true, minLength: 8 })}
        />

        <select className="input" name="Tipo de usuario">
          <option>Seleccione tipo de usuario</option>
          <option
            {...register("tipo_usuario", {
              required: true,
            })}
            value="1"
          >
            Tipo 1
          </option>
          <option
            value="2"
            {...register("tipo_usuario", {
              required: true,
            })}
          >
            Tipo 2
          </option>
          <option
            value="3"
            {...register("tipo_usuario", {
              required: true,
            })}
          >
            Tipo 3
          </option>
        </select>
        <input type="submit" className="btnRegister" name="" id="" />
      </form>
    </div>
  );
}

export default Register;
