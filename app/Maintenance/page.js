"use client";
import { Clock, Wrench } from "lucide-react";

export default function MaintenancePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#72120e] via-[#9c2b27] to-[#d84f48] text-white px-6">
      {/* Icon */}
      <div className="flex items-center gap-2 mb-6">
        <Wrench className="w-12 h-12 animate-spin-slow" />
        <Clock className="w-10 h-10 animate-pulse" />
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center">
        We’ll Be Back Soon 🚧
      </h1>

      {/* Description */}
      <p className="text-lg md:text-xl text-center max-w-2xl mb-8">
        Our website <span className="font-semibold">VolumeUp Limited</span> is
        currently undergoing scheduled maintenance to improve your experience.
        Please check back shortly.
      </p>

      {/* Contact Info */}
      <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg text-center">
        <p className="font-medium">Need immediate assistance?</p>
        <p className="text-sm">
          📧{" "}
          <a
            href="mailto:e.volumeupdotcomltd@gmail.com"
            className="underline hover:text-gray-200"
          >
            sammyjan11@gmail.com


          </a>
        </p>
        <p className="text-sm">📞 08035499944 & 08028287435</p>
      </div>

      {/* Footer */}
      <p className="mt-10 text-sm opacity-80">
        © {new Date().getFullYear()} VolumeUp Limited. All Rights Reserved.
      </p>
    </div>
  );
}
