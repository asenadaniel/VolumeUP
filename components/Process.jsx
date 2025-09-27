'use client'
import { Lightbulb, Search, ClipboardList, Rocket, Megaphone, Package } from "lucide-react";
import { motion } from "motion/react"

const steps = [
  {
    id: "01",
    title: "Idea",
    desc: "Every project we work on starts from an idea.",
    icon: <Lightbulb className="w-10 h-10 text-[#3479ae]" />,
  },
  {
    id: "02",
    title: "Research",
    desc: "We proceed with our research to gather insights.",
    icon: <Search className="w-10 h-10 text-[#3479ae]" />,
  },
  {
    id: "03",
    title: "Initiation & Planning",
    desc: "Brief Response, Work Breakdown Structure, Project Management Plan, Align & Agree, Sign Offs Project Charter/PO.",
    icon: <ClipboardList className="w-10 h-10 text-[#3479ae]" />,
  },
  {
    id: "04",
    title: "Execution",
    desc: "Commission project team, Get required approvals/permits, execute.",
    icon: <Rocket className="w-10 h-10 text-[#3479ae]" />,
  },
  {
    id: "05",
    title: "Monitoring & Control",
    desc: "Periodic Reviews & audit, Classic Mystery, Reporting, Risk & Quality Control, Integrated Change Control.",
    icon: <Megaphone className="w-10 h-10 text-[#3479ae]" />,
  },
  {
    id: "06",
    title: "Evaluation & Closing",
    desc: "Performance assessment, learning, reconciliation(Budget and materials), Disengagement Contract.",
    icon: <Package className="w-10 h-10 text-[#3479ae]" />,
  },
];

export default function Process() {
  return (
    <section className="py-16 bg-[#3479ae] text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}

          className="text-3xl font-bold mb-2">OUR PROCESS</motion.h2>
        <motion.p

          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}

          className="mb-12 font-bold opacity-90">Our operational frame</motion.p>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center bg-white text-black p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="mb-4">{step.icon}</div>
              <span className="text-sm font-bold text-[#3479ae]">{step.id}</span>
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}

                className="text-lg font-semibold mt-2 mb-2">{step.title}</motion.h3>
              <motion.p

                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}

                className="text-sm font-bold text-gray-600">{step.desc}</motion.p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
