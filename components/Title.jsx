import React from 'react'

function Title({ title, description }) {
  return (
    <>
      <h2 className=' text-2xl text-[#72120e] sm:text-3xl font-bold'>{title}
      </h2>
      <p className=' max-w-lg text-center text-gray-500 mb-6'>{description}</p>
    </>
  )
}

export default Title
