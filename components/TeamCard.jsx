'use client'
import React from "react";
import Image from "next/image";
import { motion } from "motion/react"

function TeamCard({ member }) {
  return (
    <div className="flex flex-col xl:flex-row items-center gap-6 bg-white shadow-lg rounded-xl p-6 border-3 border-red-800 hover:shadow-xl transition">
      <div className="w-full sm:w-48 h-64 relative rounded-lg overflow-hidden flex-shrink-0">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-contain"
        />
      </div>
      <div className="flex-1 text-gray-700">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}

          className="text-xl font-bold">{member.name}</motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}

          className="text-sm font-medium text-red-800 mb-2">{member.role}</motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}

          className="text-sm leading-relaxed">{member.bio}</motion.p>
      </div>
    </div>
  );
}

export default TeamCard;
