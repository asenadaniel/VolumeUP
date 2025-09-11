import { Lightbulb, Search, ClipboardList, Rocket, Megaphone, Package } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Idea",
    desc: "Every project we work on starts from an idea.",
    icon: <Lightbulb className="w-10 h-10 text-red-600" />,
  },
  {
    id: "02",
    title: "Research",
    desc: "We proceed with our research to gather insights.",
    icon: <Search className="w-10 h-10 text-red-600" />,
  },
  {
    id: "03",
    title: "Initiation & Planning",
    desc: "Brief, response, work breakdown structure, approvals, project plan.",
    icon: <ClipboardList className="w-10 h-10 text-red-600" />,
  },
  {
    id: "04",
    title: "Execution",
    desc: "Commission project team, get approvals, execute.",
    icon: <Rocket className="w-10 h-10 text-red-600" />,
  },
  {
    id: "05",
    title: "Monitoring & Control",
    desc: "Reviews, audit, reporting, risk & quality control, integrated change.",
    icon: <Megaphone className="w-10 h-10 text-red-600" />,
  },
  {
    id: "06",
    title: "Evaluation & Closing",
    desc: "Performance assessment, learning, reconciliation, disengagement.",
    icon: <Package className="w-10 h-10 text-red-600" />,
  },
];

export default function Process() {
  return (
    <section className="py-16 bg-red-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-2">OUR PROCESS</h2>
        <p className="mb-12 font-bold opacity-90">Our operational frame</p>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center bg-white text-black p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="mb-4">{step.icon}</div>
              <span className="text-sm font-bold text-red-600">{step.id}</span>
              <h3 className="text-lg font-semibold mt-2 mb-2">{step.title}</h3>
              <p className="text-sm font-bold text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
