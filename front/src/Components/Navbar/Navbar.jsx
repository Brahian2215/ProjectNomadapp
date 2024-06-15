import './Navbar.css'
import logo from '../../assets/nomadapp.png'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    /* Contenedor principal de la barra de navegación */
    <div className="nav">
        
      {/* Contenedor del logo */}
      <Link to="/" className="navLogo"> 
        <img src={logo} alt="Logo Nomadapp" /> 
      </Link>

      {/* Lista de elementos del menú de navegación */}
      <ul className="navMenu">
        <li><Link to="/cursos">Cursos</Link></li> 
        <li><Link to="/nosotros">Nosotros</Link></li> 
        <li><Link to="/donar">Donar</Link></li> 
        <li>
            <Link to={'/login'}>
                <button className='btnNav'>Acceder</button>
            </Link>
        </li>
      </ul>

    </div>
  );
};

export default Navbar;