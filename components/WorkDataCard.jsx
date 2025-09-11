import React from "react";

export default function WorkDataCard() {
  WorkData.map((work) => (
    <div key={work.id} className="p-6 bg-white rounded-xl shadow mb-6">
      <h3 className="text-xl font-bold text-[#72120e] mb-2">{work.title}</h3>
      <div className="space-y-2 text-gray-700">
        <p><span className="font-semibold">CLIENT REQUESTED:</span> {work.clientRequested}</p>
        <p><span className="font-semibold">WHAT WE DID:</span> {work.whatWeDid}</p>
        {work.result && (
          <p><span className="font-semibold">RESULT:</span> {work.result}</p>

        )}
      </div>
    </div>
  ))
}
