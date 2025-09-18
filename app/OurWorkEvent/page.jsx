"use client";
import React from "react";
import Title from "@/components/Title";
import Image from "next/image";
import Link from "next/link";

const videos = [
  "/32.mp4",
  "/33.mp4",
  "/34.mp4",
  "/35.mp4",
  "/36.mp4",
  "/37.mp4",
];

const images = [
  "/17.jpg",
  "/18.jpg",
  "/19.jpg",
  "/20.jpg",
  "/21.jpg",
  "/22.jpg",
  "/23.jpg",
  "/24.jpg",
  "/25.jpg",
  "/26.jpg",
  "/27.jpg",
  "/28.jpg",
  "/29.jpg",
  "/30.jpg",
  "/31.jpg",
];

export default function EventsPage() {
  return (
    <div className="flex flex-col items-center gap-10 px-6 sm:px-12 lg:px-24 xl:px-40 py-16 text-gray-700">

      {/* ✅ Breadcrumbs */}
      <nav className="w-full text-sm mb-6">
        <ol className="flex items-center space-x-2 text-gray-500">
          <li>
            <Link href="/#home" className="hover:text-[#72120e]">Home</Link>
          </li>
          <li className="text-gray-400">/</li>
          <li>
            <Link href="/#our-work" className="hover:text-[#72120e]">Our Work</Link>
          </li>
          <li className="text-gray-400">/</li>
          <li className="text-[#72120e] font-semibold">Events & Activations</li>
        </ol>
      </nav>

      {/* Title */}
      <Title
        title="Our Events & Activations"
        description="A showcase of the impactful experiences we’ve created — from strategy to unforgettable brand activations."
      />

      {/* Videos Section */}
      <div className="w-full">
        <h2 className="text-2xl font-semibold mb-6">Event Videos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((src, i) => (
            <video
              key={i}
              src={src}
              controls
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          ))}
        </div>
      </div>

      {/* Images Section */}
      <div className="w-full">
        <h2 className="text-2xl font-semibold mb-6">Event Gallery</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-lg shadow-md">
              <Image
                src={src}
                alt={`Event ${i + 1}`}
                width={400}
                height={300}
                className="object-cover w-full h-64 hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Return Button */}
      <Link
        href="/#our-work"
        className="mt-12 px-6 py-3 bg-[#72120e] text-white rounded-lg hover:scale-105 transition"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
