'use client'
import React, { useState } from 'react'
import { motion } from "motion/react"


function ServiceCard({ service, index }) {

  const [position, setPosition] = useState({ x: 0, y: 0 })

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}


      className='relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-b-xl border border-gray-200 shadow-2xl shadow-gray-100'>

      <div className=' pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-red-300 via-red-200 to-red-700 w-[300px] h-[300px] absolute z-0 transition-opacity duration-500 mix-blend-lighten opacity-70' style={{ top: position.y - 150, left: position.x - 150 }}></div>

      <div className=' flex items-center gap-10 p-8 hover:p-7.5 hover:m-0.5 transition-all rounded-[10px] bg-white z-10 relative' >

        <div className=' bg-gray-100 rounded-full'>
          <div className="max-w-24 bg-white m-2">{service.icon}
          </div>
          <div className=' flex-1'>
            <h3 className="md:text-lg text-sm font-semibold">{service.title}
            </h3>

          </div>

        </div>
      </div>

    </motion.div>
  )
}

export default ServiceCard
