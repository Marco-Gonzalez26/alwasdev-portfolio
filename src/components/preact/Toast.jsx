import React from 'react'

function Toast({ text, open }) {
  return (
    <div
      className='absolute top-0 flex justify-center  px-8 py-4 bg-white rounded m-4 transition-all duration-700 shadow-lg z-50'
      style={{
        transform: open ? 'translateY(50px)' : 'translateY(-1000px)',
        opacity: open ? 1 : 0
      }}>
      <p className='text-lg font-medium'>{text}</p>
    </div>
  )
}

export default Toast
