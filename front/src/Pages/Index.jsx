import { useEffect, useState } from "react";
import BgIndex from "../Components/BgIndex/BgIndex";
import SliderIndex from "../Components/SliderIndex/SliderIndex";
import Navbar from "../Components/Navbar/Navbar";

//Array de objetos que contiene la información a mostrar en el slider.
const sliderData = [
    { text1: "Nomadapp", text2: "Divulgando el conocimiento" },
    { text1: "Educación para todos", text2: "Cursos libres" },
    { text1: "Refuerza tus saberes", text2: "Material de apoyo" },
  ];

//Página de inicio al visitar el sitio web
const Index = () => {

  //Estado local sliderCount, inicializado en 0, que indica el índice del slider actual.
  const [sliderCount, setSliderCount] = useState(0);

  //Estado local playStatus, inicializado en false, que indica si el video de fondo debe reproducirse.
  const [playStatus, setPlayStatus] = useState(false);

  // Utilizamos useEffect para crear un temporizador que cambia el slider cada 4 segundos.
  useEffect(() => {

    const id = setTimeout(() => {
      // Actualizamos sliderCount, si es 2 (último índice), reiniciamos a 0, de lo contrario incrementamos en 1.
      setSliderCount((count) => (count === 2 ? 0 : count + 1));
    }, 4000);

    // Limpiamos el temporizador cuando el componente se desmonta o cuando sliderCount cambia.
    return () => clearTimeout(id);

  }, [sliderCount]); //El efecto se ejecuta cada vez que sliderCount cambia.


  //Renderizamos los componentes BgIndex, Navbar y SliderIndex que conforman la página index.
  return (
    <div>
      {/* Renderizamos BgIndex pasando playStatus y sliderCount como props. */}
      <BgIndex playStatus={playStatus} sliderCount={sliderCount} />

      {/* Renderizamos Navbar. */}
      <Navbar />

      {/* Renderizamos SliderIndex pasando varias props, incluyendo el estado del slider y la función para actualizarlo. */}
      <SliderIndex
        setPlayStatus={setPlayStatus}
        sliderData={sliderData[sliderCount]}
        sliderCount={sliderCount}
        setSliderCount={setSliderCount}
        playStatus={playStatus}
      />
    </div>
  );
};

export default Index;