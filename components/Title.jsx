'use client'
import React from 'react'
import { motion } from "motion/react"

function Title({ title, description }) {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}

        className=' text-2xl text-center text-[#72120e] sm:text-3xl font-bold'>{title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}

        className=' max-w-lg text-center text-gray-500 mb-6'>{description}</motion.p>
    </>
  )
}

export default Title
