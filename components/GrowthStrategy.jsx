import React from "react";

const strategies = [
  "Increased engagement scope with present clients",
  "Prospect for new Businesses",
  "Exploring other countries",
];

export default function GrowthStrategy() {
  return (
    <section className="py-16 px-6 lg:px-24 bg-red-800 text-white">
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
    </section>
  );
}
