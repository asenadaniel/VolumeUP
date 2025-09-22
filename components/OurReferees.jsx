'use client'
import Image from "next/image";
import React from "react";
import Title from "./Title";
import { motion } from "motion/react"


function OurReferees() {
  return (
    <div id='services' className=' relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 py-18 text-gray-700'>
      <Title
        title=" Our Referees"
        description="Companies we have partner with in over the past few years."
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl text-sm md:text-lg mx-auto text-gray-700 leading-relaxed">
        {[
          { title: "Livespot360", icon: "/livespot360.jpg" },
          { title: "Wakanow", icon: "/wakanow.jpg" },
          { title: "Nitro 121", icon: "/nitro121.jpg" },
          { title: "Stinos", icon: "/stinos.jpg" },
          { title: "Vista", icon: "/visita.jpg" },
          { title: "TrueCaller", icon: "/truecaller.jpg" },
          { title: "SwitchOnline", icon: "/switchonline.jpg" },
        ].map((company) => (
          <motion.div

            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            key={company.title}

            className="p-5 bg-white rounded-xl shadow hover:shadow-md transition flex items-center gap-3"
          >
            <Image
              src={company.icon}
              alt={company.title}
              width={40}
              height={40}
              className="object-contain"
            />
            <p className="font-semibold">{company.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default OurReferees;
