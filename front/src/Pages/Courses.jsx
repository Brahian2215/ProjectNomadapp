import CoursesIndex from "../Components/CoursesIndex/CoursesIndex";
import Navbar from "../Components/Navbar/Navbar";
import imgHtml from "../assets/html.png";
import imgCss from "../assets/css.png";
import imgJs from "../assets/javascript.png";
import imgReact from "../assets/react.png";
import imgNode from "../assets/node.png";
import imgAngular from "../assets/angular.png";
import imgPhoto from "../assets/photo.png";
import imgEco from "../assets/eco.png";
import imgPodcast from "../assets/podcast.png";
import imgFisica from "../assets/fisica.png";
import BgCourses from "../Components/BgCourses/BgCourses";
import { useEffect } from "react";

const Courses = () => {

    const marginBelowNavbar = 35;

    useEffect(() => {
      const handleScroll = () => {
        const cards = document.querySelectorAll(".wrapper");
        const navbar = document.querySelector(".nav");
        const navbarHeight = navbar.offsetHeight;
  
        cards.forEach((card) => {
          const cardRect = card.getBoundingClientRect();
          const cardTop = cardRect.top;
  
          if (cardTop < navbarHeight + marginBelowNavbar) {
            const hiddenHeight = (navbarHeight + marginBelowNavbar) - cardTop;
            card.style.clipPath = `inset(${hiddenHeight}px 0 0 0)`;
          } else {
            card.style.clipPath = "inset(0 0 0 0)";
          }
        });
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  const coursesData = [
    {
      img: imgHtml,
      title: "HTML",
      description:
        "Lenguaje de marcado de hipertexto utilizado para la creación de la estructura de las páginas web.",
    },
    {
      img: imgCss,
      title: "CSS",
      description:
        "Lenguaje de diseño gráfico para definir los estilos y crear la presentación de las páginas web.",
    },
    {
      img: imgJs,
      title: "JavaScript",
      description:
        "Lenguaje de programación esencial para el desarrollo web para crear contenido dinámico e interactivo.",
    },
    {
      img: imgReact,
      title: "React",
      description:
        "Biblioteca de JavaScript para construir interfaces de usuario por medio de componentes reutilizables.",
    },
    {
      img: imgNode,
      title: "NodeJs",
      description:
        "Entorno de ejecución de JavaScript del lado del servidor diseñado para gestionar las conexiones.",
    },
    {
      img: imgAngular,
      title: "Angular",
      description:
        "Framework para el desarrollo de aplicaciones web front-end y para aplicaciones complejas.",
    },
    {
      img: imgPhoto,
      title: "Fotografía",
      description:
        "Conceptos y técnicas para una buena composición, iluminación, edición y uso de equipos fotográficos.",
    },
    {
      img: imgEco,
      title: "Agroecología",
      description:
        "Enfoque de producción agrícola sostenible que considera los aspectos ecológicos y sociales.",
    },
    {
      img: imgPodcast,
      title: "Podcast",
      description:
        "Conceptualización básica y planificación avanzada de contenidos. Equipamiento, producción y distribución.",
    },
    {
      img: imgFisica,
      title: "Física Mecánica",
      description:
        "Estudia y analiza el movimiento y reposo de los cuerpos, y su evolución bajo la acción de fuerzas.",
    },
  ];

  return (
    <div>
      <BgCourses />
      <Navbar />
      <div className="wrapper">
        {coursesData.map((course, index) => (
          <CoursesIndex
            key={index}
            img={course.img}
            title={course.title}
            description={course.description}
          />
        ))}
      </div>
    </div>
  );
};
export default Courses;
