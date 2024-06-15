/* eslint-disable react/prop-types */
import "./SliderIndex.css";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FaRegCirclePause, FaRegCirclePlay } from "react-icons/fa6";
import { Link } from "react-router-dom";

// Definimos el componente SliderIndex con las props necesarias.
const SliderIndex = ({
  sliderData, // Datos del slider actual.
  setSliderCount, // Función para actualizar el índice del slider.
  sliderCount, // Índice actual del slider.
  setPlayStatus, // Función para actualizar el estado de reproducción del video.
  playStatus, // Estado actual de reproducción del video.
}) => {

  // Función para renderizar los puntos de navegación.
  const renderDots = () => {
    return [0, 1, 2].map((count) => (
      <li
        key={count}
        onClick={() => setSliderCount(count)}
        className={sliderCount === count ? "sliderDot orange" : "sliderDot"}
      ></li>
    ));
  };

  return (
    <div className="slider">

      {/* Mostramos los textos del slider */}
      <div>
        <p className="sliderText">{sliderData.text1}</p>
        <p className="sliderSubtext">{sliderData.text2}</p>
      </div>

      <Link to={"/register"}>
        {/* Botón que redirige a la página de registro */}
        <button className="sliderBtn">
          ¿Ya tienes una cuenta?
          <IoIosArrowDroprightCircle className="iconIndex" />
        </button>
      </Link>

      <div className="sliderDotPlay">

        {/* Contenedor para los puntos de navegación y el control de reproducción */}
        <ul className="sliderDots">{renderDots()}</ul>

        {/* Control de reproducción: muestra un icono de pausa o reproducción según el estado */}
        <div className="sliderPlay">
          {playStatus ? (
            <FaRegCirclePause
              onClick={() => setPlayStatus(!playStatus)}
              className="iconIndex"
            />
          ) : (
            <FaRegCirclePlay
              onClick={() => setPlayStatus(!playStatus)}
              className="iconIndex"
            />
          )}
          <p>Ver vídeo</p>
        </div>
      </div>
    </div>
  );
};

export default SliderIndex;
