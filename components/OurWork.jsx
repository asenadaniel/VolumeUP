"use client";
import React, { useState } from "react";
import Image from "next/image";
import { OurWorkImg } from '@/public/assets/assets'
import Title from "./Title";


export default function OurWorkGallery() {
  const itemsPerPage = 6;
  const [page, setPage] = useState(0);

  const start = page * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = OurWorkImg.slice(start, end);

  return (
    <div id='our-work' className="flex flex-col items-center gap-6 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700">
      <Title title='Events & Activation' description='We transform ideas into experiences that spark engagement and lasting impressions.' />
      {/* Images */}
      <div className="grid md:grid-cols-2 gap-6 ">
        {currentItems.map((img, index) => (
          <div key={index} className="rounded-xl overflow-hidden sm:hover:scale-110 transition-all cursor-pointer shadow border-[#b51168] border-[10px]">
            <Image
              src={img}
              width={400}
              height={300}
              alt={`Our Work ${start + index + 1}`}
              className="object-contain w-full h-64"
            />
          </div>
        ))}
      </div>

      {/* Pagination controls */}
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
    </div>
  );
}
