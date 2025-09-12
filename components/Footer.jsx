'use client'
import useActiveSection from '@/hooks/useActiveSection';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

function Footer() {
  const active = useActiveSection(["home", "services", "our-work", "contact-us"]);

  return (
    <div className='bg-slate-100 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'>

      <div className=' flex justify-between lg:items-center max-lg:flex-col gap-10'>
        <div className=' space-y-5 text-sm text-gray-700'>
          <div className=' flex items-center gap-2 mb-4'>
            <Image src="/volume.jpg" alt="VolumeUpDotCom Logo" width={50} height={50} />
            <Link href="/#home" className="font-bold text-lg md:text-xl text-[#bc383b]">
              VolumeUp
            </Link>
          </div>
          <p className=' max-w-md'>From strategy to execution, we deliver marketing, media, and logistics solutions that bring your brand to life.</p>

          <ul className='flex gap-8'>
            <li>
              <Link href="/#home"
                className={`${active === "home" ? "text-[#bc383b] font-semibold" : ""} sm:hover:border-b hover:text-[#bc383b]`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link href="/#services"
                className={`${active === "services" ? "text-[#bc383b] font-semibold" : ""} sm:hover:border-b hover:text-[#bc383b]`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link href="/#our-work"
                className={`${active === "our-work" ? "text-[#bc383b] font-semibold" : ""} sm:hover:border-b hover:text-[#bc383b]`}
              >
                Our Work
              </Link>
            </li>
            <li>
              <Link href="/#contact-us"
                className={`${active === "contact-us" ? "text-[#bc383b] font-semibold" : ""} sm:hover:border-b hover:text-[#bc383b]`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>


      </div>
      <hr className='border-gray-700 my-6 border-3' />
      <div className=' text-sm text-gray-700 space-y-2'>
        <p>
          Copyright {new Date().getFullYear()} ©  All rights reserved.
        </p>
        <div className=' flex items-center justify-between gap-4'></div>
      </div>

    </div>
  )
}

export default Footer
