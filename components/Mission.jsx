import { Award, Handshake, Heart, ListCheck, ShieldCheck } from 'lucide-react'
import React from 'react'

function Mission() {
  return (
    <div className="py-6 container mx-auto px-4">
      <h2 className="text-2xl text-center font-bold mb-3 text-[#72120e]">Our Mission </h2>
      <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
        Help local and international brands proffer and implement cutting-edge
        strategies capable of profitably achieving our client’s marketing needs
        without compromising on quality and best practice at any particular time.
      </p>

      <h3 className="text-2xl mt-8 mb-4 text-center font-bold text-[#72120e]">Core Values</h3>
      <div className="grid md:grid-cols-5 gap-4 max-w-3xl mx-auto text-gray-700 leading-relaxed">
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
      </div>
    </div>
  )
}

export default Mission