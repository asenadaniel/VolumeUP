
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { OurWorkImg } from "@/public/assets/assets";
import Title from "./Title";
import { motion } from "motion/react";
import Link from "next/link";

export default function OurWorkGallery() {
  const itemsPerPage = 6;
  const [page, setPage] = useState(0);

  const start = page * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = OurWorkImg.slice(start, end);

  return (
    <div
      id="our-work"
      className="flex flex-col items-center gap-10 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700"
    >
      {/* Section Title */}
      <Title
        title="Events & Activation"
        description="We transform ideas into experiences that spark engagement and lasting impressions."
      />

      {/* Highlight Video */}


      {/* Image Gallery */}
      <div className="grid md:grid-cols-2 gap-6">
        {currentItems.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden sm:hover:scale-110 transition-all cursor-pointer shadow border-[#b51168] border-[10px]"
          >
            <Image
              src={img}
              width={400}
              height={300}
              alt={`Our Work ${start + index + 1}`}
              className="object-contain w-full h-64"
            />
          </motion.div>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex gap-1 flex-col mt-3 item-cente">
        <div className="flex gap-4 mt-4">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
            disabled={page === 0}
            className="px-4 py-2 bg-[#72120e] text-white rounded disabled:opacity-50"
          >
            Prev
          </button>
          <button
            onClick={() => setPage((p) => (end < OurWorkImg.length ? p + 1 : p))}
            disabled={end >= OurWorkImg.length}
            className="px-4 py-2 bg-[#72120e] text-white rounded disabled:opacity-50"
          >
            Next
          </button>

        </div>
        <Link
          href="/OurWorkEvent"
          className="mt-8 px-6 py-3 bg-[#72120e] text-white rounded-lg hover:scale-105 transition"
        >
          View All Events
        </Link>
      </div>
    </div>
  );
}
