"use client"
import assets from '@/public/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

function Hero() {
  return (
    <div id='home' className=' flex flex-col items-center gap-6 py-[80px] px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700'>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        className="w-[50px] h-[50px] relative"
      >
        <Image
          src="/volume.jpg"
          alt="VolumeUpDotCom Logo"
          fill
          className="object-contain"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}

        className=' inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full'>
        <Image
          src={assets.group_profile} width={30} height={30} alt='group' />
        <p className=' text-xs font-medium'>Trusted by people</p>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}

        className=' text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font medium xl:leading-[95px] max-w-5xl mx-auto'>



      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}

        className='max-w-3xl mx-auto'> <span className=' font-extrabold text-black'>Volume Up Dot Com Limited</span> is a Nigerian experiential <span className=' font-semibold text-[#72120e]'>Marketing</span>, <span className=' font-semibold  text-[#72120e]'>Media</span> and <span className=' font-semibold  text-[#72120e]'>Logistics</span> consulting firm. We deploy strategic solutions that help brands extract value and build market leadership.

      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        viewport={{ once: true }}
      >
        <img src="/VolumeUPhero.jpg" alt="" className='max-w-6xl w-full ' />
        <div className=' relative'>
          <Image src="/volume.jpg" alt="VolumeUpDotCom Logo" width={50} height={50} className=' absolute bottom-1' />
          <p className=' absolute bottom-2 left-16 text-xs font-semibold text-[#72120e] italic'>VolumeUP</p>
        </div>
      </motion.div>

      <div className='flex flex-col items-center gap-2'>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}

          className=' text-gray-500 italic w-72 md:w-96 lg:w-[600px]'>
          "A Brand is not so much about rational arguments, but the way the company resonates with the people emotionally. <span className='text-[#72120e] font-semibold'>MARKETING IS ABOUT VALUES</span>"
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}

          className=' text-gray-500 italic w-72 md:w-96 lg:w-[600px]'>
          "Creativity is intelligence having fun"
        </motion.p>
      </div>
    </div>
  )
}

export default Hero

