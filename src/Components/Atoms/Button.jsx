import React from 'react'

export const Button = ({ children, type }) => {
  return (
    <button type={ type } className='bg-blue-500 text-white rounded-md py-2 px-4 mt-4' >
        { children }
    </button>
  )
}
