import { Target, PlayCircle, BarChart3, Trophy, Lightbulb, Dot } from "lucide-react";

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
        <h2 className="text-3xl font-bold mb-2">Case Studies</h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 ">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center bg-white text-black p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="mb-4">{step.icon}</div>
              <span className="text-sm font-bold text-[#194142]">{step.id}</span>
              <h3 className="text-lg font-semibold mt-2 mb-2">{step.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
