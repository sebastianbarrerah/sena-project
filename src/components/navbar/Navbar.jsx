import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <nav className='navbar__home'>
        <a href="" className='item__home'>Inicio</a>
        <a href="" className='item__home'>Pendientes</a>
        <a href="" className='item__home'>Evidencias</a>
        <a href="" className='item__home close'>Cerrar Sesión</a>
    </nav>
  )
}

export default Navbar
