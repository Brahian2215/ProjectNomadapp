import { Link } from "react-router-dom";
import { FaAddressCard, FaMapMarkerAlt, FaPhoneSquareAlt, FaUserCheck, FaUserEdit, FaUserShield } from "react-icons/fa";
import { BsFillCreditCard2FrontFill, BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";
import '../css/Register.css'
import video from "../assets/video2.mp4";
import logo from "../assets/nomadapp.png";
import { IoCalendarNumberSharp } from "react-icons/io5";

const Register = () => {
  return (
    <div className="registerPage flex">
      <div className="container flex">
        <div className="videoDivReg">
          <video src={video} autoPlay muted loop></video>

          <div className="textDiv">
            <h2 className="titleReg">
              Descubre la divulgación del conocimiento
            </h2>
            <p>¡Únete a nuestra comunidad!</p>
          </div>

          <div className="footerDivReg flex">
            <span className="text">¿Ya tienes una cuenta?</span>
            <Link to={"/login"}>
              <button className="btn">Ingresar</button>
            </Link>
          </div>
        </div>

        <div className="formDivReg flex">
          <div className="headerDiv">
            <Link to={"/"}>
              <img src={logo} alt="Logo image" />
            </Link>
            <h3>¡Déjanos conocerte!</h3>
          </div>

          <form action="" className="formReg flex">
            <div className="inputDivReg">
              <label htmlFor="name">Nombre</label>
              <div className="inputReg flex">
                <FaUserShield className="icon" />
                <input type="text" id="name" placeholder="Ingrese nombre" />
              </div>
            </div>

            <div className="inputDivReg">
              <label htmlFor="lastname">Apellido</label>
              <div className="inputReg flex">
                <FaUserEdit className="icon" />
                <input
                  type="text"
                  id="lastname"
                  placeholder="Ingrese apellido"
                />
              </div>
            </div>

            <div className="inputDivReg">
              <label htmlFor="typeDni">Tipo de documento</label>
              <div className="inputReg flex">
                <FaAddressCard className="icon" />
                <select id="typeDni" className="customSelect" defaultValue="">
                    <option value="" disabled>Selecciona...</option>
                    <option value="cedula">Cédula</option>
                    <option value="tarjeta">Tarjeta de Identidad</option>
                </select>
              </div>
            </div>

            <div className="inputDivReg">
              <label htmlFor="dni">Número de documento</label>
              <div className="inputReg flex">
                <BsFillCreditCard2FrontFill className="icon" />
                <input type="text" id="city" placeholder="Ingrese documento" />
              </div>
            </div>

            <div className="inputDivReg">
              <label htmlFor="date">Fecha de nacimiento</label>
              <div className="inputReg flex">
                <IoCalendarNumberSharp className="icon" />
                <input type="date" id="date" />
              </div>
            </div>

            <div className="inputDivReg">
              <label htmlFor="postal">Código postal</label>
              <div className="inputReg flex">
                <FaMapMarkerAlt className="icon" />
                <input type="text" id="postal" placeholder="Ingrese código postal" />
              </div>
            </div>

            <div className="inputDivReg">
              <label htmlFor="phone">Teléfono</label>
              <div className="inputReg flex">
                <FaPhoneSquareAlt className="icon" />
                <input
                  type="text"
                  id="phone"
                  placeholder="Ingrese Teléfono "
                />
              </div>
            </div>

            <div className="inputDivReg">
              <label htmlFor="role">Rol</label>
              <div className="inputReg flex">
                <FaUserCheck className="icon" />
                <select id="role" className="customSelect" defaultValue="">
                    <option value="" disabled>Selecciona...</option>
                    <option value="estudiante">Estudiante</option>
                    <option value="admin">Administrador</option>
                </select>
              </div>
            </div>

            <div className="inputDivReg">
              <label htmlFor="email">Correo</label>
              <div className="inputReg flex">
                <MdMarkEmailRead className="icon" />
                <input type="email" id="email" placeholder="Ingrese Correo" />
              </div>
            </div>

            <div className="inputDivReg">
              <label htmlFor="password">Contraseña</label>
              <div className="inputReg flex">
                <BsFillShieldLockFill className="icon" />
                <input
                  type="password"
                  id="password"
                  placeholder="Ingrese clave"
                />
              </div>
            </div>

            <button type="submit" className="btn flex">
              <span>Registrarse</span>
              <AiOutlineSwapRight className="icon" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
