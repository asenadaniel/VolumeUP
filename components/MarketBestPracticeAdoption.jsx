import { BarChart3, BookOpen, CheckCircle, Share2, AlertTriangle, FileText } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Record keeping",
    desc: " client on the project. Contact reports, meetings minutes, scope change documents",
    icon: <FileText className="w-10 h-10 text-red-600" />,


  },
  {
    id: "02",
    title: "Reporting & Insights",
    desc: "In field reports sent on daily and weekly basis.",
    icon: <BarChart3 className="w-10 h-10 text-red-600" />,
  },
  {
    id: "03",
    title: "Challenges",
    desc: "Project challenges & Solutions.",
    icon: <AlertTriangle className="w-10 h-10 text-red-600" />,
  },
  {
    id: "04",
    title: "Learning",
    desc: "Observations and learnings per project/events.",
    icon: <BookOpen className="w-10 h-10 text-red-600" />,
  },
  {
    id: "05",
    title: "Evaluation",
    desc: "Evaluation report and client project assessment.",
    icon: <CheckCircle className="w-10 h-10 text-red-600" />,
  },
  {
    id: "06",
    title: "Knowledge Sharing",
    desc: "All of these are available and shared as learning internally within project team.",
    icon: <Share2 className="w-10 h-10 text-red-600" />,
  },
];


export default function MarketBestPracticeAdoption() {
  return (
    <section className="py-16 bg-red-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-2">Market Best Practice Adoption</h2>
        <p className="mb-12 font-bold opacity-90">We keep project files where all dealings and learnings relating to the projects are stored. The dealings include;
        </p>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center bg-white text-black p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="mb-4">{step.icon}</div>
              <span className="text-sm font-bold  text-red-600">{step.id}</span>
              <h3 className="text-lg font-semibold mt-2 mb-2">{step.title}</h3>
              <p className="text-sm font-bold text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
