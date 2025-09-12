'use client'
import useActiveSection from '@/hooks/useActiveSection'
import assets from '@/public/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(["home", "services", "our-work", "contact-us"]);

  return (
    <div className="flex justify-between items-center px-4 sm:px-2 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl bg-white font-medium border">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image src="/volume.jpg" alt="VolumeUpDotCom Logo" width={50} height={50} />
        <Link href="/#home" className="font-bold text-xl text-[#bc383b]">
          VolumeUp
        </Link>
      </div>

      {/* Menu */}
      <div
        className={`text-gray-700 sm:text-sm ${open ? 'max-sm:w-60 max-sm:pl-10' : 'max-sm:w-0 max-sm:overflow-hidden'}
          max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-[#482928] 
          max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}
      >
        {/* Mobile header */}
        <div>
          <Image
            src="/volume.jpg"
            alt="VolumeUpDotCom Logo"
            width={40}
            height={40}
            className="absolute left-4 top-4 sm:hidden"
          />
          <p className="absolute top-5 left-[60px] sm:hidden">VolumeUP</p>
          <Image
            src={assets.close_icon}
            width={20}
            height={20}
            className="absolute right-4 top-4 sm:hidden cursor-pointer"
            alt="close icon"
            onClick={() => setOpen(false)}
          />
        </div>

        <Link
          onClick={() => setOpen(false)}
          href="/#home"
          className={`${active === "home" ? "text-[#bc383b] font-semibold" : ""} sm:hover:border-b`}
        >
          Home
        </Link>
        <Link
          onClick={() => setOpen(false)}
          href="/#services"
          className={`${active === "services" ? "text-[#bc383b] font-semibold" : ""} sm:hover:border-b`}
        >
          Services
        </Link>
        <Link
          onClick={() => setOpen(false)}
          href="/#our-work"
          className={`${active === "our-work" ? "text-[#bc383b] font-semibold" : ""} sm:hover:border-b`}
        >
          Our Work
        </Link>
        <Link
          onClick={() => setOpen(false)}
          href="/#contact-us"
          className={`${active === "contact-us" ? "text-[#bc383b] font-semibold" : ""} sm:hover:border-b`}
        >
          Contact Us
        </Link>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Mobile menu icon */}
        <Image
          src={assets.menu_icon}
          alt="menu"
          width={45}
          height={45}
          onClick={() => setOpen(true)}
          className="sm:hidden cursor-pointer"
        />

        {/* Connect button */}
        <a
          href="#contact-us"
          className="text-sm max-sm:hidden flex items-center gap-2 bg-[#72120e] text-white px-6 py-2 rounded-full hover:scale-105 transition-all"
        >
          Connect
          <Image src={assets.arrow_icon} width={14} height={14} alt="arrow" />
        </a>
      </div>
    </div>
  )
}

export default Navbar
