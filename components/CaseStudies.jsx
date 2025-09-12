'use client'
import { Target, PlayCircle, BarChart3, Trophy, Lightbulb, Dot } from "lucide-react";
import { motion } from "motion/react"

const steps = [
  {
    id: "01",
    title: "Ideation",
    icon: <Lightbulb className="w-10 h-10 text-[#194142]" />,
  },
  {
    id: "02",
    title: "Strategy",
    icon: <Target className="w-10 h-10 text-[#194142]" />,
  },
  {
    id: "03",
    title: "Execution",
    icon: <PlayCircle className="w-10 h-10 text-[#194142]" />,
  },
  {
    id: "04",
    title: "Measurement",
    icon: <BarChart3 className="w-10 h-10 text-[#194142]" />,
  },
  {
    id: "05",
    title: "Results",
    icon: <Trophy className="w-10 h-10 text-[#194142]" />,
  },
];


export default function CaseStudies() {
  return (
    <section className="py-16 bg-[#194142] text-white ">
      <div className="container mx-auto px-4 text-center flex flex-col items-center gap-8 justify-center ">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}

          className="text-2xl md:text-3xl font-bold mb-2">Case Studies</motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 ">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center bg-white text-black md:p-6 p-4 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="mb-4">{step.icon}</div>
              <span className="text-sm font-bold text-[#194142]">{step.id}</span>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }} className="text-sm md:text-lg font-semibold mt-2 mb-2">{step.title}</motion.h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
