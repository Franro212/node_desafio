import "./log.css";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { iniciarSesion } from "../../api/Rule_auth";

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState:{ errors },
  } = useForm();

  const onSubmit = async (data) => {
    await iniciarSesion(data)
      .then(() => {
        navigate("/Home");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Iniciar sesion</h2>
        <div className="containerInput  ">

        <label htmlFor="email">Email</label>
        <input
          className="input"
          type="email"
          {...register("email", {
              required: true,
            })}
            />
        <br />
        {errors.email?.type === "required" && <span>Email is required</span>}
        <label>Password</label>
        <input
          className="input"
          type="password"
          {...register("password", { required: true, minLength: 8 })}
          />
        {errors.password ==="required" && <span>Password is required</span>}
        <input className="inputBtn" value="Enviar" type="submit" />
        <Link to={"/register"} >
          <p>Registro</p> 
        </Link>
          </div>
      </form>
    </div>
  );
}

export default Login;
