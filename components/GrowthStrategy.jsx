'use client'
import React from "react";
import { motion } from "motion/react"

const strategies = [
  "Increased engagement scope with present clients",
  "Prospect for new Businesses",
  "Exploring other countries",
];

export default function GrowthStrategy() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      viewport={{ once: true }}


      className="py-16 px-6 lg:px-24 bg-red-800 text-white">
      <div className="max-w-3xl mx-auto">
        {/* Section Title */}
        <h2 className="text-center text-3xl font-bold text-orange-400 mb-12">
          Growth <span className="text-white">Strategy</span>
        </h2>

        {/* List of Strategies */}
        <div className="space-y-6">
          {strategies.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              {/* Number Circle */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-600 text-white font-bold">
                {String(index + 1).padStart(2, "0")}
              </div>
              {/* Text */}
              <p className="text-lg font-bold">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
