import { Link } from "react-router-dom";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import video from '../assets/video1.mp4'
import logo from '../assets/nomadapp.png'
import '../css/Login.css'
import { MdMarkEmailRead } from "react-icons/md";

const Login = () => {

  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>

          <div className="textDiv">
            <h2 className="title">Acceda a cursos extraordinarios</h2>
            <p>
              No pongas límites <br /> El conocimiento es poder
            </p>
          </div>

          <div className="footerDiv flex">
            <span className="text">¿No tienes una cuenta?</span>
            <Link to={"/register"}>
              <button className="btn">Crear cuenta</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <Link to={"/"}>
              <img src={logo} alt="Logo image" />
            </Link>
            <h3>¡Hola, bienvenido!</h3>
          </div>

          <form action="" className="form">

            <div className="inputDiv">
              <label htmlFor="email">Correo</label>
              <div className="input flex">
                <MdMarkEmailRead className="icon" />
                <input type="email" id="email" placeholder="Ingrese Correo" />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Contraseña</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input
                  type="password"
                  id="password"
                  placeholder="Ingrese Contraseña"
                />
              </div>
            </div>

            <span className="forgotPassword">
              ¿Olvidaste tu contraseña? <a href="">Click aquí</a>
            </span>

            <Link to={"/dashboardUser"}>
              <button type="submit" className="btn flex">
                <span>Iniciar sesión</span>
                <AiOutlineSwapRight className="icon" />
              </button>
            </Link>

            <div className="separator flex">
              <div className="line">
                <hr />
              </div>
              <p>o</p>
              <div className="line">
                <hr />
              </div>
            </div>

            <div className="btnGoogle flex">
              <button className="btn flex">
                <FcGoogle className="icon" />
                <span>Continuar con Google</span>
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
