import React from "react";
import Image from "next/image";

function TeamCard({ member }) {
  return (
    <div className="flex flex-col xl:flex-row items-center gap-6 bg-white shadow-lg rounded-xl p-6 border-3 border-red-800 hover:shadow-xl transition">
      <div className="w-full sm:w-48 h-64 relative rounded-lg overflow-hidden flex-shrink-0">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-contain"
        />
      </div>
      <div className="flex-1 text-gray-700">
        <h3 className="text-xl font-bold">{member.name}</h3>
        <p className="text-sm font-medium text-red-800 mb-2">{member.role}</p>
        <p className="text-sm leading-relaxed">{member.bio}</p>
      </div>
    </div>
  );
}

export default TeamCard;
