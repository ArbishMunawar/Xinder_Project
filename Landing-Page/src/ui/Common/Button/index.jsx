
import React from 'react'

const Button = ({ className, children }) => {
  return (
    <button 
      className={`px-8 rounded-lg bg-rose-700 text-white font-semibold ${className}`}
    >
      {children}
    </button>
  )
}

export default Button;
