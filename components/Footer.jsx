'use client'
import useActiveSection from '@/hooks/useActiveSection';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { motion } from "motion/react"
import { Instagram } from 'lucide-react';


function Footer() {
  const active = useActiveSection(["home", "services", "our-work", "contact-us"]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}


      className='bg-slate-100 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'>

      <div className=' flex justify-between lg:items-center max-lg:flex-col gap-10'>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}


          className=' space-y-5 text-sm text-gray-700'>
          <motion.div className=' flex items-center gap-2 mb-4'>
            <Image src="/volume.jpg" alt="VolumeUpDotCom Logo" width={50} height={50} />
            <Link href="/#home" className="font-bold text-lg md:text-xl text-[#bc383b]">
              VolumeUp
            </Link>
          </motion.div>
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
        </motion.div>
        <div>
          <div>
            <h3 className='text-[#bc383b] font-medium'>Contact Address</h3>

            <p className=' text-gray-700'>
              Block D8, Diamond Estate, Phase 3, Igando Road, Alimosho, Lagos
            </p>
            <p className=' text-gray-700'>
              e.volumeupdotcomltd@gmail.com | sammyjan11@gmail.com
            </p>
          </div>
          <div>

          </div>
        </div>
      </div>
      <hr className='border-gray-700 my-6 border-3' />
      <motion.div

        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}

        className=' text-sm text-gray-700 space-y-2 flex items-center justify-between gap-4'>
        <p>
          Copyright {new Date().getFullYear()} ©  All rights reserved.
        </p> <div className=' flex items-center gap-4 '>
          <Link href='https://www.instagram.com/volumeuplogistics?igsh=MXFsaHg3eWlpb2YyeQ==' target='/' className=' flex gap-1'>
            <Instagram /> instagram

          </Link>
        </div>

      </motion.div>

    </motion.div>
  )
}

export default Footer
