import "./listing.css";
import img2 from "../../../Assets/javascript.png";
import img3 from "../../../Assets/react.png";
import img4 from "../../../Assets/node.png";
import angular from "../../../Assets/angular.png";
import photo from "../../../Assets/photo.png";
import eco from "../../../Assets/eco.png";
import { BsArrowRightShort } from "react-icons/bs";

const infoCoursesDash = () => {
  return (
    <div className="infoCourses">

      <div className="topSellers">

        <div className="heading flex">
          <h3>Más Populares</h3>
          <button className="btn flex">
            Ver más <BsArrowRightShort className="icon" />
          </button>
        </div>

        <div className="card flex">
          <div className="users">
            <img src={img3} alt="User image" />
            <img src={img2} alt="User image" />
            <img src={img4} alt="User image" />
          </div>
          <div className="cardText">
            <span>
              Los Nómadas prefieren <br />
              <small>
                30 estudiantes han realizado estos cursos{" "}
                <span className="date">15 días</span>
              </small>
            </span>
          </div>
        </div>
      </div>

      <div className="featuredSellers">
        <div className="heading flex">
          <h3>Cursos Nuevos</h3>
          <button className="btn flex">
            Ver más <BsArrowRightShort className="icon" />
          </button>
        </div>

        <div className="card flex">
          <div className="users">
            <img src={photo} alt="User image" />
            <img src={angular} alt="User image" />
            <img src={eco} alt="User image" />
          </div>
          <div className="cardText">
            <span>
              Aprende nuevos saberes <br />
              <small>
                Descubre 4 increíbles cursos nuevos{" "}
                <span className="date dateNew">30 días</span>
              </small>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default infoCoursesDash;
