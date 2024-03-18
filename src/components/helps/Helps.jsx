import React from 'react'
import guia from '../../assets/guiaDeAprendizaje/guiaDeAprendizaje8.pdf'
import './helps.css'

const Helps = () => {
  return (
    <section className='container__helps'>
        <div className='division__helps'>
            <img src="https://dinahosting.com/blog/upload/2023/09/Imagen-principal-blog-12B.jpg" alt="Guia de aprendizaje" />
            <h1>Guia de aprendizaje</h1>
            <a download={guia}>Descargar</a>
        </div>

        <div className='division__helps'>
            <img src="https://marketplace.canva.com/EAF8Hgtptik/1/0/1600w/canva-blanco-y-verde-femenino-floral-padres-y-beb%C3%A9-calendario-de-pared-1a1JzjEN42I.jpg" alt="Cronograma" />
            <h1>Cronograma</h1>
        </div>

        <div className='division__helps'>
            <img src="https://static.vecteezy.com/system/resources/previews/012/891/989/non_2x/grading-system-a-grades-for-school-sign-exam-result-written-in-red-pen-icon-for-student-and-education-marker-evaluation-study-score-scribble-vector.jpg" alt="calificacion" />
            <h1>Calificación</h1>
        </div>
    </section>
  )
}

export default Helps
