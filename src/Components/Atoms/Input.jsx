import React from 'react'

export const Input = ({ type, placeholder, onChange, value }) => {
  return (
    <input
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className='rounded-md py-2 px-4 mb-4 w-full'
    />
  )
}
