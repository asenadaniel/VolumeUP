'use client'
import { Award, Handshake, Heart, ListCheck, ShieldCheck } from 'lucide-react'
import React from 'react'
import { motion } from "motion/react"
import Title from './Title'

function Mission() {
  return (
    <div className="py-10 container mx-auto px-4">
      <Title className='text-center ' title='Our Misson' description={null} />
      <motion.p initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }} className="max-w-3xl mx-auto text-gray-700 mb-9 leading-relaxed">
        Help local and international brands proffer and implement cutting-edge
        strategies capable of profitably achieving our client’s marketing needs
        without compromising on quality and best practice at any particular time.
      </motion.p>


      <Title className='text-center' title='Core Values' description={null} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}

        className="grid md:grid-cols-5 gap-4 max-w-3xl mx-auto text-gray-700 leading-relaxed">
        {[
          { title: "Integrity", icon: <ShieldCheck /> },
          { title: "Excellence", icon: <Award /> },
          { title: "Passion", icon: <Heart /> },
          { title: "TeamWork", icon: <Handshake /> },
          { title: "Discipline", icon: <ListCheck /> }
        ].map(
          (value) => (
            <div
              key={value.title}
              className="p-4 bg-white rounded-xl shadow hover:shadow-md transition"
            >
              <div className="flex  items-center gap-2 ">
                {value.icon}
                <p className="font-semibold">{value.title}</p>
              </div>
            </div>
          )
        )}
      </motion.div>
    </div>
  )
}

export default Mission