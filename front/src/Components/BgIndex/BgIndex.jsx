/* eslint-disable react/prop-types */
import "./BgIndex.css";
import slide1 from "../../assets/slide1.png";
import slide2 from "../../assets/slide2.png";
import slide3 from "../../assets/slide3.png";
import videoIndex from "../../assets/video.mp4";

// Componente funcional del fondo de la página de inicio. Recibe dos propos.
// `playStatus` es un booleano que indica si se debe reproducir el video de fondo.
// `sliderCount` es un número que indica cuál imagen del slider debe mostrarse.
const BgIndex = ({ playStatus, sliderCount }) => {
    
  //Almacenamos las imágenes de las diapositivas en un array para facilitar el acceso.
  const slides = [slide1, slide2, slide3];

  //Si `playStatus` es verdadero renderizamos el video.
  //Si `playStatus es falso renderizamos una imagen de fondo correspondiente al valor de `sliderCount`.
  return playStatus ? (
    <video className="background fade-in" autoPlay loop muted>
      <source src={videoIndex} type="video/mp4" />
    </video>
  ) : (
    <img
      src={slides[sliderCount]}
      className="background fade-in"
      alt={`Slider ${sliderCount + 1}`}
    />
  );
};

export default BgIndex;
