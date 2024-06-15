/* eslint-disable react/prop-types */
import './CoursesIndex.css'

// Componente de tarjetas de los cursos en el index principal.
// Utilizamos destructuring para extraer las propiedades directamente de 'props'
const CoursesIndex = ({ img, title, description }) => {
  return (
    <div>

        {/* Contenedor principal de la tarjeta del curso */}
        <div className="card">

            {/* Contenedor interno de la tarjeta */}
            <div className="card-inner">
                {/* Imagen del curso con un atributo 'alt' para accesibilidad */}
                <img src={img} className="card-image" alt={title} />
                {/* Título del curso */}
                <h2 className="card-title">{title}</h2>
                {/* Descripción del curso */}
                <p className="card-description">{description}</p>
            </div>

            {/* Botón para ver más detalles del curso */}
            <button className="card-btn">Ver Curso</button>
        </div>

    </div>
  )
}

export default CoursesIndex;