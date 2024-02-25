import React, { useState } from 'react'
import { Input } from '../Atoms/Input'
import { Button } from '../Atoms/Button'

export const Form = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

  return (
    <form className='max-w-xs border-black mx-auto mt-8 p-12 rounded-md shadow-lg'>
        <h1 className='text-center text-2xl text-white mb-5'>Iniciar Sesion</h1>
        <div className='mb-5 block'>
          <label htmlFor="" className=' text-2xl text-white text-center  font-bold'>Email</label>
        <Input  type="text" placeholder="Username" onChange={setUsername}/>
        </div>
        <div className='mb-5 block'>
          <label htmlFor="" className='text-2xl text-white text-center  font-bold'> Password</label>
        <Input  type="text" placeholder="Username" onChange={setUsername}/>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <button type='submit' className=' bg-purple-900 hover:bg-purple-950 text-white rounded-md py-1 px-6 mt-4'> Iniciar sesion</button>
          <button className='mt-4 bg-none text-white'>I don't have a count</button>
        </div>
    </form>
  )
}
