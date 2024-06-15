import { MdOutlineNotificationsNone } from "react-icons/md";
import { TbMessageCircle } from "react-icons/tb";
import { BsArrowRightShort } from "react-icons/bs";
import user from "../../assets/user.png";
import video from "../../assets/video1.mp4";
import "./UserDashTop.css";

const UserDashTop = () => {
  return (
    <div className="topSection">
      <div className="headerSection">
        <div className="title">
          <h1>¡Bienvenido a Nomadapp!</h1>
          <p>Hola Nómada, empieza tu viaje de aprendizaje</p>
        </div>

        <div className="userTop flex">
          <TbMessageCircle className="icon" />
          <MdOutlineNotificationsNone className="icon" />
          <div className="userImage">
            <img src={user} alt="User Image" />
          </div>
        </div>
      </div>

      <div className="cardSection">
        <div className="rightCard">
          <h1>La Educación es el camino</h1>
          <p>Aprende algo nuevo cada día con nuestros cursos gratuitos</p>

          <div className="buttons flex">
            <button className="btnTop">Explorar</button>
            <button className="btnTop transparent">Más Populares</button>
          </div>

          <div className="videoDivDash">
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>

        <div className="leftCard">
          <div className="mainCardTop">
            <div className="textTop">
              <h1>Ruta de Cursos</h1>

              <div className="dashCardTop">
                <span>
                  Cursos en Desarrollo <br /> <small>7 Cursos</small>
                </span>
                <span>
                  Cursos Terminados <br /> <small>3 Cursos</small>
                </span>
                <span>
                  Cursos Favoritos <br /> <small>3 Cursos</small>
                </span>
              </div>

              <div className="btnTopRoute">
                <button>
                  {"Mis cursos"}
                  <BsArrowRightShort className="icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashTop;
