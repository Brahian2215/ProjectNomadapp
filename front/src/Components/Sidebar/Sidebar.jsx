/* eslint-disable react/prop-types */
import { MdExplore, MdQuiz } from "react-icons/md";
import { BsQuestionCircle } from "react-icons/bs";
import { AiFillNotification, AiOutlineSwapLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaBook, FaHome, FaUserEdit } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { FaArrowTrendUp } from "react-icons/fa6";
import logo from '../../assets/nomadapp.png'
import './Sidebar.css'

// Componente reutilizable para los elementos del menú
const MenuItem = ({ icon, text, link }) => (
  <li className="listItem">
    <Link to={link} className="menuLink flex">
      {icon}
      <span className="smallText">{text}</span>
    </Link>
  </li>
);

const Sidebar = () => {
  return (
    <div className="sideBar grid">
      <div className="logoDiv flex">
        <img src={logo} alt="Nomadapp Logo" />
      </div>

      <nav className="menuDiv">
        <h3 className="divTitle">MENÚ</h3>
        <ul className="menuLists grid">
          <MenuItem icon={<FaHome className="icon" />} text="Inicio" link="/" />
          <MenuItem
            icon={<FaBook className="icon" />}
            text="Mis Cursos"
            link="/cursos"
          />
          <MenuItem
            icon={<MdQuiz className="icon" />}
            text="Exámenes"
            link="/examenes"
          />
          <MenuItem
            icon={<MdExplore className="icon" />}
            text="Explorar Cursos"
            link="/explorar"
          />
        </ul>
      </nav>

      <nav className="settingsDiv">
        <h3 className="divTitle">AJUSTES</h3>
        <ul className="menuLists grid">
          <MenuItem
            icon={<FaUserEdit className="icon" />}
            text="Cuenta"
            link="/cuenta"
          />
          <MenuItem
            icon={<FaArrowTrendUp className="icon" />}
            text="Clasificación"
            link="/clasificacion"
          />
          <MenuItem
            icon={<AiFillNotification className="icon" />}
            text="Novedades"
            link="/novedades"
          />
          <MenuItem
            icon={<GiReceiveMoney className="icon" />}
            text="Donar"
            link="/donar"
          />
        </ul>
      </nav>

      <Link to={"/"}>
        <button className="btnl flex">
          <AiOutlineSwapLeft className="icon" />
          <span>Cerrar sesión</span>
        </button>
      </Link>

      <div className="sideBarCard">
        <BsQuestionCircle className="icon" />
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <h3>Ayuda</h3>
          <p>
            Si tiene problemas en Nomadapp, contáctenos si tiene más preguntas.
          </p>
          <button className="btn">Contactar</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
