import React from 'react'
import { useForm } from 'react-hook-form'
import './formLogin.css'
import { Toaster, toast } from 'sonner'

const FormLogin = () => {
    const { register, handleSubmit, formState:{errors} } = useForm()

    const submit = (data) => {
        console.log(data.email);
        console.log(data.password);
        toast.error('Inicio de sesion con exito');
      }
      return (
        <form onSubmit={handleSubmit(submit)} className='container__form'>
        <fieldset className='container__fieldset'>
            <legend>Iniciar Sesión</legend>
            <br />
            <label htmlFor="">Correo electronico</label>
            <input type="email" name="email" {...register("email")}/>
            <label htmlFor="">Contraseña</label>
            <input type="password" name="password" {...register("password")} />
            <button>Iniciar</button>
        </fieldset>
        <Toaster position="top-center"
         closeButton 
         richColors
         />

    </form>
  )
}

export default FormLogin
