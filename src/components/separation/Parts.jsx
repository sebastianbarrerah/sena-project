import React from 'react'
import './parts.css'
import FormLogin from '../formLogin/FormLogin';

export const Parts = () => {
  return (
    <section className='container__separation'>
        <div className='separation__one'>
            <FormLogin/>
        </div>
        <div className='separation__two'>
            <h1 className='title__register'>¿Quieres registrarte como?</h1>
            <div className='part__buttons'>
              <button className='btn__register'>Aprendiz</button>
              <button className='btn__register'>Instructor</button>
            </div>
        </div>
    </section>
  )
}

export default Parts;

